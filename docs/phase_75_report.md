# Phase Report: Expiry-Aware Stock Redistribution Recommender (75% Milestone)

**Project Status:** 75% Complete
**Evaluation Preparedness:** Comprehensive Technical Review

## 1. Executive Summary & Feedback Implementation
This Phase Report outlines the architecture, algorithms, and modules implemented to date for the Expiry-Aware Stock Redistribution Recommender. This system mitigates financial waste in hospital pharmacies by proactively redistributing near-expiry synthetic medications to high-demand locations. 

**Response to Previous Feedback:**
We have explicitly incorporated the following elements based on previous evaluations:
1. **Human-in-the-Loop Safeguards:** Addressed concerns regarding fully automated transfers of critical care medications by implementing a mandatory human-review workflow for "High Impact" redistributions.
2. **Advanced Edge Case Handling:** Resolved potential circular transfer loops ("Infinite Supply Trap") by strictly capping redistribution recommendations to what the target location can realistically consume before the expiration date.

## 2. Problem Addressed
Currently, hospital supply chains suffer from reactive stock management. High-value medications approach expiration while stationed in low-demand wards (e.g., Outpatients), simultaneously forcing high-demand wards (e.g., Operating Rooms) to order new stock. This leads to quantifiable financial loss, suboptimal patient care, and last-minute emergency restocking inefficiencies.

## 3. Objectives
- **Predictive Identification:** Automatically identify stock at risk of expiring before local consumption.
- **Intelligent Routing:** Algorithmically match at-risk stock with locations where immediate demand outpaces current supply.
- **Measurable ROI:** Calculate and track "Potential Savings" against baseline inventory values.
- **Clinical Safety:** Maintain strict human oversight and override capabilities for high-value or critical-ward transfers.

## 4. System Architecture
The system utilizes a decoupled, data-driven architecture:
- **Data Generation Layer:** A robust Python pipeline generating synthetic mock records mirroring a live hospital inventory database.
- **Core Engine (Backend):** A Python-based algorithmic engine utilizing Pandas/Numpy to process batch data, compute waste projections, and output actionable JSON payloads.
- **Presentation Layer (Frontend):** A localized, vanilla HTML/CSS/JS dashboard that consumes JSON payloads to render dynamic analytics, metrics, and an interactive human-in-the-loop approval interface.

## 5. Implemented Modules
- **`generate_synthetic_data.py`**: Simulates the inventory environment (500 records), incorporating variables like `batch_id`, `current_location`, `unit_value`, `days_to_expiry`, and `local_daily_demand`.
- **`recommender.py`**: The core algorithmic module. It calculates four key baseline metrics (Total Inventory Value, Value at Risk, Projected Waste, and Potential Savings) and constructs a sorted array of optimal transfers.
- **`prototype/index.html` (Dashboard UI)**: A dynamic, glassmorphism-styled dashboard rendering key metrics and a review queue for pending transfers.
- **`prototype/app.js`**: Client-side logic handling the DOM manipulation, currency formatting, and modal interactions for the Clinician Override workflow.

## 6. Technologies Stack
- **Data Processing:** Python 3, Pandas, NumPy
- **Frontend / Prototyping:** HTML5, CSS3 (Vanilla, CSS Variables), JavaScript (ES6)
- **Data Interchange:** JSON (`baseline.json`, `recommendations.json`, `data.js`)

## 7. Algorithms & Logic
**7.1. Projected Waste Computation:**
The engine avoids indiscriminately moving near-expiry stock. Instead, it computes an `est_consumption` value:
`est_consumption = local_daily_demand * days_to_expiry`
`projected_waste_qty = max(0, quantity - est_consumption)`
Only stock with a positive `projected_waste_qty` within a 14-day expiry window is flagged for redistribution.

**7.2. Optimal Target Matching:**
For flagged items, the algorithm scans all other locations holding the same medication, groups them, and calculates the mean `local_daily_demand`. It sorts descending by demand and calculates the `can_consume_qty` for the optimal target. The final transfer quantity is capped at `min(projected_waste_qty, can_consume_qty)` to ensure the receiving location can consume the medication before it expires.

## 8. Workflows & Features
1. **Nightly Batch Processing:** The Python engine ingests the latest inventory CSV.
2. **Impact Classification:** Transfers are automatically tagged as `is_high_impact` if they involve critical locations (Operating Rooms) or exceed a financial threshold ($500).
3. **UI Review Workflow:** Pharmacists use the dashboard to review the queue. They can Approve, or click "Reject (Override)", which forces them to select a clinical reason (e.g., "Clinical Hold", "Stock Count Mismatch").

## 9. Security Measures & Clinical Safety
- **No Direct Write-Access:** The recommender acts as an advisory overlay; it cannot execute physical or digital transfers without human confirmation.
- **Override Auditing:** Every rejected recommendation requires a logged reason, ensuring a continuous feedback loop and preventing silent failures in the workflow.

## 10. Testing & Edge Cases
The system has been rigorously tested against edge cases (documented in `docs/edge_case_testing.md`):
- **Infinite Supply Trap:** Handled by bounding the `transfer_qty` to the target's consumption rate.
- **Negative Projected Waste:** Handled via `np.maximum(0, ...)` to ensure highly active wards are not stripped of necessary medications despite near-expiry dates.

## 11. Results & Current Status (75% Complete)
**Current Capabilities:**
The baseline engine successfully processes 500 records, isolates over $1.6M in "Value At Risk", predicts over $1.3M in "Projected Waste", and successfully proposes redistributions yielding over $400k in "Potential Savings". The UI successfully handles the human-in-the-loop workflow.

**Remaining 25% (Future Enhancements):**
While the algorithmic foundation and prototype are complete, the final 25% of the project will focus on:
1. **Machine Learning Forecasting:** Replacing static `local_daily_demand` variables with time-series forecasting models (e.g., ARIMA or Prophet) for dynamic demand prediction based on historical admission data.
2. **API Integrations:** Developing RESTful endpoints to pull live inventory counts directly from Hospital Information Systems (HIS) and Electronic Health Records (EHR) rather than static CSV ingestion.
3. **Automated Unit Testing:** Adding PyTest suites for CI/CD integration prior to production deployment.
