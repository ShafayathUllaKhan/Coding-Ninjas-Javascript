
function displayArea() {
  const radius = parseFloat(document.getElementById("radius-input").value);
  const area = calculateArea(radius);
  document.getElementById("result").innerText = `The area is: ${area.toFixed(
    2
  )}`;
}

document
  .getElementById("calculate-button")
  .addEventListener("click", displayArea);

// point to remember if cal file is up and script is down
// then script file can access cal file function or variable 
// but not vis versa 
// it difficult to maintain the order so we have modules

  console.log(PI);


//modules are in es6 2015
// before modules iife was used
// and common js and only supported in node js
// like require and exports

