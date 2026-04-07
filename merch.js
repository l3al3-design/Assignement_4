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
    image: "https://i.etsystatic.com/22444743/r/il/9b6197/2377129007/il_fullxfull.2377129007_g0eb.jpg",
  },
  {
    name: "Meh Hoodie",
    category: "clothing",
    price: "$25",
    image: "https://www.paramountshop.com/cdn/shop/files/garfield-have-cool-will-rule-unisex-hooded-sweatshirt-280913_1500x.jpg?v=1718289523",
  },
  {
    name: "CD",
    category: "music",
    price: "$16",
    image: "images/CD.jpg",
  },
  {
    name: "CD bundle",
    category: "music",
    price: "$50",
    image: "https://girdermusic.com/cdn/shop/files/2-up-geoffmoore_512x.jpg?v=1755203710",
  },
  {
    name: "Vinyl",
    category: "music",
    price: "$35",
    image: "images/vinyl1.jpg",
  },
  {
    name: "Limited edition Vinyl",
    category: "music",
    price: "$65",
    image: "images/vinyl.jpg",
  },
  {
    name: "Pin mystery bag",
    category: "accessories",
    price: "$8",
    image: "https://www.claygrahamart.com/cdn/shop/files/UNSOLVED.jpg?v=1730918488&width=1445",
  },
  {
    name: "Keychain bundle",
    category: "accessories",
    price: "$12",
    image: "https://shop.hardrock.com/dw/image/v2/BJKF_PRD/on/demandware.static/-/Sites-hardrock-master/default/dwa37e1964/images/large/0889382542847_Blue.jpg?sw=800&sh=800",
  },
  {
    name: "Milk",
    category: "other",
    price: "$6",
    image: "images/milk.jpg",
  },
  {
    name: "Bath water - Kick Flip flavour",
    category: "other",
    price: "$25",
    image: "images/bath4.jpg",
  },
  {
    name: "Bath water - Jump flavour",
    category: "other",
    price: "$25",
    image: "images/bath3.jpg",
  },
  {
    name: "Bath water - Squish flavour",
    category: "other",
    price: "$25",
    image: "images/bath2.jpg",
  },
  {
    name: "Bath water - Boy flavour",
    category: "other",
    price: "$25",
    image: "images/bath1.jpg",
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
    image: "https://stribstore.com/cdn/shop/files/mens-long-sleeve-shirt-black-front-66c26ea67bc24.jpg?v=1724018350",
  },
  {
    name: "Not as cool T-shirt",
    category: "clothing",
    price: "$15",
    image: "https://about---blank.com/cdn/shop/files/FITTEDTEE_BLACK_FRONT.jpg?v=1750781961&width=1920",
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

