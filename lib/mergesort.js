const mergeSort = (array) => {

  if (array.length <= 1) {
    return array;
  }
  
  const center = Math.ceil(array.length / 2);
  const leftSide = array.slice( 0, center);
  const rightSide = array.slice(center);
  
  
  return merge(mergeSort(leftSide), mergeSort(rightSide));
};
  
  
  
function merge(leftSide, rightSide) {
  const parentArray = [];
  let i = 0;
  let j = 0;
  
  while (i < leftSide.length && j < rightSide.length) {
    if (leftSide[i] > rightSide[j]) {
      parentArray.push(rightSide[j]);
      j++;
    } else {
      parentArray.push(leftSide[i]);
      i++;
    }
  }
  
  return [...parentArray, ...leftSide.splice(i), ...rightSide.splice(j)];
};

module.exports = mergeSort;