function displayMenu(category, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = ''; // Clear any previous content

  foodMenu[category].forEach(item => {
    const card = document.createElement('div');
    card.className = 'menu-card';

    if (item.img) {
      const img = document.createElement('img');
      img.src = item.img;
      img.alt = item.name;
      card.appendChild(img);
    }

    const name = document.createElement('h3');
    name.textContent = item.name;
    card.appendChild(name);

    const desc = document.createElement('p');
    desc.textContent = item.desc;
    card.appendChild(desc);

    const price = document.createElement('p');
    price.className = 'price';
    price.textContent = '₹' + item.price;
    card.appendChild(price);

    container.appendChild(card);
  });
}

// Display all categories
displayMenu('breakfast', 'breakfast-container');
displayMenu('shakes', 'shakes-container');
displayMenu('lunch', 'lunch-container');
displayMenu('dinner', 'dinner-container');
