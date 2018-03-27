function arrayGenerator(indexes) {
  let numArray = [];
  for (let i = 0; i < indexes; i++) {
    numArray.push(Math.floor(Math.random() * 1000));
  }
  return numArray
}

module.exports = arrayGenerator;