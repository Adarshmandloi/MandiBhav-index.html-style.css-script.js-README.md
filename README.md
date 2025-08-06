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

  
  { crop: "गेहूं", min: 2200, max: 2500 },
  { crop: "सोयाबीन", min: 4000, max: 4700 },
  { crop: "मक्का", min: 1700, max: 2000 },
  { crop: "चना", min: 5100, max: 5500 },
  { crop: "लहसुन", min: 8000, max: 12000 }
];
