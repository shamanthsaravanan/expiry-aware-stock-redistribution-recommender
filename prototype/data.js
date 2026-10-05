const baselineMetrics = {
  "total_inventory_value": 7109407.0,
  "at_risk_value": 1621866.5,
  "projected_waste_value": 1355884.71,
  "potential_savings": 401751.91
};
const recommendations = [
  {
    "batch_id": "BTH-5071",
    "medicine": "NeuroBlock-Z",
    "from_location": "Ward A",
    "to_location": "Operating Room 1",
    "transfer_qty": 146,
    "value_saved": 17544.56,
    "is_high_impact": true,
    "days_to_expiry": 11
  },
  {
    "batch_id": "BTH-9762",
    "medicine": "NeuroBlock-Z",
    "from_location": "Operating Room 1",
    "to_location": "Operating Room 2",
    "transfer_qty": 121,
    "value_saved": 14522.4,
    "is_high_impact": true,
    "days_to_expiry": 13
  },
  {
    "batch_id": "BTH-3757",
    "medicine": "NeuroBlock-Z",
    "from_location": "Ward C",
    "to_location": "Operating Room 1",
    "transfer_qty": 119,
    "value_saved": 14354.64,
    "is_high_impact": true,
    "days_to_expiry": 9
  },
  {
    "batch_id": "BTH-7871",
    "medicine": "NeuroBlock-Z",
    "from_location": "Outpatients",
    "to_location": "Operating Room 1",
    "transfer_qty": 106,
    "value_saved": 12759.68,
    "is_high_impact": true,
    "days_to_expiry": 8
  },
  {
    "batch_id": "BTH-2236",
    "medicine": "NeuroBlock-Z",
    "from_location": "Ward A",
    "to_location": "Operating Room 1",
    "transfer_qty": 106,
    "value_saved": 12759.68,
    "is_high_impact": true,
    "days_to_expiry": 8
  },
  {
    "batch_id": "BTH-6497",
    "medicine": "NeuroBlock-Z",
    "from_location": "Operating Room 2",
    "to_location": "Operating Room 1",
    "transfer_qty": 106,
    "value_saved": 12759.68,
    "is_high_impact": true,
    "days_to_expiry": 8
  },
  {
    "batch_id": "BTH-3195",
    "medicine": "NeuroBlock-Z",
    "from_location": "Ward B",
    "to_location": "Operating Room 1",
    "transfer_qty": 93,
    "value_saved": 11164.72,
    "is_high_impact": true,
    "days_to_expiry": 7
  },
  {
    "batch_id": "BTH-6677",
    "medicine": "NeuroBlock-Z",
    "from_location": "Ward C",
    "to_location": "Operating Room 1",
    "transfer_qty": 93,
    "value_saved": 11164.72,
    "is_high_impact": true,
    "days_to_expiry": 7
  },
  {
    "batch_id": "BTH-5373",
    "medicine": "NeuroBlock-Z",
    "from_location": "Ward A",
    "to_location": "Operating Room 1",
    "transfer_qty": 83,
    "value_saved": 10026.0,
    "is_high_impact": true,
    "days_to_expiry": 11
  },
  {
    "batch_id": "BTH-7625",
    "medicine": "NeuroBlock-Z",
    "from_location": "Ward A",
    "to_location": "Operating Room 1",
    "transfer_qty": 79,
    "value_saved": 9569.76,
    "is_high_impact": true,
    "days_to_expiry": 6
  },
  {
    "batch_id": "BTH-5565",
    "medicine": "NeuroBlock-Z",
    "from_location": "Ward A",
    "to_location": "Operating Room 1",
    "transfer_qty": 79,
    "value_saved": 9537.6,
    "is_high_impact": true,
    "days_to_expiry": 14
  },
  {
    "batch_id": "BTH-7418",
    "medicine": "CardioSynth",
    "from_location": "Ward C",
    "to_location": "Operating Room 2",
    "transfer_qty": 183,
    "value_saved": 8237.01,
    "is_high_impact": true,
    "days_to_expiry": 14
  },
  {
    "batch_id": "BTH-4126",
    "medicine": "CardioSynth",
    "from_location": "Ward C",
    "to_location": "Operating Room 2",
    "transfer_qty": 183,
    "value_saved": 8237.01,
    "is_high_impact": true,
    "days_to_expiry": 14
  },
  {
    "batch_id": "BTH-8509",
    "medicine": "CardioSynth",
    "from_location": "Operating Room 1",
    "to_location": "Operating Room 2",
    "transfer_qty": 156,
    "value_saved": 7060.29,
    "is_high_impact": true,
    "days_to_expiry": 12
  },
  {
    "batch_id": "BTH-8836",
    "medicine": "ImmunoBoost-Alpha",
    "from_location": "Main Pharmacy",
    "to_location": "Operating Room 2",
    "transfer_qty": 78,
    "value_saved": 6708.8,
    "is_high_impact": true,
    "days_to_expiry": 14
  },
  {
    "batch_id": "BTH-3804",
    "medicine": "NeuroBlock-Z",
    "from_location": "Ward A",
    "to_location": "Operating Room 1",
    "transfer_qty": 53,
    "value_saved": 6379.84,
    "is_high_impact": true,
    "days_to_expiry": 4
  },
  {
    "batch_id": "BTH-9018",
    "medicine": "SynthOxy",
    "from_location": "Operating Room 2",
    "to_location": "Outpatients",
    "transfer_qty": 401,
    "value_saved": 6224.8,
    "is_high_impact": true,
    "days_to_expiry": 10
  },
  {
    "batch_id": "BTH-9554",
    "medicine": "NeuroBlock-Z",
    "from_location": "Main Pharmacy",
    "to_location": "Operating Room 1",
    "transfer_qty": 50,
    "value_saved": 6105.6,
    "is_high_impact": true,
    "days_to_expiry": 14
  },
  {
    "batch_id": "BTH-1917",
    "medicine": "CardioSynth",
    "from_location": "Ward A",
    "to_location": "Operating Room 2",
    "transfer_qty": 130,
    "value_saved": 5883.58,
    "is_high_impact": true,
    "days_to_expiry": 10
  },
  {
    "batch_id": "BTH-3322",
    "medicine": "CardioSynth",
    "from_location": "Ward B",
    "to_location": "Operating Room 2",
    "transfer_qty": 130,
    "value_saved": 5883.58,
    "is_high_impact": true,
    "days_to_expiry": 10
  },
  {
    "batch_id": "BTH-9515",
    "medicine": "CardioSynth",
    "from_location": "Operating Room 1",
    "to_location": "Operating Room 2",
    "transfer_qty": 130,
    "value_saved": 5883.58,
    "is_high_impact": true,
    "days_to_expiry": 10
  },
  {
    "batch_id": "BTH-5526",
    "medicine": "CardioSynth",
    "from_location": "Ward C",
    "to_location": "Operating Room 2",
    "transfer_qty": 129,
    "value_saved": 5809.95,
    "is_high_impact": true,
    "days_to_expiry": 13
  },
  {
    "batch_id": "BTH-2229",
    "medicine": "SynthOxy",
    "from_location": "Operating Room 1",
    "to_location": "Outpatients",
    "transfer_qty": 366,
    "value_saved": 5677.65,
    "is_high_impact": true,
    "days_to_expiry": 10
  },
  {
    "batch_id": "BTH-8903",
    "medicine": "CardioSynth",
    "from_location": "Main Pharmacy",
    "to_location": "Operating Room 2",
    "transfer_qty": 117,
    "value_saved": 5295.22,
    "is_high_impact": true,
    "days_to_expiry": 9
  },
  {
    "batch_id": "BTH-8470",
    "medicine": "SynthOxy",
    "from_location": "Ward B",
    "to_location": "Outpatients",
    "transfer_qty": 336,
    "value_saved": 5215.29,
    "is_high_impact": true,
    "days_to_expiry": 7
  },
  {
    "batch_id": "BTH-1551",
    "medicine": "NeuroBlock-Z",
    "from_location": "Ward A",
    "to_location": "Operating Room 1",
    "transfer_qty": 40,
    "value_saved": 4818.0,
    "is_high_impact": true,
    "days_to_expiry": 7
  },
  {
    "batch_id": "BTH-2273",
    "medicine": "ImmunoBoost-Alpha",
    "from_location": "Operating Room 1",
    "to_location": "Operating Room 2",
    "transfer_qty": 56,
    "value_saved": 4792.0,
    "is_high_impact": true,
    "days_to_expiry": 10
  },
  {
    "batch_id": "BTH-6709",
    "medicine": "ImmunoBoost-Alpha",
    "from_location": "Ward C",
    "to_location": "Operating Room 2",
    "transfer_qty": 56,
    "value_saved": 4792.0,
    "is_high_impact": true,
    "days_to_expiry": 10
  },
  {
    "batch_id": "BTH-3880",
    "medicine": "NeuroBlock-Z",
    "from_location": "Ward C",
    "to_location": "Operating Room 1",
    "transfer_qty": 39,
    "value_saved": 4784.88,
    "is_high_impact": true,
    "days_to_expiry": 3
  },
  {
    "batch_id": "BTH-2806",
    "medicine": "NeuroBlock-Z",
    "from_location": "Outpatients",
    "to_location": "Operating Room 1",
    "transfer_qty": 39,
    "value_saved": 4784.88,
    "is_high_impact": true,
    "days_to_expiry": 3
  },
  {
    "batch_id": "BTH-8187",
    "medicine": "NeuroBlock-Z",
    "from_location": "Outpatients",
    "to_location": "Operating Room 1",
    "transfer_qty": 39,
    "value_saved": 4784.88,
    "is_high_impact": true,
    "days_to_expiry": 3
  },
  {
    "batch_id": "BTH-3331",
    "medicine": "NeuroBlock-Z",
    "from_location": "Main Pharmacy",
    "to_location": "Operating Room 1",
    "transfer_qty": 39,
    "value_saved": 4784.88,
    "is_high_impact": true,
    "days_to_expiry": 3
  },
  {
    "batch_id": "BTH-7256",
    "medicine": "CardioSynth",
    "from_location": "Ward B",
    "to_location": "Operating Room 2",
    "transfer_qty": 104,
    "value_saved": 4706.86,
    "is_high_impact": true,
    "days_to_expiry": 8
  },
  {
    "batch_id": "BTH-6887",
    "medicine": "SynthOxy",
    "from_location": "Operating Room 2",
    "to_location": "Outpatients",
    "transfer_qty": 282,
    "value_saved": 4373.17,
    "is_high_impact": true,
    "days_to_expiry": 14
  },
  {
    "batch_id": "BTH-5763",
    "medicine": "ImmunoBoost-Alpha",
    "from_location": "Operating Room 1",
    "to_location": "Operating Room 2",
    "transfer_qty": 50,
    "value_saved": 4312.8,
    "is_high_impact": true,
    "days_to_expiry": 9
  },
  {
    "batch_id": "BTH-6228",
    "medicine": "SynthOxy",
    "from_location": "Ward B",
    "to_location": "Outpatients",
    "transfer_qty": 273,
    "value_saved": 4242.12,
    "is_high_impact": true,
    "days_to_expiry": 5
  },
  {
    "batch_id": "BTH-8514",
    "medicine": "CardioSynth",
    "from_location": "Main Pharmacy",
    "to_location": "Operating Room 2",
    "transfer_qty": 93,
    "value_saved": 4222.8,
    "is_high_impact": true,
    "days_to_expiry": 12
  },
  {
    "batch_id": "BTH-3334",
    "medicine": "CardioSynth",
    "from_location": "Ward C",
    "to_location": "Operating Room 2",
    "transfer_qty": 91,
    "value_saved": 4118.5,
    "is_high_impact": true,
    "days_to_expiry": 7
  },
  {
    "batch_id": "BTH-2603",
    "medicine": "SynthOxy",
    "from_location": "Ward A",
    "to_location": "Outpatients",
    "transfer_qty": 260,
    "value_saved": 4040.54,
    "is_high_impact": true,
    "days_to_expiry": 12
  },
  {
    "batch_id": "BTH-5288",
    "medicine": "ImmunoBoost-Alpha",
    "from_location": "Ward A",
    "to_location": "Operating Room 2",
    "transfer_qty": 45,
    "value_saved": 3833.6,
    "is_high_impact": true,
    "days_to_expiry": 8
  },
  {
    "batch_id": "BTH-5423",
    "medicine": "ImmunoBoost-Alpha",
    "from_location": "Ward B",
    "to_location": "Operating Room 2",
    "transfer_qty": 45,
    "value_saved": 3833.6,
    "is_high_impact": true,
    "days_to_expiry": 8
  },
  {
    "batch_id": "BTH-6737",
    "medicine": "ImmunoBoost-Alpha",
    "from_location": "Main Pharmacy",
    "to_location": "Operating Room 2",
    "transfer_qty": 45,
    "value_saved": 3833.6,
    "is_high_impact": true,
    "days_to_expiry": 8
  },
  {
    "batch_id": "BTH-4363",
    "medicine": "CardioSynth",
    "from_location": "Ward B",
    "to_location": "Operating Room 2",
    "transfer_qty": 78,
    "value_saved": 3530.15,
    "is_high_impact": true,
    "days_to_expiry": 6
  },
  {
    "batch_id": "BTH-8849",
    "medicine": "CardioSynth",
    "from_location": "Ward C",
    "to_location": "Operating Room 2",
    "transfer_qty": 78,
    "value_saved": 3530.15,
    "is_high_impact": true,
    "days_to_expiry": 6
  },
  {
    "batch_id": "BTH-6537",
    "medicine": "CardioSynth",
    "from_location": "Ward C",
    "to_location": "Operating Room 2",
    "transfer_qty": 78,
    "value_saved": 3530.15,
    "is_high_impact": true,
    "days_to_expiry": 6
  },
  {
    "batch_id": "BTH-8914",
    "medicine": "CardioSynth",
    "from_location": "Ward B",
    "to_location": "Operating Room 2",
    "transfer_qty": 78,
    "value_saved": 3530.15,
    "is_high_impact": true,
    "days_to_expiry": 6
  },
  {
    "batch_id": "BTH-9749",
    "medicine": "NeuroBlock-Z",
    "from_location": "Operating Room 1",
    "to_location": "Operating Room 2",
    "transfer_qty": 28,
    "value_saved": 3450.0,
    "is_high_impact": true,
    "days_to_expiry": 11
  },
  {
    "batch_id": "BTH-2489",
    "medicine": "ImmunoBoost-Alpha",
    "from_location": "Ward A",
    "to_location": "Operating Room 2",
    "transfer_qty": 39,
    "value_saved": 3354.4,
    "is_high_impact": true,
    "days_to_expiry": 7
  },
  {
    "batch_id": "BTH-2875",
    "medicine": "ImmunoBoost-Alpha",
    "from_location": "Operating Room 1",
    "to_location": "Operating Room 2",
    "transfer_qty": 39,
    "value_saved": 3354.4,
    "is_high_impact": true,
    "days_to_expiry": 7
  },
  {
    "batch_id": "BTH-1971",
    "medicine": "ImmunoBoost-Alpha",
    "from_location": "Ward B",
    "to_location": "Operating Room 2",
    "transfer_qty": 39,
    "value_saved": 3354.4,
    "is_high_impact": true,
    "days_to_expiry": 7
  },
  {
    "batch_id": "BTH-8091",
    "medicine": "NeuroBlock-Z",
    "from_location": "Ward B",
    "to_location": "Operating Room 1",
    "transfer_qty": 26,
    "value_saved": 3189.92,
    "is_high_impact": true,
    "days_to_expiry": 2
  },
  {
    "batch_id": "BTH-2273",
    "medicine": "NeuroBlock-Z",
    "from_location": "Outpatients",
    "to_location": "Operating Room 1",
    "transfer_qty": 26,
    "value_saved": 3189.92,
    "is_high_impact": true,
    "days_to_expiry": 2
  },
  {
    "batch_id": "BTH-3566",
    "medicine": "NeuroBlock-Z",
    "from_location": "Operating Room 2",
    "to_location": "Operating Room 1",
    "transfer_qty": 26,
    "value_saved": 3189.92,
    "is_high_impact": true,
    "days_to_expiry": 2
  },
  {
    "batch_id": "BTH-2841",
    "medicine": "SynthOxy",
    "from_location": "Main Pharmacy",
    "to_location": "Outpatients",
    "transfer_qty": 204,
    "value_saved": 3170.68,
    "is_high_impact": true,
    "days_to_expiry": 4
  },
  {
    "batch_id": "BTH-2601",
    "medicine": "CardioSynth",
    "from_location": "Main Pharmacy",
    "to_location": "Operating Room 2",
    "transfer_qty": 65,
    "value_saved": 2941.79,
    "is_high_impact": true,
    "days_to_expiry": 5
  },
  {
    "batch_id": "BTH-2944",
    "medicine": "CardioSynth",
    "from_location": "Main Pharmacy",
    "to_location": "Operating Room 2",
    "transfer_qty": 65,
    "value_saved": 2941.79,
    "is_high_impact": true,
    "days_to_expiry": 5
  },
  {
    "batch_id": "BTH-4159",
    "medicine": "ImmunoBoost-Alpha",
    "from_location": "Operating Room 2",
    "to_location": "Outpatients",
    "transfer_qty": 33,
    "value_saved": 2844.6,
    "is_high_impact": true,
    "days_to_expiry": 6
  },
  {
    "batch_id": "BTH-1122",
    "medicine": "CardioSynth",
    "from_location": "Operating Room 2",
    "to_location": "Operating Room 1",
    "transfer_qty": 57,
    "value_saved": 2571.3,
    "is_high_impact": true,
    "days_to_expiry": 5
  },
  {
    "batch_id": "BTH-3017",
    "medicine": "SynthOxy",
    "from_location": "Ward B",
    "to_location": "Outpatients",
    "transfer_qty": 164,
    "value_saved": 2545.27,
    "is_high_impact": true,
    "days_to_expiry": 3
  },
  {
    "batch_id": "BTH-7579",
    "medicine": "ImmunoBoost-Alpha",
    "from_location": "Main Pharmacy",
    "to_location": "Operating Room 2",
    "transfer_qty": 28,
    "value_saved": 2396.0,
    "is_high_impact": true,
    "days_to_expiry": 5
  },
  {
    "batch_id": "BTH-1505",
    "medicine": "CardioSynth",
    "from_location": "Outpatients",
    "to_location": "Operating Room 2",
    "transfer_qty": 52,
    "value_saved": 2353.43,
    "is_high_impact": true,
    "days_to_expiry": 4
  },
  {
    "batch_id": "BTH-8384",
    "medicine": "PainRelief-X (Synthetic)",
    "from_location": "Ward A",
    "to_location": "Outpatients",
    "transfer_qty": 427,
    "value_saved": 2139.0,
    "is_high_impact": true,
    "days_to_expiry": 10
  },
  {
    "batch_id": "BTH-6818",
    "medicine": "ImmunoBoost-Alpha",
    "from_location": "Operating Room 1",
    "to_location": "Operating Room 2",
    "transfer_qty": 22,
    "value_saved": 1916.8,
    "is_high_impact": true,
    "days_to_expiry": 4
  },
  {
    "batch_id": "BTH-4614",
    "medicine": "SynthOxy",
    "from_location": "Main Pharmacy",
    "to_location": "Outpatients",
    "transfer_qty": 122,
    "value_saved": 1906.19,
    "is_high_impact": true,
    "days_to_expiry": 13
  },
  {
    "batch_id": "BTH-4503",
    "medicine": "ImmunoBoost-Alpha",
    "from_location": "Operating Room 2",
    "to_location": "Outpatients",
    "transfer_qty": 22,
    "value_saved": 1896.4,
    "is_high_impact": true,
    "days_to_expiry": 4
  },
  {
    "batch_id": "BTH-3219",
    "medicine": "CardioSynth",
    "from_location": "Main Pharmacy",
    "to_location": "Operating Room 2",
    "transfer_qty": 39,
    "value_saved": 1765.07,
    "is_high_impact": true,
    "days_to_expiry": 3
  },
  {
    "batch_id": "BTH-4960",
    "medicine": "CardioSynth",
    "from_location": "Ward A",
    "to_location": "Operating Room 2",
    "transfer_qty": 39,
    "value_saved": 1765.07,
    "is_high_impact": true,
    "days_to_expiry": 3
  },
  {
    "batch_id": "BTH-8868",
    "medicine": "SynthOxy",
    "from_location": "Operating Room 1",
    "to_location": "Outpatients",
    "transfer_qty": 109,
    "value_saved": 1696.85,
    "is_high_impact": true,
    "days_to_expiry": 2
  },
  {
    "batch_id": "BTH-7155",
    "medicine": "SynthOxy",
    "from_location": "Main Pharmacy",
    "to_location": "Outpatients",
    "transfer_qty": 109,
    "value_saved": 1696.85,
    "is_high_impact": true,
    "days_to_expiry": 2
  },
  {
    "batch_id": "BTH-3228",
    "medicine": "SynthOxy",
    "from_location": "Main Pharmacy",
    "to_location": "Outpatients",
    "transfer_qty": 109,
    "value_saved": 1696.85,
    "is_high_impact": true,
    "days_to_expiry": 2
  },
  {
    "batch_id": "BTH-2490",
    "medicine": "SynthOxy",
    "from_location": "Ward C",
    "to_location": "Outpatients",
    "transfer_qty": 109,
    "value_saved": 1696.85,
    "is_high_impact": true,
    "days_to_expiry": 2
  },
  {
    "batch_id": "BTH-4421",
    "medicine": "SynthOxy",
    "from_location": "Operating Room 2",
    "to_location": "Outpatients",
    "transfer_qty": 109,
    "value_saved": 1696.85,
    "is_high_impact": true,
    "days_to_expiry": 2
  },
  {
    "batch_id": "BTH-3856",
    "medicine": "NeuroBlock-Z",
    "from_location": "Outpatients",
    "to_location": "Operating Room 1",
    "transfer_qty": 13,
    "value_saved": 1594.96,
    "is_high_impact": true,
    "days_to_expiry": 1
  },
  {
    "batch_id": "BTH-5511",
    "medicine": "NeuroBlock-Z",
    "from_location": "Ward B",
    "to_location": "Operating Room 1",
    "transfer_qty": 13,
    "value_saved": 1594.96,
    "is_high_impact": true,
    "days_to_expiry": 1
  },
  {
    "batch_id": "BTH-9031",
    "medicine": "CardioSynth",
    "from_location": "Operating Room 2",
    "to_location": "Operating Room 1",
    "transfer_qty": 34,
    "value_saved": 1542.78,
    "is_high_impact": true,
    "days_to_expiry": 3
  },
  {
    "batch_id": "BTH-8795",
    "medicine": "ImmunoBoost-Alpha",
    "from_location": "Main Pharmacy",
    "to_location": "Operating Room 2",
    "transfer_qty": 16,
    "value_saved": 1437.6,
    "is_high_impact": true,
    "days_to_expiry": 3
  },
  {
    "batch_id": "BTH-8317",
    "medicine": "ImmunoBoost-Alpha",
    "from_location": "Main Pharmacy",
    "to_location": "Operating Room 2",
    "transfer_qty": 16,
    "value_saved": 1437.6,
    "is_high_impact": true,
    "days_to_expiry": 3
  },
  {
    "batch_id": "BTH-9906",
    "medicine": "ImmunoBoost-Alpha",
    "from_location": "Ward C",
    "to_location": "Operating Room 2",
    "transfer_qty": 16,
    "value_saved": 1390.6,
    "is_high_impact": true,
    "days_to_expiry": 4
  },
  {
    "batch_id": "BTH-2188",
    "medicine": "PainRelief-X (Synthetic)",
    "from_location": "Ward A",
    "to_location": "Outpatients",
    "transfer_qty": 260,
    "value_saved": 1304.5,
    "is_high_impact": true,
    "days_to_expiry": 10
  },
  {
    "batch_id": "BTH-3985",
    "medicine": "CardioSynth",
    "from_location": "Ward C",
    "to_location": "Operating Room 2",
    "transfer_qty": 28,
    "value_saved": 1276.2,
    "is_high_impact": true,
    "days_to_expiry": 8
  },
  {
    "batch_id": "BTH-2700",
    "medicine": "CardioSynth",
    "from_location": "Operating Room 1",
    "to_location": "Operating Room 2",
    "transfer_qty": 26,
    "value_saved": 1176.72,
    "is_high_impact": true,
    "days_to_expiry": 2
  },
  {
    "batch_id": "BTH-3844",
    "medicine": "SynthOxy",
    "from_location": "Operating Room 1",
    "to_location": "Outpatients",
    "transfer_qty": 68,
    "value_saved": 1066.4,
    "is_high_impact": true,
    "days_to_expiry": 14
  },
  {
    "batch_id": "BTH-4260",
    "medicine": "ImmunoBoost-Alpha",
    "from_location": "Outpatients",
    "to_location": "Operating Room 2",
    "transfer_qty": 11,
    "value_saved": 958.4,
    "is_high_impact": true,
    "days_to_expiry": 2
  },
  {
    "batch_id": "BTH-3849",
    "medicine": "ImmunoBoost-Alpha",
    "from_location": "Main Pharmacy",
    "to_location": "Operating Room 2",
    "transfer_qty": 11,
    "value_saved": 958.4,
    "is_high_impact": true,
    "days_to_expiry": 2
  },
  {
    "batch_id": "BTH-1501",
    "medicine": "ImmunoBoost-Alpha",
    "from_location": "Outpatients",
    "to_location": "Operating Room 2",
    "transfer_qty": 11,
    "value_saved": 958.4,
    "is_high_impact": true,
    "days_to_expiry": 2
  },
  {
    "batch_id": "BTH-9705",
    "medicine": "PainRelief-X (Synthetic)",
    "from_location": "Ward A",
    "to_location": "Outpatients",
    "transfer_qty": 168,
    "value_saved": 843.9,
    "is_high_impact": true,
    "days_to_expiry": 7
  },
  {
    "batch_id": "BTH-6545",
    "medicine": "PainRelief-X (Synthetic)",
    "from_location": "Ward B",
    "to_location": "Outpatients",
    "transfer_qty": 159,
    "value_saved": 798.25,
    "is_high_impact": true,
    "days_to_expiry": 3
  },
  {
    "batch_id": "BTH-7610",
    "medicine": "PainRelief-X (Synthetic)",
    "from_location": "Ward C",
    "to_location": "Outpatients",
    "transfer_qty": 134,
    "value_saved": 670.41,
    "is_high_impact": true,
    "days_to_expiry": 2
  },
  {
    "batch_id": "BTH-7995",
    "medicine": "PainRelief-X (Synthetic)",
    "from_location": "Operating Room 2",
    "to_location": "Outpatients",
    "transfer_qty": 118,
    "value_saved": 590.2,
    "is_high_impact": true,
    "days_to_expiry": 6
  },
  {
    "batch_id": "BTH-4919",
    "medicine": "CardioSynth",
    "from_location": "Outpatients",
    "to_location": "Operating Room 2",
    "transfer_qty": 13,
    "value_saved": 588.36,
    "is_high_impact": true,
    "days_to_expiry": 1
  },
  {
    "batch_id": "BTH-5607",
    "medicine": "CardioSynth",
    "from_location": "Ward B",
    "to_location": "Operating Room 2",
    "transfer_qty": 12,
    "value_saved": 543.6,
    "is_high_impact": true,
    "days_to_expiry": 8
  },
  {
    "batch_id": "BTH-6479",
    "medicine": "ImmunoBoost-Alpha",
    "from_location": "Operating Room 1",
    "to_location": "Operating Room 2",
    "transfer_qty": 5,
    "value_saved": 479.2,
    "is_high_impact": true,
    "days_to_expiry": 1
  },
  {
    "batch_id": "BTH-5904",
    "medicine": "ImmunoBoost-Alpha",
    "from_location": "Outpatients",
    "to_location": "Operating Room 2",
    "transfer_qty": 5,
    "value_saved": 479.2,
    "is_high_impact": true,
    "days_to_expiry": 1
  },
  {
    "batch_id": "BTH-1521",
    "medicine": "PainRelief-X (Synthetic)",
    "from_location": "Ward A",
    "to_location": "Outpatients",
    "transfer_qty": 67,
    "value_saved": 335.2,
    "is_high_impact": false,
    "days_to_expiry": 1
  },
  {
    "batch_id": "BTH-5672",
    "medicine": "PainRelief-X (Synthetic)",
    "from_location": "Operating Room 2",
    "to_location": "Outpatients",
    "transfer_qty": 67,
    "value_saved": 335.2,
    "is_high_impact": true,
    "days_to_expiry": 1
  },
  {
    "batch_id": "BTH-2911",
    "medicine": "PainRelief-X (Synthetic)",
    "from_location": "Main Pharmacy",
    "to_location": "Outpatients",
    "transfer_qty": 55,
    "value_saved": 275.8,
    "is_high_impact": false,
    "days_to_expiry": 4
  },
  {
    "batch_id": "BTH-4349",
    "medicine": "PainRelief-X (Synthetic)",
    "from_location": "Operating Room 1",
    "to_location": "Outpatients",
    "transfer_qty": 43,
    "value_saved": 218.8,
    "is_high_impact": true,
    "days_to_expiry": 8
  },
  {
    "batch_id": "BTH-6249",
    "medicine": "PainRelief-X (Synthetic)",
    "from_location": "Operating Room 2",
    "to_location": "Outpatients",
    "transfer_qty": 25,
    "value_saved": 125.8,
    "is_high_impact": true,
    "days_to_expiry": 12
  },
  {
    "batch_id": "BTH-5170",
    "medicine": "PainRelief-X (Synthetic)",
    "from_location": "Outpatients",
    "to_location": "Ward C",
    "transfer_qty": 20,
    "value_saved": 104.52,
    "is_high_impact": false,
    "days_to_expiry": 3
  }
];
