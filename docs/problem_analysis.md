# Problem Analysis: Expiry-Aware Stock Redistribution Recommender

## 1. Problem Statement
Hospital pharmacies supply wards, operating rooms, and outpatients with synthetic medicines. Currently, near-expiry stock is frequently discovered too late for responsible consumption or redistribution. This leads to:
- **Financial loss** from wasted high-value stock.
- **Suboptimal patient care** potential if essential medication is out of date or unavailable when needed.
- **Operational inefficiencies** due to last-minute stock transfers or emergency restocking.

## 2. Current State vs. Desired State
- **Current State:** Reactive stock management. Expiring medications are identified during manual checks or when they have already expired.
- **Desired State:** Proactive, expiry-aware redistribution. The system should recommend redistributing near-expiry stock to areas with higher imminent demand, thereby ensuring usage before expiration while preserving clinician control over final actions.

## 3. Key Challenges
- **Complex Inventory Tracking:** Stock is distributed across multiple locations (Main Pharmacy, Wards, Operating Rooms).
- **Variable Demand:** Different locations have different demand profiles. Operating Rooms might have sporadic but high-value usage, while Outpatients might have steady daily demand.
- **Safety and Compliance:** Any redistribution must ensure patient safety and comply with hospital protocols. High-impact actions require human confirmation.

## 4. Solution Overview: Expiry-Aware Recommender
The proposed solution is an intelligent recommendation system that uses batch, quantity, expiry, demand, and location data to suggest optimal stock transfers. 

### Core Features:
- **Predictive Expiry Analysis:** Identifies stock at risk of expiring before it is consumed at its current location.
- **Demand Forecasting:** Estimates future usage across different hospital locations.
- **Redistribution Logic:** Matches at-risk stock with locations where demand outpaces supply, prioritizing locations with urgent needs or higher consumption rates.
- **Human-in-the-Loop:** All recommendations for high-impact transfers require human review and confirmation. Override reasons must be captured for auditing and model improvement.

## 5. Value Proposition
- **Quantifiable Savings:** By tracking the value of stock used or transferred before expiry, the system will demonstrate measurable financial savings (measured against a baseline).
- **Reduced Waste:** Directly decreases the volume of synthetic medicines discarded due to expiry.
- **Improved Availability:** Optimizes stock placement, ensuring medicines are where they are most needed.
