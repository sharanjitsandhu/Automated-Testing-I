// const math = require("./math.js");
const { add, multiply } = require("./math.js");

// SUT: System Under Test
// test suite > test cases > assertions > matchers

describe("math.js", () => {
  describe("add()", () => {
    // a test case
    test("add two numbers correctly", () => {
      expect(add(2, 2)).toBe(4);
      expect(add(4, 2)).toBe(6);
      expect(add(-2, -2)).toBe(-4);
    });
  });

  describe("multiply()", () => {
    test("multiply two numbers", () => {
      expect(multiply(2, 6)).toBe(12);
    });

    it("should return null when arguments are not numbers", () => {
      expect(multiply()).toBeNull();
      expect(multiply(1)).toBeNull();
      expect(multiply(null, 1)).toBeNull();
      expect(multiply(undefined, 1)).toBeNull();
      expect(multiply("unknown", 1)).toBeNull();
      expect(multiply([], "1")).toBeNull();
      expect(multiply({}, "1")).toBeNull();
      expect(multiply(NaN, "1")).toBeNull();
    });
  });
});

// -----OR---- //

/**
// a test case
test("add two numbers", () => {
  // STEP I: Arrange (set up)
  const expected = 4;

  // STEP II: Act(run SUT)
  const actual = math.add(2, 2);

  // STEP III: Assert
  expect(actual).toBe(expected); // assertion
  // using the .toBe() matcher
});
*/
