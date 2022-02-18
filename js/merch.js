const url = "https://it-kk.no/doge-hub/wp-json/wc/store/products?";

const resultContainer = document.querySelector(".result");

async function getApi() {
  try {
    const response = await fetch(url);

    const result = await response.json();
    // console.log(result);
    resultContainer.innerHTML = "";

    for (let i = 0; i < result.length; i++) {
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
  } catch (error) {
    console.log("error occured", error);
    resultContainer.innerHTML = "This didnt go as planned";
  }
}

getApi();
