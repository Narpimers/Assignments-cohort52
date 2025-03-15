/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
window.addEventListener('DOMContentLoaded', function() {
  let newParagraph = document.createElement('p');
  document.body.append(newParagraph);

  function addCurrentTime() {
    const currentDate = new Date();
    let currentHour = currentDate.getHours();
    let currentMin = currentDate.getMinutes();
    let currentSec = currentDate.getSeconds();

    if (currentHour < 10) {
      currentHour = '0' + currentHour;
    }
    if (currentMin < 10) {
      currentMin = '0' + currentMin;
    }
    if (currentSec < 10) {
      currentSec = '0' + currentSec;
    }

    newParagraph.textContent = `${currentHour}:${currentMin}:${currentSec}`;
  }

  setInterval(addCurrentTime, 1000);
});