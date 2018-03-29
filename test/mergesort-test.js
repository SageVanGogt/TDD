const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const mergeSort = require('./../lib/mergesort');
const arrayGenerator = require('./../lib/arrayGenerator');
const unsorted = arrayGenerator(110000);

chai.use(require("chai-sorted"));

describe ('merge sort', function() {

  it('should be a function', function() {
    assert.isFunction(mergeSort);
  });

  it('should return an array', function() {
    let sortedArray = mergeSort(unsorted);

    assert.equal(sortedArray.length, unsorted.length);
  });

  it('should sort the array', function() {
    let sortedByMergeSortArray = mergeSort(unsorted);

    expect(sortedByMergeSortArray).to.be.sorted();
  });

  it('should sort letters', function() {
    let letters = ['b', 'z', 'c', 'g', 'h', 'n', 'r', 'e'];
    let sortedByMergeSortArray = mergeSort(letters);

    expect(sortedByMergeSortArray).to.be.sorted();
  });
  
});