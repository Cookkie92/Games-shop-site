fetch("https://rawg-video-games-database.p.rapidapi.com/games", {
  method: "GET",
  headers: {
    "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
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
        if (i === 5) {
          break;
        }

        resaultContainer.innerHTML += ``;
      }
    } catch (error) {
      console.warn("Something went wrong", error);
      resaultContainer.innerHTML += `
      <h3 class="logo">Something Went Wrong!</h3>
    `;
    }
  });
