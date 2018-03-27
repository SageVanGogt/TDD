function sortArray(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = i; j > 0; j--) {
        if (array[j - 1] > array[j]) {
          [ array[j - 1], array[j] ] = [ array[j], array[j - 1] ]
        } else {
          break;
        }
        console.log(array)
        console.log('----------')
      }
    }
    
    return array;
  }