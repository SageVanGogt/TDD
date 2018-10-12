function quickSort(array) {
  let pivot = array.pop();
  let smallArray = [];
  let largeArray = [];

  if (array.length <= 1) {
    return array;
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      smallArray.push(array[i]);
    } else {
      largeArray.push(array[i]);
    }
  }
  return [...quickSort(smallArray), pivot, ...quickSort(largeArray)];
}

module.exports = quickSort;