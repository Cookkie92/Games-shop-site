let carts = document.querySelectorAll(".add-cart");

let games = [
  {
    title: "Mineklaft 5",
    description: "Create mineshafts",
    thumbnail: "mineklaft5",
    price: 30.99,
    inCart: 0,
  },
  {
    title: "Dogeface 2",
    description: "Explore the dogeface",
    thumbnail: "dogeface2",
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
    thumbnail: "youlose9",
    price: 20.66,
    inCart: 0,
  },
  {
    title: "Racecar sim 2",
    description: "Compete in races with your friends",
    thumbnail: "racecarsim2",
    price: 59,
    inCart: 0,
  },
  {
    title: "Polkamon",
    description: "Teach wierd creatures polka",
    thumbnail: "polkamon",
    price: 19.99,
    inCart: 0,
  },
  {
    title: "Grand Left Auto",
    description: "You can only turn Left",
    thumbnail: "grandleftauto",
    price: 11.99,
    inCart: 0,
  },
  {
    title: "Slownic",
    description: "Battle bosses with friends while you are very slow",
    thumbnail: "slownic",
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
//runder av
function round(value, decimals) {
  return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
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
    if (cartItems[games.thumbnail] == undefined) {
      cartItems = {
        ...cartItems,
        [games.thumbnail]: games,
      };
    }
    cartItems[games.thumbnail].inCart += 1;
  } else {
    games.inCart = 1;

    cartItems = {
      [games.thumbnail]: games,
    };
  }

  localStorage.setItem("gamesInCart", JSON.stringify(cartItems));

  // console.log("product in cart", cartItems);
}

function totalSum(games) {
  let cartSum = localStorage.getItem("totalSum");
  // console.log(cartSum);
  // console.log(typeof cartSum);

  if (cartSum != null) {
    cartSum = parseFloat(cartSum);
    localStorage.setItem("totalSum", round(cartSum + games.price, 2));
  } else {
    localStorage.setItem("totalSum", round(games.price, 2));
  }
}

function getCart() {
  let cartItems = localStorage.getItem("gamesInCart");
  cartItems = JSON.parse(cartItems);
  let cartContainer = document.querySelector(".games");
  let cartSum = localStorage.getItem("totalSum");
  let gameNumbers = localStorage.getItem("cartNum");

  // console.log(cartItems);

  if (cartItems && cartContainer) {
    cartContainer.innerHTML = "";
    Object.values(cartItems).map((item) => {
      cartContainer.innerHTML += `
      <div class="game">
      <a href="#"> <i class="fas fa-ban"></i></a>
      <img class="cart-pic" src="/Images/${item.thumbnail}.jpg">
      <span>${item.title}<span>
      </div>
      <div class="price">$${item.price}</div>
      <div class="quantity">
      <a href="#"><i class="fas fa-arrow-circle-left" id=""></i></a>
      <span>${item.inCart}</span>
      <a href="#"><i class="fas fa-arrow-circle-right"></i></a>
      </div>
      <div class="sum">
        $${item.inCart * item.price}
      </div>
      `;
    });

    cartContainer.innerHTML += `
    <div class="totalSumContainer">
    <h4>${gameNumbers}</h4>
      <h4 class="totalSumText">
      Total Sum: </h4>
      <h4 class="totalSum">
         $${cartSum}
      </h4>
      </div>
    `;
  }
  removeGame();
}

function removeGame() {
  let removeGameBtn = document.querySelectorAll(".game a");
  let gameName;
  let gameNumbers = localStorage.getItem("cartNum");
  let cartItems = localStorage.getItem("gamesInCart");
  cartItems = JSON.parse(cartItems);
  let cartSum = localStorage.getItem("totalSum");
  console.log(cartItems);

  for (let i = 0; i < removeGameBtn.length; i++) {
    removeGameBtn[i].addEventListener("click", () => {
      gameName = removeGameBtn[i].parentElement.textContent
        .trim()
        .toLowerCase()
        .replace(/ /g, "");
      // console.log(gameName);
      // console.log(cartItems[gameName].title + " " + cartItems[gameName].inCart);
      localStorage.setItem("cartNum", gameNumbers - cartItems[gameName].inCart);

      localStorage.setItem(
        "totalSum",
        round(
          cartSum - cartItems[gameName].price * cartItems[gameName].inCart,
          2
        )
      );

      delete cartItems[gameName];
      localStorage.setItem("gamesInCart", JSON.stringify(cartItems));
      getCart();
      showCartNum();
    });
  }
}

//Må fiksa så faen på denna her, heilt feil variablar
// function changeQnty(action, inCart) {
//   cartItems = cartItems.map((item) => {
//     let oldNumQnty = item.inCart;

//     if (item.inCart === inCart) {
//       if (action === "minus") {
//         oldNumQnty--;
//       } else if (action === "plus") {
//         oldNumQnty++;
//       }
//     }
//     return {
//       ...item,
//       inCart: oldNumQnty,
//     };
//   });
// }

showCartNum();
getCart();
