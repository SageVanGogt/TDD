const chai = require('chai');
const assert = chai.assert;
const bubbleSort = require('./../lib/bubblesort');
const arrayGenerator = require('./../lib/arrayGenerator');
const unsorted = arrayGenerator(15000);

describe ('bubblesort', function() {

  it('should be a function', function() {
    assert.isFunction(bubbleSort);
  });

  it('should return an array', function() {
    let sortedArray = bubbleSort(unsorted);

    assert.equal(sortedArray.length, unsorted.length);
  });

  it('should sort the array', function() {
    let sortedByBubbleSortArray = bubbleSort(unsorted);
    let sortedBySortArray = unsorted.sort();

    assert.equal(sortedByBubbleSortArray, sortedBySortArray);
  });


});