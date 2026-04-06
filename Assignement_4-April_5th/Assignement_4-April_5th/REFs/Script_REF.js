/* ---------------------- 1. HAMBURGER NAV ---------------------- */
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("nav-open");
    });
    document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("nav-open");
      });
    });
  }
});

/* ---------------------- 2(3). BACK TO TOP ---------------------- */
document.addEventListener("DOMContentLoaded", function () {
	const topButton = document.getElementById("topBtn");

	if (topButton) {
		topButton.addEventListener("click", function () {
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
		});
	}
});

/* ---------------------- 3(4). DATA ---------------------- */
const menuData = [
 {
    name: "Paloma",
    category: "drink",
    price: "$9",
    desc: "Vodka, Grapefruit juice, 7-up 2oz.",
    image: "https://www.southernliving.com/thmb/pn9NrRsTpG-U1xpRyIN90C5wcJw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Southern-Living-Paloma--Step-4-1769-84d74c08ebca4c0fba05cbce1d75c3d3.jpg",
  },
  {
    name: "Manhattan",
    category: "drink",
    price: "$12",
    desc: "Rye whiskey, Sweet Vermouth, Bitters         3 oz",
    image: "https://cdn.diffordsguide.com/cocktail/O5K6nA/default/0/512x.webp?v=1737701598",
  },
  {
    name: "Negroni",
    category: "drink",
    price: "$14",
    desc: "Gin, Campari, Sweet Vermouth 4 oz.",
    image: "https://www.liquor.com/thmb/KPTRXSVO7vyx7O2fPyNkLh9JQPo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mezcal-negroni-1500x1500-primary-6f6c472050a949c8a55aa07e1b5a2d1b.jpg",
  },
  {
    name: "Margarita",
    category: "drink",
    price: "$10",
    desc: "Tequila, Cointreau, Lime         2 oz.",
    image: "https://www.pamperedchef.ca/iceberg/com/recipe/1444068-lg.jpg",
  },
  {
    name: "Old Fashioned",
    category: "drink",
    price: "$12",
    desc: "Bourbon, Bitters, Sugar & Orange Twist         2 oz.",
    image: "https://www.allrecipes.com/thmb/DQIEfVzC7KndUnnHJbmB44a0u3Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/221320-old-fashioned-cocktail-ddmfs-3X4-13181414-bf1365252476463b9650096c28b5acfd.jpg",
  },
  {
    name: "Dark & Stormy",
    category: "drink",
    price: "$14",
    desc: "Dark Rum, Ginger Beer         3 oz.",
    image: "https://www.thespruceeats.com/thmb/2Lej0Iw4N4bIdliQ9I4vqBO0dns=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/dark-n-stormy-mocktail-5210226-hero-01-60f80ee489044b0689d149a971e7c52b.jpg",
  },
  {
    name: "Lemonade Cocktail",
    category: "drink",
    price: "$9",
    desc: "Homemade lemonade with vodka 2 oz.",
    image: "https://www.jimbeam.com/sites/default/files/styles/original/public/2024-07/jim-beam-cocktail-honey-lemonade.jpg.webp?itok=b5ejdrmK",
  },
  {
    name: "Moscow Mule",
    category: "drink",
    price: "$13",
    desc: "Vodka, Ginger Beer, Lime         3 oz.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7-VCrRSxc89DJDeUokRntji7RWegXeYaR0A&s",
  },
  {
    name: "Bloody Mary",
    category: "drink",
    price: "$8",
    desc: "Tomato juice, Vodka, Lemon juice, Tabasco sauce 2oz.",
    image: "https://www.jimbeam.com/sites/default/files/2024-07/jim-beam-cocktail-rye-bloody.jpg",
  },
  {
    name: "Draft Beer",
    category: "drink",
    price: "$10",
    desc: "Chocie between Bench balls falls and Stella Artois         15 oz.",
    image: "https://www.tastingtable.com/img/gallery/why-draft-beer-tastes-better-than-bottled/the-tasting-experience-1648062930.jpg",
  },
  {
    name: "Bottled Beer",
    category: "drink",
    price: "$7.50",
    desc: "Chocie between Coors, Molson Canadian and Belgian Moon             500ml",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdUrEDUzn3KhWfYEJy1xnJsEXF70esmxC_vw&s",
  },
  {
    name: "House Wines",
    category: "drink",
    price: "$11",
    desc: "Choice between white or red wine 16 oz.",
    image: "https://www.ankenyfamilydentist.com/wp-content/uploads/blog/2014/06/red-vs-white-wine.jpg",
  },
  {
    name: "Blue Shoe",
    category: "drink",
    price: "$8",
    desc: "Hawaiin Punch, Cranberry juice, 7-up",
    image: "https://vodka360.com/wp-content/uploads/2021/06/360-Blue-Raspberry-Cooler-768x768.jpg",
  },
  {
    name: "Virgin Mary",
    category: "drink",
    price: "$6",
    desc: "Tomato juice, Lemon juice, Tabasco sauce",
    image: "https://www.thespruceeats.com/thmb/rChqTH3KnJNlOkYOo2OU7tuMLH4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/virgin-mary-mocktail-recipe-760925-hero-images-1-b566f16eb7ae4876bf2adc65ce77c6be.jpg",
  },
  {
    name: "Shirley Temple",
    category: "drink",
    price: "$8",
    desc: "Orange juice, cranberry juice, 7-up",
    image: "https://oasis.ca/wp-content/uploads/2024/07/Shirley-Temple-format-carre.png",
  },
  {
    name: "Virgin Mojito",
    category: "drink",
    price: "$8",
    desc: "Lime, mint, simple syrup, and 7-up",
    image: "https://abeautifulmess.com/wp-content/uploads/2023/05/Virgin-Mojito.jpg",
  },
  {
    name:"Street Tacos",
    category:"food",
    price:"$8",
    desc:"Taco shell, seasonned ground beef, salsa and shredded cheese",
    image: "https://cravingcalifornia.com/wp-content/uploads/2022/05/Carne-Asada-Tacos-5734.jpg",
  },
  {
    name:"Quesadilla", 
    category:"food", 
    price:"$7", 
    desc:"Pita bread, seasonned ground beef, shredded cheese",
    image: "https://www.julieseatsandtreats.com/wp-content/uploads/2024/10/Chicken-Quesadilla-Square.jpg",
  },
  {
    name:"Nachos Supreme", 
    category:"food", 
    price:"$9", 
    desc:"Tortilla chips, shredded cheese, salsa, sour cream",
    image: "https://www.emborg.com/app/uploads/2023/07/1200x900px_3_Step_Nachos_Snack.png",
  },
  {
    name:"Edamame Bowl", 
    category:"food", 
    price:"$4", 
    desc:"The healthier option",
    image: "https://umamipot.com/wp-content/uploads/2025/06/salted-edamame.jpg",
  }
];

