मंडी भावv
<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>मंडी भाव - किसानों के लिए</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>🌾 मंडी भाव</h1>
    <p>किसानों के लिए रोज़ाना मंडी के ताज़ा दाम</p>
  </header>

  <main>
    <section class="mandi-container">
      <h2>आज के भाव</h2>
      <table>
        <thead>
          <tr>
            <th>फसल</th>
            <th>न्यूनतम भाव (₹)</th>
            <th>अधिकतम भाव (₹)</th>
          </tr>
        </thead>
        <tbody id="mandi-data">
          <!-- Data JavaScript से भरेगा -->
        </tbody>
      </table>
    </section>
  </main>

  <footer>
    <p>© 2025 मंडी भाव | बनाया गया ❤️ किसानों के लिए</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>/* Basic Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background: #f8fff2;
  color: #222;
  line-height: 1.6;
}

header {
  background: #2e7d32;
  color: #fff;
  padding: 15px;
  text-align: center;
}

header h1 {
  font-size: 28px;
}

header p {
  font-size: 16px;
}

main {
  padding: 20px;
}

.mandi-container {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0,0,0,0.1);
}

h2 {
  margin-bottom: 15px;
  color: #2e7d32;
}

table {
  width: 100%;
  border-collapse: collapse;
}

table th, table td {
  padding: 12px;
  border: 1px solid #ddd;
  text-align: center;
}

table th {
  background: #e0f2f1;
}

footer {
  text-align: center;
  padding: 10px;
  background: #2e7d32;
  color: #fff;
  margin-top: 20px;
}// Dummy data - baad me API ya database se bhi fetch kar sakte ho
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