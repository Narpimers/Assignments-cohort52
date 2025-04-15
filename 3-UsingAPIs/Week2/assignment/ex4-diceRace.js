/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/blob/main/3-UsingAPIs/Week2/README.md#exercise-4-dice-race

1. Complete the function `rollDice()` by using `.map()` on the `dice` array 
   to create an array of promises for use with `Promise.race()`.
2. Refactor the function `main()` using async/await and try/catch.
3. Once you got this working, you may observe that some dice continue rolling 
   for some undetermined time after the promise returned by `Promise.race()` 
   resolves. Do you know why? Add your answer as a comment to the bottom of the 
   file.
------------------------------------------------------------------------------*/
// ! Do not remove these lines
import { rollDie } from '../../helpers/pokerDiceRoller.js';
/** @import {DieFace} from "../../helpers/pokerDiceRoller.js" */

export function rollDice() {
  const dice = [1, 2, 3, 4, 5];
  const allPromises =  dice.map((element) => rollDie(element));
  return Promise.race(allPromises);
}

// Refactor this function to use async/await and try/catch
async function main() {
  try {
    let results = await rollDice()
    console.log('Resolved!', results)
  } catch (error) {
    console.log('Rejected!', error.message)
  }
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}

// Because there is a setTimeout in the rollout, and the request goes into a queue, 
// the app already knows what the answer will be while the setTimeout is still running.
//  So it shows the result, but the text continues to appear because the request is still in the queue.
