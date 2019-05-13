/** module.exports = { add, multiply };

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a * b;
  } else {
    return null;
  }
}
*/

// ----- Another way of exporting functions ---- //

exports.add = (a, b) => {
  return a + b;
};

exports.multiply = (a, b) => {
  if (typeof a === "number" && typeof b === "number") {
    return a * b;
  } else {
    return null;
  }
};
