// Dummy database of tracking numbers for simulation
const shipments = {
    "WLB-1001": { status: "Out for delivery with dispatch rider in Suleja", destination: "Suleja, Niger State" },
    "WLB-1002": { status: "Arrived at Abuja sorting hub", destination: "Garki, Abuja" },
    "WLB-1003": { status: "Successfully Delivered", destination: "Ikeja, Lagos" },
    "WLB-1004": { status: "In transit between Minna and Suleja", destination: "Suleja, Niger State" }
};

document.getElementById('trackBtn').addEventListener('click', function() {
    const trackingCode = document.getElementById('trackingInput').value.trim().toUpperCase();
    const resultDiv = document.getElementById('trackResult');
    const statusText = document.getElementById('statusText');
    const destText = document.getElementById('destText');

    if (!trackingCode) {
        alert('Please enter a tracking number.');
        return;
    }

    // Check if tracking code exists in our dummy dataset
    if (shipments[trackingCode]) {
        statusText.textContent = shipments[trackingCode].status;
        destText.textContent = shipments[trackingCode].destination;
        statusText.style.color = "#16a34a"; // Green for active/found
    } else {
        statusText.textContent = "Tracking number not found. Try 'WLB-1001' or 'WLB-1002'";
        destText.textContent = "N/A";
        statusText.style.color = "#dc2626"; // Red for error
    }

    // Reveal the result box
    resultDiv.classList.remove('hidden');
});