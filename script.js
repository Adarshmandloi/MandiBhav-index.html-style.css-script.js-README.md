// Dummy data - baad me API ya database se bhi fetch kar sakte ho
const mandiData = [
  { crop: "गेहूं", min: 2200, max: 2500 },
  { crop: "सोयाबीन", min: 4000, max: 4700 },
  { crop: "मक्का", min: 1700, max: 2000 },
  { crop: "चना", min: 5100, max: 5500 },
  { crop: "लहसुन", min: 8000, max: 12000 }
];

function loadMandiData() {
  const tableBody = document.getElementById("mandi-data");
  mandiData.forEach(item => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.crop}</td>
      <td>₹${item.min}</td>
      <td>₹${item.max}</td>
    `;
    tableBody.appendChild(row);
  });
}

document.addEventListener("DOMContentLoaded", loadMandiData);