# Edge Case Testing

A robust recommendation engine must handle edge cases gracefully to avoid compromising patient care or creating dangerous redistributions. We have documented and handled the following critical edge cases.

## Edge Case 1: Infinite Supply Trap (High Value, Zero Demand)
**Scenario:** A medication has an extremely high volume of near-expiry stock, but *no* other location in the hospital has enough local daily demand to consume it within the remaining days.
**Expected Behavior:** The recommender should not suggest transferring the entire bulk amount. It should only transfer what the target location can realistically consume before expiry, leaving the remaining (un-savable) stock where it is to prevent simply shifting the waste from one ward to another.
**Implementation:** In `src/recommender.py`, the engine calculates `can_consume_qty = demand_rate * days_to_expiry` and caps the `transfer_qty` to `min(projected_waste_qty, can_consume_qty)`. 

## Edge Case 2: Negative Projected Waste
**Scenario:** A location has near-expiry stock, but their local daily demand is so high that they will easily consume all of it before it expires.
**Expected Behavior:** The recommender should *not* recommend moving this stock away, even if another location wants it.
**Implementation:** The logic uses `np.maximum(0, quantity - est_consumption)` to determine `projected_waste_qty`. Only items with `projected_waste_qty > 0` are evaluated for redistribution.

## Edge Case 3: Clinician Override & Audit Logging
**Scenario:** The recommender suggests a transfer of a high-urgency medication (e.g., from Ward A to Operating Room 1), but Ward A's head clinician knows a patient arriving tomorrow will require it, even though historical demand is low.
**Expected Behavior:** The system must allow the human reviewer to reject the transfer. More importantly, it must capture *why* they rejected it to refine future demand forecasts.
**Implementation:** The prototype UI features an explicit "Reject (Override)" button that surfaces a dropdown for selecting the reason (e.g., "Clinical Hold"). This is a critical human-in-the-loop safety measure.
