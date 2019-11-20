let starships;
const button = document.querySelector(".button");

// render starships function in the ui
function renderShips(torender) {
  const input = document.querySelector(".input");
  let entry = "";
  torender.forEach(element => {
    parseInt(element.MGLT);
    entry += `<ul class="list"> `;
    entry +=
      "<li>" +
      `<a href =${element.url} >` +
      `<span class = "element_name">
    ${element.name} 
      </span>` +
      " : " +
      parseInt(input.value) / parseInt(element.MGLT) +
      "</li> </ul>";
  });

  document.querySelector(".starships").innerHTML = entry;
}

button.addEventListener("click", () => {
  const input = document.querySelector(".input").value;
  //conditional statement to know when there is a value in the inputbox
  if (input === "") {
    alert("Please use distance in mega lights (MGLT) in input box");
  } else {
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
  }
});
