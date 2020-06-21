// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
window.addEventListener("load", function(){
      fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){

         response.json().then(function(json){

            const div = document.getElementById("missionTarget");
              let jIndex = Math.floor(Math.random()*json.length);
                let planetData  = json[jIndex];
              
              
              div.innerHTML = `
              <h2>Mission Destination</h2>
                  <ol>
                  <li>Name: ${planetData.name}</li>
                  <li>Diameter: ${planetData.diameter}</li>
                  <li>Star: ${planetData.star}</li>
                  <li>Distance from Earth: ${planetData.distance}</li>
                  <li>Number of Moons: ${planetData.moons}</li>
                  </ol>
                  <img src="${planetData.image}">` ;
          });
      });
});
