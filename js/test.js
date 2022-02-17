const url =
  "https://it-kk.no/doge-hub/wp-json/wc/store/products?&key=ck_8bdf87d21f21819edb087d365fa147ad85718e4b";

const resultContainer = document.querySelector(".result");

async function getApi() {
  // checking for errors with try
  try {
    //connecting to API
    const response = await fetch(url);

    const result = await response.json();
    console.log(result);
    //finding the info
    const games = result;
    //displaying loader
    resultContainer.innerHTML = "";

    for (let i = 0; i < result.length; i++) {
      // const pictures = result[i].images.length;

      // console.log(pictures);

      resultContainer.innerHTML += `
      <div class ="result">
      <a href="details.html?id=${result[i].id}">
      <div class = "inner-result">

        <img class="image" src="${result[i].images[0].thumbnail}"  alt="thumbnail">
        <h3 class="logo">${result[i].name}</h3>
        <p>Price: ${result[i].prices.price} Kr</p>

         </div>
         </a>
      </div>

      `;
    }

    // for (let i = 0; i < result.length; i++) {
    //   //counting number of tags
    //   //games[i].tags.length = counts the number of tags

    //   if (i === 20) {
    //     //stops after 8 has been reached
    //     break;
    //   }

    //   //deploying the info
    //   resultContainer.innerHTML += `
    //   <div class ="result">
    //   <a href="details.html?id=${games[i].id}">
    //   <div class = "inner-result">

    //     <img class="image" src="${games[i].background_image}"  alt="thumbnail">
    //     <h3 class="logo">${games[i].name}</h3>
    //     <p>Price: ${games[i].rating} Doge</p>

    //      </div>
    //      </a>
    //   </div>

    //   `;
    // }

    // catching error
  } catch (error) {
    console.log("error occured", error);
    resultContainer.innerHTML = "This didnt go as planned";
  }
}

getApi();
