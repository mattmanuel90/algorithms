import { randomInt } from "../math/randomInteger.js";

export const shuffle = <T>(array: T[]): T[] => {
  array = array.slice();

  for (let i = 0; i < array.length; i++) {
    const randomChoiceIndex = randomInt(i, array.length);
    [array[i], array[randomChoiceIndex]] = [array[randomChoiceIndex], array[i]];
  }

  return array;
};