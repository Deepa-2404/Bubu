async function fetchMenu() {
  try {
    const response = await fetch('/api/menu');
    const data = await response.json();

    Object.keys(data).forEach(category => {
      const container = document.getElementById(`${category}-container`);
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
