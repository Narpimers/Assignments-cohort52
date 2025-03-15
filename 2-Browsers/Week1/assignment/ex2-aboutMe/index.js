/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

const nickname = document.getElementById('nickname');
nickname.textContent = `Ilias Khugaev`;
const favfood = document.getElementById('fav-food');
favfood.textContent = `Apple`;
const hometown = document.getElementById('hometown');
hometown.textContent = `Geldagan`;

const liArray = document.querySelectorAll('li');
liArray.forEach(li => {
   li.classList.add('list-item')
});