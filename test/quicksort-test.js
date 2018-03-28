const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const quickSort = require('./../lib/mergesort');
const arrayGenerator = require('./../lib/arrayGenerator');
const unsorted = arrayGenerator(110000);

chai.use(require("chai-sorted"));

describe ('quick sort', function() {

  it('should be a function', function() {
    assert.isFunction(quickSort);
  });

  it('should return an array', function() {
    let sortedArray = quickSort(unsorted);

    assert.equal(sortedArray.length, unsorted.length);
  });

  it('should sort the array', function() {
    let sortedByQuickSortArray = quickSort(unsorted);

    expect(sortedByQuickSortArray).to.be.sorted();
  });


});