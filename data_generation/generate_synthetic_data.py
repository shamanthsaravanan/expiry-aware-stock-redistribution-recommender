import pandas as pd
import numpy as np
from datetime import datetime, timedelta
import random
import os

# Configuration
NUM_RECORDS = 500
LOCATIONS = ['Main Pharmacy', 'Ward A', 'Ward B', 'Ward C', 'Operating Room 1', 'Operating Room 2', 'Outpatients']
MEDICINES = [
    {'name': 'SynthOxy', 'base_value': 15.50, 'urgency_factor': 1.0},
    {'name': 'NeuroBlock-Z', 'base_value': 120.00, 'urgency_factor': 3.0}, # High value, high urgency (OR)
    {'name': 'CardioSynth', 'base_value': 45.00, 'urgency_factor': 2.0},
    {'name': 'PainRelief-X (Synthetic)', 'base_value': 5.00, 'urgency_factor': 1.0},
    {'name': 'ImmunoBoost-Alpha', 'base_value': 85.00, 'urgency_factor': 1.5}
]

def generate_inventory_data(num_records):
    """Generates synthetic inventory data including batches, quantities, expiries, and locations."""
    data = []
    start_date = datetime.now()
    
    for _ in range(num_records):
        med = random.choice(MEDICINES)
        location = random.choice(LOCATIONS)
        batch_id = f"BTH-{random.randint(1000, 9999)}"
        quantity = random.randint(10, 500)
        
        # Generate expiry dates: some near-expiry (0-14 days), some mid (15-60), some far (60+)
        expiry_type = random.choices(['near', 'mid', 'far'], weights=[0.2, 0.5, 0.3])[0]
        if expiry_type == 'near':
            days_to_expiry = random.randint(1, 14)
        elif expiry_type == 'mid':
            days_to_expiry = random.randint(15, 60)
        else:
            days_to_expiry = random.randint(61, 365)
            
        expiry_date = start_date + timedelta(days=days_to_expiry)
        
        # Simulate local daily demand based on location
        if 'Operating Room' in location and med['urgency_factor'] > 1.5:
            daily_demand = random.uniform(5, 20) # Higher demand for urgent meds in OR
        elif 'Outpatients' in location and med['urgency_factor'] == 1.0:
            daily_demand = random.uniform(20, 100) # High steady demand for basic meds
        else:
            daily_demand = random.uniform(0, 10)
            
        data.append({
            'medicine_name': med['name'],
            'batch_id': batch_id,
            'current_location': location,
            'quantity': quantity,
            'unit_value': med['base_value'],
            'expiry_date': expiry_date.strftime('%Y-%m-%d'),
            'days_to_expiry': days_to_expiry,
            'local_daily_demand': round(daily_demand, 2)
        })
        
    return pd.DataFrame(data)

if __name__ == "__main__":
    print("Generating synthetic inventory data...")
    df = generate_inventory_data(NUM_RECORDS)
    
    # Ensure data directory exists
    os.makedirs('../data', exist_ok=True)
    
    # Save to CSV
    output_path = '../data/inventory.csv'
    df.to_csv(output_path, index=False)
    print(f"Successfully generated {NUM_RECORDS} records and saved to {output_path}")
    print(df.head())
