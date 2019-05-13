it("checks equality", () => {
  expect({ one: 1 }).toEqual({ one: 1 });
  expect([1, 2]).toEqual([1, 2]);
  expect([1, 2]).not.toEqual([1, 2, 3]);
  //   expect([1, 2]).not.toEqual([1, 2]); // this will fail
  //   expect([1, 2]).toBe([1, 2]); // this will fail
});

// -----  Matchers----- //

/** 

.not
.toBeCloseTo
.toMatch
.toHaveLength
.arrayContaining
.stringContaining
.toContain

*/

it("repairs to full durability", () => {
  const item = {
    name: "Lambda Shield",
    durability: 99,
    displayName: "[+3] Lambda Shield"
  };
  const expected = {
    name: "Lambda Shield",
    durability: 100,
    displayName: "[+3] Lambda Shield"
  };
  //   expect(enhancer.repair(item).toEqual(expected));
  //   expect(repair(item).durability).toBe(100);
  expect(repair({ durability: 50 }).durability).toBe(100);
});
