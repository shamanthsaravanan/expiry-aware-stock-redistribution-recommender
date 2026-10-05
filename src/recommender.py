import pandas as pd
import numpy as np
import os
import json

def calculate_baseline(df):
    # Total inventory value
    df['total_value'] = df['quantity'] * df['unit_value']
    tiv = df['total_value'].sum()
    
    # At-risk stock (e.g., <= 14 days to expiry)
    at_risk_mask = df['days_to_expiry'] <= 14
    at_risk_value = df.loc[at_risk_mask, 'total_value'].sum()
    
    # Projected waste
    df['est_consumption'] = df['local_daily_demand'] * df['days_to_expiry']
    df['projected_waste_qty'] = np.maximum(0, df['quantity'] - df['est_consumption'])
    df['projected_waste_value'] = df['projected_waste_qty'] * df['unit_value']
    
    waste_value = df.loc[at_risk_mask, 'projected_waste_value'].sum()
    
    metrics = {
        "total_inventory_value": round(tiv, 2),
        "at_risk_value": round(at_risk_value, 2),
        "projected_waste_value": round(waste_value, 2)
    }
    return metrics

def generate_recommendations(df):
    recommendations = []
    at_risk_items = df[(df['days_to_expiry'] <= 14) & (df['projected_waste_qty'] > 0)].copy()
    
    for _, item in at_risk_items.iterrows():
        med_name = item['medicine_name']
        # Find locations with demand for this medicine
        other_locs = df[(df['medicine_name'] == med_name) & (df['current_location'] != item['current_location'])]
        loc_demand = other_locs.groupby('current_location')['local_daily_demand'].mean().reset_index()
        loc_demand = loc_demand.sort_values(by='local_daily_demand', ascending=False)
        
        if not loc_demand.empty and loc_demand.iloc[0]['local_daily_demand'] > 0:
            best_loc = loc_demand.iloc[0]['current_location']
            demand_rate = loc_demand.iloc[0]['local_daily_demand']
            
            can_consume_qty = demand_rate * item['days_to_expiry']
            transfer_qty = min(item['projected_waste_qty'], can_consume_qty)
            
            if transfer_qty > 0:
                is_high_impact = "Operating Room" in best_loc or "Operating Room" in item['current_location'] or (transfer_qty * item['unit_value'] > 500)
                
                recommendations.append({
                    "batch_id": item['batch_id'],
                    "medicine": med_name,
                    "from_location": item['current_location'],
                    "to_location": best_loc,
                    "transfer_qty": int(transfer_qty),
                    "value_saved": round(transfer_qty * item['unit_value'], 2),
                    "is_high_impact": bool(is_high_impact),
                    "days_to_expiry": int(item['days_to_expiry'])
                })
                
    # Sort by value saved
    recommendations.sort(key=lambda x: x['value_saved'], reverse=True)
    return recommendations

if __name__ == "__main__":
    df = pd.read_csv('data/inventory.csv')
    metrics = calculate_baseline(df)
    recs = generate_recommendations(df)
    
    total_saved = sum(r['value_saved'] for r in recs)
    metrics['potential_savings'] = round(total_saved, 2)
    
    os.makedirs('data', exist_ok=True)
    os.makedirs('prototype', exist_ok=True)
    
    with open('data/baseline.json', 'w') as f:
        json.dump(metrics, f, indent=2)
        
    with open('data/recommendations.json', 'w') as f:
        json.dump(recs, f, indent=2)
        
    with open('prototype/data.js', 'w') as f:
        f.write(f"const baselineMetrics = {json.dumps(metrics, indent=2)};\n")
        f.write(f"const recommendations = {json.dumps(recs, indent=2)};\n")
        
    print(f"Metrics: {metrics}")
    print(f"Generated {len(recs)} recommendations.")
