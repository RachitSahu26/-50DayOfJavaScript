const inputValue = document.getElementById('display');
const buttons = document.getElementsByClassName('button'); // Use getElementsByClassName

let string = "";

// Loop through the buttons and add event listener to each button
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (e) => {
    if (e.target.innerHTML === "=") {
      string = eval(string);
      inputValue.value = string;
    } else if (e.target.innerHTML === "AC") {
      string = "";
      inputValue.value = string;
    } else if (e.target.innerHTML === "DEL") {
      string = string.substring(0, string.length - 1);
      inputValue.value = string;
    } else {
      // If the clicked button is not "=", "AC", or "DEL"
      // Append the clicked button's innerHTML to the string
      string += e.target.innerHTML;
      inputValue.value = string;
    }
  });
}
