# Expiry-Aware Stock Redistribution Recommender

This repository contains the proof of concept for a hospital pharmacy Expiry-Aware Stock Redistribution Recommender. The system aims to intelligently recommend the redistribution of near-expiry synthetic medicines to areas with high demand, thereby reducing waste and ensuring optimal stock utilization while maintaining human-in-the-loop oversight.

## Milestone: 35% Completion (Current Status)

The first phase of the project focuses on foundational documentation and synthetic dataset generation.

### Deliverables Completed:
1. **[Problem Analysis](docs/problem_analysis.md):** Analyzes the problem of near-expiry stock and outlines the desired solution and value proposition.
2. **[User & Workflow Map](docs/user_and_workflow_map.md):** Details the system workflow and two distinct patient journeys demonstrating high-impact and routine redistribution scenarios.
3. **Synthetic Data Generation:** A robust Python script to generate synthetic mock data for the recommender.

## Directory Structure

```
├── README.md
├── data/                                 # Contains generated datasets
│   └── inventory.csv                     # 500 records of synthetic inventory data
├── data_generation/                      # Scripts to generate data
│   └── generate_synthetic_data.py        # Python script leveraging pandas/numpy
└── docs/                                 # Documentation
    ├── problem_analysis.md
    └── user_and_workflow_map.md
```

## How to Run Data Generation

To regenerate the synthetic dataset with random values:
1. Ensure you have Python 3 and `pandas` installed.
2. Navigate to the `data_generation` folder.
3. Run the script:
   ```bash
   python3 generate_synthetic_data.py
   ```
   This will output a new `inventory.csv` file into the `data` directory.

## Next Steps (65% Remaining)

The subsequent phases will focus on:
- **Baseline Creation:** Establishing metrics to measure the value of stock saved.
- **Prototyping:** Developing the core recommendation engine and a UI to demonstrate the human-in-the-loop confirmation.
- **Edge Case Testing:** Documenting and testing at least three edge/failure cases.
- **Evaluation Report & Demo Video:** Summarizing the results and providing a 3-minute video walkthrough.
