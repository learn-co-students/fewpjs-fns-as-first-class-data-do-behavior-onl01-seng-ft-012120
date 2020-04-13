/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
const greet = (string) => {
  if(string.split(":")[0] > 17) {
    return "Good Evening!";
  } else if(string.split(":")[0] < 17 && string.split(":")[0] >= 12) {
    return "Good Afternoon";
  } else if(string.split(":")[0] < 12) {
    return "Good Morning"
  };
}
/* Write your implementation of greet() */
const displayMessage = (string) => {
  document.querySelector("#greeting").innerText = string;
}
/* Write your implementation of displayMessage() */
