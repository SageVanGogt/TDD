const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const mergeSort = require('./../lib/mergesort');
const arrayGenerator = require('./../lib/arrayGenerator');
const unsorted = arrayGenerator(15000);
// const unsorted = [10, 9, 8, 5, 1, 4, 2];

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


});