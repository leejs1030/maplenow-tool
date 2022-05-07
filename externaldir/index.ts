import { Probs } from '../src';

const millisecond = 1;
const second = 1000 * millisecond;
const minute = 60 * second;
const hour = 60 * minute;

(async () => {
  let i = 0;
  console.log(`We did loop for ${i++} times...`);
  await Probs.Cube.getRedCubeOptionProbs();
  console.log(`We did loop for ${i++} times...`);
  await Probs.Cube.getRedCubeOptionProbs();
  console.log(`We did loop for ${i++} times...`);
  setInterval(async () => {
    await Probs.Cube.getRedCubeOptionProbs();
    console.log(`We did loop for ${i++} times...`);
  }, minute);
})();
