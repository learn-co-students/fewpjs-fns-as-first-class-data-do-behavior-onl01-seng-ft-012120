/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(s) {
  let s_array = s.split(':')
  let int = parseInt(s_array[0])
  if (int < 12) return "Good Morning"
  if (int >= 12 && int <= 17)  return "Good Afternoon" 
  else return "Good Evening"
}
/* Write your implementation of displayMessage() */
function displayMessage(str) {
  let el = document.querySelector('h1#greeting')
  el.innerText = str
}

