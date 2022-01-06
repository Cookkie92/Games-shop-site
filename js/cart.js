let carts = document.querySelectorAll(".add-cart");

let games = [
  {
    title: "Mineklaft 5",
    description: "Create mineshafts",
    Price: "30.99",
    inCart: 0,
  },
  {
    title: "Dogeface 2",
    description: "Explore the dogeface",
    Price: "9.99",
    inCart: 0,
  },
  {
    title: "Fragfrog",
    description: "Destroy everyone",
    Price: "5.57",
    inCart: 0,
  },
  {
    title: "You Lose 9",
    description: "You cannot win this game",
    Price: "20.66",
    inCart: 0,
  },
  {
    title: "Racecar sim 2",
    description: "Compete in races with your friends",
    Price: "59",
    inCart: 0,
  },
  {
    title: "Polkamon",
    description: "Teach wierd creatures polka",
    Price: "19.99",
    inCart: 0,
  },
  {
    title: "Grand Left Auto",
    description: "You can only turn Left",
    Price: "11.99",
    inCart: 0,
  },
  {
    title: "Slownic",
    description: "Battle bosses with friends while you are very slow",
    Price: "50",
    inCart: 0,
  },
];
//loop og click event
for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNum(games[i]);
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
  console.log("product clicked is", games);
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

showCartNum();
