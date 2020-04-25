/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}



/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(str) {
  let newarr = str.split(":")
  let num = parseInt(newarr[0])
  if (num < 12){
    return "Good Morning"
  } else if (num > 12 && num < 17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}


/* Write your implementation of displayMessage() */

function displayMessage(string) {
  document.querySelector("#greeting").innerText = string
  return 
}