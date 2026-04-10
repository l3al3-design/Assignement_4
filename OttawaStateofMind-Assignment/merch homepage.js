/*
const img = new Image();
img.src = 'images/one-frozen-cooked-shrimp.jpg'; // Path relative to your HTML/JS file
document.body.appendChild(img);
*/

/* ---------------------- MERCH ---------------------- */
const merchData = [
 {
    name: "Cool T-shirt",
    category: "clothing",
    price: "$17",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX6Iuuym6Y6NnNoIDxgdJV6lSjAhS-4-ACxw&s",
    alt: "A black shirt.",
  },
  {
    name: "CD",
    category: "music",
    price: "$16",
    image: "images/CD.jpg",
    alt: "CD of album 3.",
  },
  {
    name: "Limited edition Vinyl",
    category: "music",
    price: "$65",
    image: "images/vinyl.jpg",
    alt: "A vinyl record with the group on the cover.",
  },
  {
    name: "Bath water - Boy flavour",
    category: "other",
    price: "$25",
    image: "images/bath1.jpg",
    alt: "Petit garcon bath water."
  },
  {
    name: "1 single frozen shrimp",
    category: "other",
    price: "$1",
    image: "images/one-frozen-cooked-shrimp.jpg",
    alt: "A single frozen cooked shrimp on a white background.",
  },
  {
    name: "Milk",
    category: "other",
    price: "$6",
    image: "images/milk.jpg",
    alt: "A bag of milk with Maxine on it.",
  },
];

const merchContainer = document.getElementById("merch-container");
const filterButtons = document.querySelectorAll(".filter-btn");

function renderMenu(data) {
  if (!merchContainer) return;

  merchContainer.innerHTML = "";
  merchContainer.classList.add("merch_grid");

  data.forEach(item => {
    const card = document.createElement("article");
    card.classList.add("merch_box_homepage");

    card.innerHTML = `
      <div class="merch_info" ><a href="merch.html">
        <img class="merch_img" src="${item.image}" alt="${item.name}">
        <p class="merch_text">${item.name}
        <span class="price-box">${item.price}</span>
        </p>
      </div>
    `;

    merchContainer.appendChild(card);
  });
}

if (merchContainer) {
  renderMenu(merchData);

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(button => button.classList.remove("active"));        

      const category = btn.dataset.category;

      if (category === "all") {
        renderMenu(merchData);
      } else {
        const filtered = merchData.filter(item => item.category === category);
        renderMenu(filtered);
      }
    });
  });
}

