const resaultContainer = document.querySelector(".inner-headline");

fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", {
  method: "GET",
  headers: {
    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    "x-rapidapi-key": "a80672ee60msh8679bffac93f402p1f8093jsnd8eb05bce674",
  },
})
  .then((response) => response.json())
  .then((data) => {
    try {
      const games = data;
      console.log(games);
      //   resaultContainer.innerHTML = "";
      for (let i = 0; i < games.length; i++) {
        if (i === 3) {
          break;
        }

        resaultContainer.innerHTML += `
        <div class ="result">
        <a href="details.html?id=${games[i].id}">
        <div class = "inner-result">
         
          <img class="image" src="${games[i].thumbnail}"  alt="thumbnail">
          <h3 class="logo">${games[i].title}</h3>
          Genre: ${games[i].genre}
          
          
           </div>
           </a>
        </div>
        
        `;
      }
    } catch (error) {
      console.warn("Something went wrong", error);
      resaultContainer.innerHTML += `
        <h3 class="logo">Something Went Wrong!</h3>
      `;
    }
  });
