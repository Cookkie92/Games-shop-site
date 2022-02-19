const detailsContainer = document.querySelector(".details-result");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://it-kk.no/doge-hub/wp-json/wc/store/products/" + id;

async function getApi() {
  try {
    const response = await fetch(url);

    const results = await response.json();

    console.log(results);
    createHtml(results);
  } catch (error) {
    console.log("error occured", error);
    detailsContainer.innerHTML = "This didnt go as planned";
  }
}

getApi();

function createHtml(results) {
  detailsContainer.innerHTML = `
      <div class="details-result">
      
       <img class="details-image" src="${results.images[0].thumbnail}"  alt="thumbnail">
        <h3 class="logo">${results.name}</h3>
        <h4>Description:</h4>
         ${results.description}
         <p>Price: ${results.prices.price} KR</p>
         <a class="add-cart" href="#">Add to cart</a>
          
      </div>
      `;
}
