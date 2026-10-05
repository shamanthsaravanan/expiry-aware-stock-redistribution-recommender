# Expiry-Aware Stock Redistribution Recommender

This repository contains the full proof of concept for a hospital pharmacy Expiry-Aware Stock Redistribution Recommender. The system intelligently recommends the redistribution of near-expiry synthetic medicines to areas with high demand, thereby reducing waste and ensuring optimal stock utilization while maintaining human-in-the-loop oversight.

## Milestone: 100% Completion (Final Status)

The project has been fully implemented according to the problem statement and defined requirements. All deliverables are complete.

### Core Deliverables Completed:
1. **[Problem Analysis](docs/problem_analysis.md):** Analyzes the problem of near-expiry stock, the desired state, and the core value proposition.
2. **[User & Workflow Map](docs/user_and_workflow_map.md):** Details the system workflow and patient journeys for different urgency levels.
3. **[Baseline Metrics](docs/baseline_metrics.md):** Establishes key performance metrics (Total Inventory Value, Value At Risk, Projected Waste, and Potential Savings).
4. **[Edge Case Testing](docs/edge_case_testing.md):** Documents three critical failure/edge cases and how the engine handles them (Infinite Supply, Negative Waste, Clinician Overrides).
5. **[Evaluation Report & Demo Video](docs/evaluation_report_and_video.md):** Summarizes the project successes and provides a storyboard script for a 3-minute video presentation.

### Technical Implementation:
- **Synthetic Data Generation:** `data_generation/generate_synthetic_data.py` builds the foundational inventory mock data.
- **Recommender Engine:** `src/recommender.py` processes the inventory data, calculates waste trajectories based on local demand and expiry days, and outputs JSON metrics and optimal transfer lists.
- **Interactive Prototype UI:** A modern, Vanilla HTML/CSS/JS dashboard (`prototype/index.html`) demonstrating the human-in-the-loop approval workflow and live analytics.

## Directory Structure

```
├── README.md
├── data/                                 # Generated datasets & JSON outputs
│   ├── inventory.csv                     
│   ├── baseline.json
│   └── recommendations.json
├── data_generation/                      # Scripts to generate base mock data
│   └── generate_synthetic_data.py        
├── src/                                  # Core engine logic
│   └── recommender.py                    # Generates metrics and recommendation lists
├── prototype/                            # Web application UI
│   ├── index.html                        # Main dashboard view
│   ├── styles.css                        # UI styling and animations
│   ├── app.js                            # Frontend logic and modal interaction
│   └── data.js                           # Bridge file exporting Python metrics to JS
└── docs/                                 # Documentation
    ├── problem_analysis.md
    ├── user_and_workflow_map.md
    ├── baseline_metrics.md
    ├── edge_case_testing.md
    └── evaluation_report_and_video.md
```

## How to Run the Project

1. **Generate Data:**
   ```bash
   python3 data_generation/generate_synthetic_data.py
   ```
2. **Run the Recommendation Engine:**
   ```bash
   python3 src/recommender.py
   ```
   *This reads the CSV, calculates the baseline, determines transfers, and updates the `prototype` data.*

3. **View the Interactive Dashboard:**
   Simply open `prototype/index.html` in any modern web browser to view the generated recommendations and simulate human-in-the-loop approval.
