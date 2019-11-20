let starships;
const button = document.querySelector(".button");
const input = document.querySelector(".input");

// render starships function in the ui
function renderShips(torender) {
  let entry = "";
  torender.forEach(element => {
    entry += `<ul class="list"> `;
    entry +=
      "<li>" + `<a href =${element.url} >` + element.name + ":" + "</li> </ul>";
  });

  document.querySelector(".starships").innerHTML = entry;
}

button.addEventListener("click", () => {
  //Using the  the API Endpoint above to retrieve the data
  fetch("https://swapi.co/api/starships/")
    .then(function(response) {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data);
        starships = data.results;
        renderShips(starships);
      });
    })
    .catch(function(err) {
      console.log("Fetch Error :-S", err);
    });
});
