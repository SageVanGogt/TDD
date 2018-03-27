const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const bubbleSort = require('./../lib/bubblesort');
const arrayGenerator = require('./../lib/arrayGenerator');
const unsorted = arrayGenerator(10);

describe ('bubblesort', function() {

  it('should be a function', function() {
    assert.isFunction(bubbleSort);
  });

  it('should return an array', function() {
    let sortedArray = bubbleSort(unsorted);
    
    assert.equal(sortedArray.length, unsorted.length);
  });


});