/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-3-the-logo-hijack

1. Find out how to select the element that contains the Google logo, and store 
   it in a variable.
2. Modify the `src` and `srcset` of the logo so that it's replaced by the 
   HackYourFuture logo instead.
------------------------------------------------------------------------------*/
function hijackGoogleLogo() {
   let allImg = document.querySelectorAll('img');
   allImg.forEach(img => {
    if (img.className === "lnXdpd") {
       img.src="https://raw.githubusercontent.com/HackYourFuture/Assignments/refs/heads/main/assets/hyf-logo-black-bg-small.png";
       img.srcset="https://raw.githubusercontent.com/HackYourFuture/Assignments/refs/heads/main/assets/hyf-logo-black-bg-small.png";  
    }});
 
 }
 
 hijackGoogleLogo();
 
