/* Given Code, don't edit */

document.querySelectorAll("input")[1].addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
function greet(s) {
  let s_array = s.split(":")
  let int = parseInt(s_array[0])
  console.log(int);
  if (int < 12) {
    return "Good Morning"
  } else if (int >= 12 && int < 17) {
    return "Good Afternoon"
  }
  else {
    return "Good Evening"
  }

}

/* Write your implementation of displayMessage() */

function displayMessage(str) {
  let element = document.querySelector("#greeting")
  element.innerText = str
}
