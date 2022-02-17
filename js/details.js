const detailsContainer = document.querySelector(".details-result");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url =
  "https://it-kk.no/doge-hub/wp-json/wc/store/products?&key=ck_8bdf87d21f21819edb087d365fa147ad85718e4b" + id,;

const resultContainer = document.querySelector(".result");

async function getApi() {
  try {
    const response = await fetch(url);

    const result = await response.json();
    console.log(result);
    const games = result;


      detailsContainer.innerHTML += `
      <div class="details-result">
      <div class="btn-container">
          <a href="index.html" class="start-btn"><--- Go Back</a>
      </div>
       <img class="details-image" src="${games.thumbnail}"  alt="thumbnail">
        <h3 class="logo">${games.title}</h3>
        <h4>Description:</h4>
         <p>${games.short_description}</p>
         <p>Genre: ${games.genre}</p>
          Release: <time>${games.release_date}</time>

          <div class="btn-container">
          <a href="${games.game_url}" class="start-btn">Play It Now</a>
      </div>
      
         </div>
        
      
      `;

      console.log(games);
    } catch (error) {
      console.warn("Something Went Wrong", error);
      detailsContainer.innerHTML += `
      <h3 class="logo">Something Went Wrong!</h3>
      `;
    }
  });
