const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const insertionSort = require('./../lib/insertionsort');
const arrayGenerator = require('./../lib/arrayGenerator');
const unsorted = arrayGenerator(15000);

chai.use(require("chai-sorted"));

describe ('insertion sort', function() {

  it('should be a function', function() {
    assert.isFunction(insertionSort);
  });

  it('should return an array', function() {
    let sortedArray = insertionSort(unsorted);

    assert.equal(sortedArray.length, unsorted.length);
  });

  it('should sort the array', function() {
    let sortedByInsertionSortArray = insertionSort(unsorted);

    expect(sortedByInsertionSortArray).to.be.sorted();
  });

  it('should sort letters', function() {
    let letters = ['b', 'z', 'c', 'g', 'h', 'n', 'r', 'e'];
    let sortedByInstertionSortArray = insertionSort(letters);

    expect(sortedByInstertionSortArray).to.be.sorted();
  });
  
});