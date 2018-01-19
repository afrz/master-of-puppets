/**
 * Randomly shuffle the array
 * @param {array} array - random array (shallow copy)
 */
export function shuffle(array) {
  let arr = array.slice();

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Hash an array into an object
 * @param {array} array- array to hash
 * @param {func} getKey - key extractor
 */
export function hash(array, getKey) {
  return array.reduce((acc, x) => {
    acc[getKey(x)] = x;
    return acc;
  }, {});
}

/** Immutability helper : update an element properties belonging to an array.
  @param {array} array : container array
  @param {object} element - object to replace
  @param  {object} newElement - new object
*/
export function replace(array, element, newElement) {
  //find index of current object
  const index = array.indexOf(element);
  if (index < 0) return array;

  //rebuild array using ES6 syntax
  return [...array.slice(0, index), newElement, ...array.slice(index + 1)];
}
