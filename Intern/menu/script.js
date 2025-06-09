const API_URL = 'http://localhost:3001/api/menu'; // full URL with port

async function fetchMenu() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    // ✅ Add this line to inspect what your backend sent
    console.log("Fetched Menu Data:", data);

    Object.keys(data).forEach(category => {
      const container = document.getElementById(`${category}-container`);
      if (!container) return; // skip unknown categories

      data[category].forEach(item => {
        const card = document.createElement('div');
        card.className = 'menu-card';

        card.innerHTML = `
          <img src="${item.img}" alt="${item.name}">
          <h3>${item.name}</h3>
          <p>${item.desc}</p>
          <p class="price">₹${item.price}</p>
        `;

        container.appendChild(card);
      });
    });
  } catch (err) {
    console.error('❌ Failed to fetch menu:', err);
  }
}

fetchMenu();
