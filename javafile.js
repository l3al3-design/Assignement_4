/* ---------------------- MERCH ---------------------- */
const merchData = [
 {
    name: "Cool T-shirt",
    category: "clothing",
    price: "$19.99",
    image: "https://www.southernliving.com/thmb/pn9NrRsTpG-U1xpRyIN90C5wcJw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Southern-Living-Paloma--Step-4-1769-84d74c08ebca4c0fba05cbce1d75c3d3.jpg",
  },
  {
    name: "Bracelet",
    category: "accessories",
    price: "$12.99",
    image: "https://m.media-amazon.com/images/I/51vTuZGM9wL._AC_UY1000_.jpg",
  },
  /*{
    name: "",
    category: "",
    price: "",
    image: "",
  },*/
];

const merchContainer = document.getElementById("merch-container");
const filterButtons = document.querySelectorAll(".filter-btn");

function renderMenu(data) {
  if (!merchContainer) return;

  merchContainer.innerHTML = "";
  merchContainer.classList.add("img_group");

  data.forEach(item => {
    const card = document.createElement("article");
    card.classList.add("img_box");

    card.innerHTML = `
        <article class="merch_info">
            <img class="merch_img" src="${item.image}">  
            <p class="TEST">${item.name}</p>
            <span class="price-box">${item.price}</span>
        </article>
    `;

    merchContainer.appendChild(card);
  });
}

if (merchContainer) {
  renderMenu(merchData);

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(button => button.classList.remove("active"));         /* AI assisted: I struggled to understand how to make the button show their own category, so i use ChatGPT to explain it to me*/
      btn.classList.add("active");

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