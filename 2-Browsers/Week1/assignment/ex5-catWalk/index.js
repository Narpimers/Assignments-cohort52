/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-5-the-cat-walk

1. Create a variable to store a reference to the `<img>` element.
2. Change the style of the `<img>` to have a `left` of `0px`, so that it starts 
   at the left hand of the screen.
3. Complete the function called catWalk() to move the cat 10 pixels to the right
   of where it started, by changing the `left` style property.
4. Call that function every 50 milliseconds. Your cat should now be moving 
   across the screen from left to right. Hurrah!
5. When the cat reaches the right-hand of the screen, restart them at the left 
   hand side (`0px`). So they should keep walking from left to right across the 
   screen, forever and ever.
6. When the cat reaches the middle of the screen, replace the img with an image 
   of a cat dancing (use this URL given below), keep it dancing for 5 seconds, 
   and then replace the img with the original image and have it 
   continue the walk.

   Dancing cat URL:

   https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif
-----------------------------------------------------------------------------*/
// const cat = document.querySelector("img");
// const stopPos = window.innerWidth;
// const startPos = -cat.width;
// const dancingPos = (window.innerWidth - cat.width)/2;
// cat.style.left = startPos+"px";
// function catWalk() {
//    pos = cat.style.left + 10 + "px";
//    cat.style.left = parseInt(pos.split("px")[0]) + 10 + "px"
//    console.log(pos.split("px")[0]);
//    console.log(parseInt(pos.split("px")[0]));
// }
// cat.style.left = parseInt(img.style.left) + 10 + "px";
// console.log(cat.style.left);

// const catWalkInterval = setInterval(catWalk, 100)

const cat = document.querySelector("img");
const danceStop = (window.innerWidth - cat.width) / 2;
const end = window.innerWidth;
const originalSrc = cat.src;

  


function catWalk() { 
   let hasDanced = false;
   let catPosition = -cat.width;
   const main = () => { 
      const catWalkingInterval = setInterval(() => {
         catPosition += 10;
         cat.style.left = `${catPosition}px`;

         if (catPosition >= danceStop && !hasDanced) {
            cat.src = "https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif";
            hasDanced = true;
            clearInterval(catWalkingInterval);

            setTimeout(() => {
               cat.src = originalSrc;
               main();
            }, 5000);
         }; 
         if (catPosition > end) {
            catPosition = -cat.width;
            hasDanced = false;
         } 
         
      }, 50);
      };
   main();

   
 };
 window.addEventListener('load', catWalk)
 