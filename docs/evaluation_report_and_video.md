# Evaluation Report & Demo Video Walkthrough

## Evaluation Report

The Expiry-Aware Stock Redistribution Recommender prototype successfully demonstrates a proactive approach to inventory management in hospital pharmacies. 

### Successes
1. **Accurate Waste Prediction:** By analyzing `local_daily_demand` and `days_to_expiry`, the system accurately filters out noise and only flags stock that will *actually* expire unused.
2. **Intelligent Routing:** The engine successfully pairs at-risk stock with target locations capable of consuming the stock in time, maximizing potential savings.
3. **Safety First:** The human-in-the-loop mechanism, demonstrated in the prototype UI, ensures no stock is forcefully relocated without clinical approval, and all high-impact moves are explicitly flagged.

### Future Enhancements
- **Machine Learning Forecasting:** Replace the static `local_daily_demand` with a time-series forecasting model (e.g., ARIMA or Prophet) that accounts for seasonality and patient admission trends.
- **Integration:** API integration with existing Hospital Information Systems (HIS) and Electronic Health Records (EHR) to pull real-time inventory counts.

---

## 3-Minute Video Walkthrough Script / Storyboard

Since this is a simulated environment, here is the complete script and storyboard for a demo video presentation.

**[0:00 - 0:30] Introduction**
* **Visual:** Presenter on camera, followed by a slide showing the Problem Statement (Financial loss and waste due to expiry).
* **Audio:** "Hello! Welcome to our proof-of-concept for the Expiry-Aware Stock Redistribution Recommender. Hospital pharmacies waste millions of dollars annually simply because high-value medicines expire on the shelf in one ward, while another ward is simultaneously ordering more. We've built a proactive system to solve this."

**[0:30 - 1:15] Data & Engine Overview**
* **Visual:** Screen share of `generate_synthetic_data.py` and `recommender.py` running in the terminal.
* **Audio:** "Our pipeline starts with daily batch jobs. We run our Python Recommender Engine against the current inventory dataset. Instead of just looking at expiration dates, it calculates 'Projected Waste'—which means it factors in the local daily demand to see if the ward will actually consume the drug in time. If they won't, it finds a ward that will."

**[1:15 - 2:00] Dashboard Walkthrough (The Solution)**
* **Visual:** Switch to the Prototype Web UI (`prototype/index.html`) running in the browser. Mouse hovers over the 4 key metric cards.
* **Audio:** "Here is the pharmacist's morning dashboard. Notice the clear metrics: Total Inventory, Value At Risk, and our critical metric—Potential Savings. Below, we see the prioritized transfer recommendations. They are sorted by financial impact, and visually tagged if they involve critical areas like Operating Rooms."

**[2:00 - 2:45] Human-In-The-Loop Demo**
* **Visual:** Click "Review" on a high-impact transfer. The confirmation modal pops up.
* **Audio:** "We cannot rely purely on automation for patient care. Let's review this High-Impact transfer of NeuroBlock-Z. The pharmacist can instantly approve it. However, if they know something the system doesn't—like an upcoming surgery—they click 'Reject' and log an override reason. This ensures safety and trains our models over time."

**[2:45 - 3:00] Conclusion**
* **Visual:** Final slide showing projected annual savings and the team logo.
* **Audio:** "By turning reactive waste into proactive redistribution, we save money and ensure medicines are where they are needed most. Thank you for watching!"
