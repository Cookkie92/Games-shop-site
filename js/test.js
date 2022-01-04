const url =
  "https://api.rawg.io/api/games?&key=2904233664034c1da06563d6fd16478c";

const resultContainer = document.querySelector(".result");

async function getApi() {
  // checking for errors with try
  try {
    //connecting to API
    const response = await fetch(url);

    const result = await response.json();
    console.log(result);
    //finding the info
    const games = result.results;
    //displaying loader
    resultContainer.innerHTML = "";

    for (let i = 0; i < games.length; i++) {
      //counting number of tags
      //games[i].tags.length = counts the number of tags

      if (i === 20) {
        //stops after 8 has been reached
        break;
      }

      //deploying the info
      resultContainer.innerHTML += `
      <div class ="result">
      <a href="details.html?id=${games[i].id}">
      <div class = "inner-result">
       
        <img class="image" src="${games[i].background_image}"  alt="thumbnail">
        <h3 class="logo">${games[i].name}</h3>
        <p>Price: ${games[i].rating} Doge</p>
        
         </div>
         </a>
      </div>
      
      `;
    }

    // catching error
  } catch (error) {
    console.log("error occured", error);
    resultContainer.innerHTML = "This didnt go as planned";
  }
}

getApi();
