//your JS code here. If required.
function updateOutputText() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000);
  });
}

// Assuming you have an HTML element with the ID "output"
const outputElement = document.getElementById("output");

updateOutputText().then((message) => {
  outputElement.innerText = message;
})
