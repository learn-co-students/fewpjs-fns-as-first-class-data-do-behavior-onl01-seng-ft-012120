/* Given Code, don't edit */

document.querySelector("#button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById("time").value;
  displayMessage(greet(timeString));
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(string) {
  let hour = parseInt(string.split(":")[0]);
  if (hour < 12) {
    return "Good Morning";
  } else if (hour > 11 && hour < 18) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

/* Write your implementation of displayMessage() */

function displayMessage(string) {
  const node = document.getElementById('greeting')
  node.innerText = string
}
