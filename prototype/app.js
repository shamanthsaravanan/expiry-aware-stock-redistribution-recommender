let currentRec = null;

// Format currency
const formatCurrency = (val) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val);

document.addEventListener('DOMContentLoaded', () => {
    // Populate metrics
    if (typeof baselineMetrics !== 'undefined') {
        document.getElementById('tiv').innerText = formatCurrency(baselineMetrics.total_inventory_value);
        document.getElementById('var').innerText = formatCurrency(baselineMetrics.at_risk_value);
        document.getElementById('pw').innerText = formatCurrency(baselineMetrics.projected_waste_value);
        document.getElementById('ps').innerText = formatCurrency(baselineMetrics.potential_savings);
    }

    // Populate table
    if (typeof recommendations !== 'undefined') {
        const tbody = document.getElementById('recs-body');
        recommendations.slice(0, 10).forEach((rec, idx) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><strong>${rec.medicine}</strong><br><small>Exp: ${rec.days_to_expiry} days</small></td>
                <td>${rec.batch_id}</td>
                <td>${rec.from_location} &rarr; ${rec.to_location}</td>
                <td>${rec.transfer_qty} units</td>
                <td>${formatCurrency(rec.value_saved)}</td>
                <td><span class="badge ${rec.is_high_impact ? 'high' : 'routine'}">${rec.is_high_impact ? 'High Impact' : 'Routine'}</span></td>
                <td><button class="btn btn-primary" onclick="openModal(${idx})">Review</button></td>
            `;
            tbody.appendChild(tr);
        });
    }
});

function openModal(idx) {
    currentRec = recommendations[idx];
    document.getElementById('modal-title').innerText = currentRec.is_high_impact ? '🚨 High Impact Transfer' : 'Routine Transfer';
    document.getElementById('modal-desc').innerHTML = `
        Transfer <strong>${currentRec.transfer_qty}</strong> units of <strong>${currentRec.medicine}</strong><br>
        From: ${currentRec.from_location}<br>
        To: ${currentRec.to_location}<br>
        Value Saved: ${formatCurrency(currentRec.value_saved)}
    `;
    document.getElementById('override-section').classList.add('hidden');
    document.getElementById('modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('modal').classList.add('hidden');
}

function approveTransfer() {
    alert(`Transfer of ${currentRec.medicine} approved! Inventory updated.`);
    closeModal();
    // In a real app, send API request
}

function rejectTransfer() {
    document.getElementById('override-section').classList.remove('hidden');
}

function submitReject() {
    const reason = document.getElementById('override-reason').value;
    alert(`Transfer rejected. Reason recorded: ${reason}`);
    closeModal();
}
