/* Given Code, don't edit */

button = document.getElementsByClassName("button")[0]
button.addEventListener('click', handleClick)
function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  let hour;
  let t;
  t = time.split(":")[0];
  hour = parseInt(t, Number);

  if (hour < 12)
    return "Good Morning";
  else if (hour > 12 && hour < 17)
    return "Good Afternoon";
  else
    return "Good Evening";
  end
}
/* Write your implementation of displayMessage() */
function displayMessage(word){
  greet = document.getElementById('greeting');
  greet.innerText = word
}