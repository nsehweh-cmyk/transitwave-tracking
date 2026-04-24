const shipments = {
  "CRV001": {
    item: "Honda CR-V #1",
    route: "Istanbul, Türkiye → Tema Port, Ghana",
    status: "Departed Istanbul Port",
    eta: "30 April 2026"
  },
  "CRV002": {
    item: "Honda CR-V #2",
    route: "Istanbul, Türkiye → Tema Port, Ghana",
    status: "In Transit at Sea",
    eta: "02 May 2026"
  },
  "CRV003": {
    item: "Honda CR-V #3",
    route: "Istanbul, Türkiye → Tema Port, Ghana",
    status: "Awaiting Customs Clearance",
    eta: "04 May 2026"
  },
  "PHN001": {
    item: "Mobile Phones Shipment",
    route: "Türkiye → Accra, Ghana",
    status: "In Transit",
    eta: "28 April 2026"
  }
};

function trackShipment() {
  const code = document.getElementById("trackingInput").value.trim().toUpperCase();
  const result = document.getElementById("result");

  if (shipments[code]) {
    const s = shipments[code];
    result.innerHTML = `
      <h2>Tracking Result</h2>
      <p><strong>Item:</strong> ${s.item}</p>
      <p><strong>Route:</strong> ${s.route}</p>
      <p><strong>Status:</strong> ${s.status}</p>
      <p><strong>ETA:</strong> ${s.eta}</p>
    `;
  } else {
    result.innerHTML = "<p>Tracking number not found.</p>";
  }
}
