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
    alt: "Black t-shirt with shrimp playing basketball on fire graphic, with words 'Shrimply Ballin'.'",
  },
  {
    name: "Bracelet",
    category: "accessories",
    price: "$8",
    image: "https://m.media-amazon.com/images/I/51vTuZGM9wL._AC_UY1000_.jpg",
    alt: "Black volcano rock braclet with gold skull charm.",
  },
  {
    name: "Cap",
    category: "accessories",
    price: "$12",
    image: "https://i.etsystatic.com/22444743/r/il/9b6197/2377129007/il_fullxfull.2377129007_g0eb.jpg",
    alt: "Black baseball hat with label 'Your Design Here.'",
  },
  {
    name: "Meh Hoodie",
    category: "clothing",
    price: "$25",
    image: "https://www.paramountshop.com/cdn/shop/files/garfield-have-cool-will-rule-unisex-hooded-sweatshirt-280913_1500x.jpg?v=1718289523",
    alt: "Garfield pullover hoodie.",
  },
  {
    name: "CD",
    category: "music",
    price: "$16",
    image: "images/CD.jpg",
    alt: "CD of album 3.",
  },
  {
    name: "CD bundle",
    category: "music",
    price: "$50",
    image: "https://girdermusic.com/cdn/shop/files/2-up-geoffmoore_512x.jpg?v=1755203710",
    alt: "CD bundle",
  },
  {
    name: "Vinyl",
    category: "music",
    price: "$35",
    image: "images/vinyl1.jpg",
    alt: "Vinyl of album one, Master of Ottawa",
  },
  {
    name: "Limited edition Vinyl",
    category: "music",
    price: "$65",
    image: "images/vinyl.jpg",
    alt: "A vinyl record with the group on the cover.",
  },
  {
    name: "Pin mystery bag",
    category: "accessories",
    price: "$8",
    image: "https://www.claygrahamart.com/cdn/shop/files/UNSOLVED.jpg?v=1730918488&width=1445",
    alt: "Pin mystery bag, black with purple question marks.",
  },
  {
    name: "Keychain bundle",
    category: "accessories",
    price: "$12",
    image: "https://shop.hardrock.com/dw/image/v2/BJKF_PRD/on/demandware.static/-/Sites-hardrock-master/default/dwa37e1964/images/large/0889382542847_Blue.jpg?sw=800&sh=800",
    alt: "Blue guitar keychain.",
  },
  {
    name: "Milk",
    category: "other",
    price: "$6",
    image: "images/milk.jpg",
    alt: "A bag of milk with Maxine on it.",
  },
  {
    name: "Bath water - Kick Flip flavour",
    category: "other",
    price: "$25",
    image: "images/bath4.jpg",
    alt: "Petit Garcon on label of container of water",
  },
  {
    name: "Bath water - Jump flavour",
    category: "other",
    price: "$25",
    image: "images/bath3.jpg",
    alt: "Petit Garcon jumping on label of container of water",
  },
  {
    name: "Bath water - Squish flavour",
    category: "other",
    price: "$25",
    image: "images/bath2.jpg",
    alt: "Petit Garcon on label of container of water",
  },
  {
    name: "Bath water - Boy flavour",
    category: "other",
    price: "$25",
    image: "images/bath1.jpg",
    alt: "Petit Garcon on label of container of water",
  },
  {
    name: "1 single frozen shrimp",
    category: "other",
    price: "$1",
    image: "images/one-frozen-cooked-shrimp.jpg",
    alt: "1 single frozen shrimp",
  },
  {
    name: "Interesting Long sleeve",
    category: "clothing",
    price: "$18",
    image: "https://stribstore.com/cdn/shop/files/mens-long-sleeve-shirt-black-front-66c26ea67bc24.jpg?v=1724018350",
    alt: "Black long sleeve shirt with graphic reading 'That's interesting'",
  },
  {
    name: "Not as cool T-shirt",
    category: "clothing",
    price: "$15",
    image: "https://about---blank.com/cdn/shop/files/FITTEDTEE_BLACK_FRONT.jpg?v=1750781961&width=1920",
    alt: "Plain black t-shirt",
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
        <img class="merch_img" src="${item.image}" alt="${item.alt}">
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

