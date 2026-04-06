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
  },
  {
    name: "Bracelet",
    category: "accessories",
    price: "$8",
    image: "https://m.media-amazon.com/images/I/51vTuZGM9wL._AC_UY1000_.jpg",
  },
  {
    name: "Cap",
    category: "accessories",
    price: "$12",
    image: "",
  },
  {
    name: "Meh Hoodie",
    category: "clothing",
    price: "$25",
    image: "",
  },
  {
    name: "CD",
    category: "music",
    price: "$16",
    image: "",
  },
  {
    name: "CD bundle",
    category: "music",
    price: "$50",
    image: "",
  },
  {
    name: "Vinyl",
    category: "music",
    price: "$35",
    image: "",
  },
  {
    name: "Limited edition Vinyl",
    category: "music",
    price: "$65",
    image: "",
  },
  {
    name: "Pin mystery bag",
    category: "accessories",
    price: "$8",
    image: "",
  },
  {
    name: "Keychain bundle",
    category: "accessories",
    price: "$12",
    image: "",
  },
  {
    name: "Milk",
    category: "other",
    price: "$6",
    image: "",
  },
  {
    name: "Bath water 350ml",
    category: "other",
    price: "$25",
    image: "",
  },
  {
    name: "1 single frozen shrimp",
    category: "other",
    price: "$1",
    image: "images/one-frozen-cooked-shrimp.jpg",
  },
  {
    name: "Interesting Long sleeve",
    category: "clothing",
    price: "$18",
    image: "",
  },
  {
    name: "Not as cool T-shirt",
    category: "clothing",
    price: "$15",
    image: "",
  },
  
  /*
  {
    name: "",
    category: "",
    price: "",
    image: "",
  },
  */
];

const merchContainer = document.getElementById("merch-container");
const filterButtons = document.querySelectorAll(".filter-btn");

function renderMenu(data) {
  if (!merchContainer) return;

  merchContainer.innerHTML = "";
  merchContainer.classList.add("merch_grid");

  data.forEach(item => {
    const card = document.createElement("article");
    card.classList.add("merch_box");

    card.innerHTML = `
      <div class="merch_info">
        <img class="merch_img" src="${item.image}">
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

