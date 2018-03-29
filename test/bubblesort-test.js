const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const bubbleSort = require('./../lib/bubblesort');
const arrayGenerator = require('./../lib/arrayGenerator');
const unsorted = arrayGenerator(15000);

chai.use(require("chai-sorted"));

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

    expect(sortedByBubbleSortArray).to.be.sorted();
  });

  it('should sort letters', function() {
    let letters = ['b', 'z', 'c', 'g', 'h', 'n', 'r', 'e'];
    let sortedByBubbleSortArray = bubbleSort(letters);

    expect(sortedByBubbleSortArray).to.be.sorted();
  });
  
});