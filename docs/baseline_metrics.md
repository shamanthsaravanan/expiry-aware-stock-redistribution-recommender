# Baseline Metrics

To quantify the value of the Expiry-Aware Stock Redistribution Recommender, we established a baseline using the synthetic data generation pipeline. The metrics calculate the overall inventory value, identify the value of stock at risk of expiring soon, and project how much of that stock will likely be wasted without redistribution.

## Key Metrics Calculated

1. **Total Inventory Value (TIV):** The total financial value of all medication currently in the system.
2. **Value At Risk (VAR):** The value of stock that is due to expire within the next 14 days.
3. **Projected Waste:** The value of at-risk stock that is *not expected to be consumed* at its current location, based on local daily demand multiplied by the days remaining until expiry.
4. **Potential Savings:** The value of Projected Waste that the recommender has successfully identified a viable destination for, meaning it will likely be consumed before expiring.

## Results (Based on 500 Synthetic Records)

*Note: These figures are dynamically generated and may differ slightly on subsequent runs. View the interactive prototype dashboard for current numbers.*

- **Total Inventory Value:** Found in prototype dashboard.
- **Value At Risk:** Represents a substantial portion of inventory due to poor stock rotation.
- **Projected Waste:** Represents the direct financial loss if no action is taken.
- **Potential Savings:** The core value proposition of our Recommender Engine.

By automating the identification of this waste and suggesting optimal transfers, the system preserves high-value medicines and reduces unnecessary hospital expenditures.