const menuContainer = document.querySelector("#menu-container");
const filterButtons = document.querySelectorAll(".filter-btn");

function renderMenu(data) {
  if (!menuContainer) return;

  menuContainer.innerHTML = "";
  menuContainer.classList.add("menu-grid");

  data.forEach(item => {
    const card = document.createElement("article");
    card.classList.add("menu-card");

    card.innerHTML = `
      <header class="card-header">
        <h3 class="text-subtitle">${item.name}</h3>
        <p class="pink-box">${item.price}</p>
      </header>
      <img class="menu-image" src="${item.image}" alt="${item.alt}">
      <p class="menu-description">${item.desc}</p>
    `;

    menuContainer.appendChild(card);
  });
}

/* ---------------------- 5(6). MENU BUTTON ---------------------- */
if (menuContainer) {
  renderMenu(menuData);

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(button => button.classList.remove("active"));         /* AI assisted: I struggled to understand how to make the button show their own category, so i use ChatGPT to explain it to me*/
      btn.classList.add("active");

      const category = btn.dataset.category;

      if (category === "all") {
        renderMenu(menuData);
      } else {
        const filtered = menuData.filter(item => item.category === category);
        renderMenu(filtered);
      }
    });
  });
}

/* ---------------------- 4(5). FAQ QUESTIONS ---------------------- */

const accordionItems = document.querySelectorAll(".faq-item");
accordionItems.forEach(item => {
  const header = item.querySelector(".faq-question");
  header.addEventListener("click", () => {
    accordionItems.forEach(i => {
      if(i !== item){
        i.classList.remove("active");
      }
    });
    item.classList.toggle("active");
  });
});