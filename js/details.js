const detailsContainer = document.querySelector(".details-result");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

fetch("https://free-to-play-games-database.p.rapidapi.com/api/game?id=" + id, {
  method: "GET",
  headers: {
    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    "x-rapidapi-key": "a80672ee60msh8679bffac93f402p1f8093jsnd8eb05bce674",
  },
})
  .then((response) => response.json())

  .then((data) => {
    try {
      // detailsContainer.innerHTML = "";
      const games = data;
      const detailsTitle = document.querySelector("title");
      detailsTitle.innerHTML = `${games.title}`;
      detailsContainer.innerHTML += `
      <div class="details-result">
      <div class="btn-container">
          <a href="games.html" class="start-btn"><--- Go Back</a>
      </div>
       <img class="details-image" src="${games.thumbnail}"  alt="thumbnail">
        <h3 class="logo">${games.title}</h3>
        <h4>Description:</h4>
         <p>${games.short_description}</p>
         <p>Genre: ${games.genre}</p>
          Release: <time>${games.release_date}</time>

          <div class="btn-container">
          <a href="" class="start-btn">Add to cart</a>
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
