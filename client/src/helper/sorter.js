export function bubbleSort(array, count = 0){
  let swapped = false;
  for (let i = 0; i < array.length - count; i++) {
    if (array[i] > array[i + 1]) {
      [array[i], array[i +1]] = [array[i + 1], array[i]];
      swapped = true;
    }
  }
  swapped ? bubbleSort(array, count++) : null;
}