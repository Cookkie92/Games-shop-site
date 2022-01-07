let carts = document.querySelectorAll(".add-cart");

let games = [
  {
    title: "Mineklaft 5",
    description: "Create mineshafts",
    thumbnail: "Mineklaft",
    price: 30.99,
    inCart: 0,
  },
  {
    title: "Dogeface 2",
    description: "Explore the dogeface",
    thumbnail: "doge",
    price: 9.99,
    inCart: 0,
  },
  {
    title: "Fragfrog",
    description: "Destroy everyone",
    thumbnail: "fragfrog",
    price: 5.57,
    inCart: 0,
  },
  {
    title: "You Lose 9",
    description: "You cannot win this game",
    thumbnail: "youlose",
    price: 20.66,
    inCart: 0,
  },
  {
    title: "Racecar sim 2",
    description: "Compete in races with your friends",
    thumbnail: "racecarsim",
    price: 59,
    inCart: 0,
  },
  {
    title: "Polkamon",
    description: "Teach wierd creatures polka",
    thumbnail: "pokemon1",
    price: 19.99,
    inCart: 0,
  },
  {
    title: "Grand Left Auto",
    description: "You can only turn Left",
    thumbnail: "gta",
    price: 11.99,
    inCart: 0,
  },
  {
    title: "Slownic",
    description: "Battle bosses with friends while you are very slow",
    thumbnail: "sonic",
    price: 50,
    inCart: 0,
  },
];
//loop og click event
for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNum(games[i]);
    totalSum(games[i]);
  });
}

function showCartNum() {
  let gameNumbers = localStorage.getItem("cartNum");

  if (gameNumbers) {
    document.querySelector(".cart span").textContent = gameNumbers;
  }
}

//Legger item i local storage
function cartNum(games) {
  let gameNumbers = localStorage.getItem("cartNum");

  gameNumbers = parseInt(gameNumbers);

  if (gameNumbers) {
    localStorage.setItem("cartNum", gameNumbers + 1);
    document.querySelector(".cart span").textContent = gameNumbers + 1;
  } else {
    localStorage.setItem("cartNum", 1);
    document.querySelector(".cart span").textContent = 1;
  }
  setItems(games);
}

function setItems(games) {
  let cartItems = localStorage.getItem("gamesInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[games.title] == undefined) {
      cartItems = {
        ...cartItems,
        [games.title]: games,
      };
    }
    cartItems[games.title].inCart += 1;
  } else {
    games.inCart = 1;

    cartItems = {
      [games.title]: games,
    };
  }

  localStorage.setItem("gamesInCart", JSON.stringify(cartItems));

  console.log("product in cart", cartItems);
}

function totalSum(games) {
  let cartSum = localStorage.getItem("totalSum");
  console.log(cartSum);
  console.log(typeof cartSum);

  if (cartSum != null) {
    cartSum = parseInt(cartSum);
    localStorage.setItem("totalSum", cartSum + games.price);
  } else {
    localStorage.setItem("totalSum", games.price);
  }
}

function getCart() {
  let cartItems = localStorage.getItem("gamesInCart");
  cartItems = JSON.parse(cartItems);
  let cartContainer = document.querySelector(".games");
  console.log(cartItems);
  if (cartItems && cartContainer) {
    cartContainer.innerHTML = "";
    Object.values(cartItems).map((item) => {
      cartContainer.innerHTML += `
      <div class="game">
      <i class="fas fa-ban"></i>
      <img class="cart-pic" src="/Images/${item.thumbnail}.jpg">
      <span>${item.title}<span>
      </div>
      <div class="price">$${item.price}</div>
      <div class="quantity">
      <i class="fas fa-arrow-circle-left"></i>
      <span>${item.inCart}</span>
      <i class="fas fa-arrow-circle-right"></i>
      </div>
      <div class="sum">
        $${item.inCart * item.price}
      </div>
      `;
    });
  }
}

showCartNum();
getCart();
