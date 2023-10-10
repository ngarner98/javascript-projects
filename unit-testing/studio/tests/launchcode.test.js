// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test("check organization", () => {
    expect(launchcode.organization).toBe("nonprofit")
  });
  test("check executiveDirector", () => {
    expect(launchcode.executiveDirector).toBe("Jeff")
  });
  test("check percentageCoolEmployees", () => {
    expect(launchcode.percentageCoolEmployees).toBe(100)
  });
  test("check programsOffered", () => {
    expect(launchcode.programsOffered).toContain("Web Development")
    expect(launchcode.programsOffered).toContain("Data Analysis")
    expect(launchcode.programsOffered).toContain("Liftoff")
    expect(launchcode.programsOffered).toHaveLength(3)
  });
  // test("check launchOutput output",() => {
  //   expect(launchOutput()).toBeInstanceOf(String)
  // })
});

describe("test launchcode() method", function(){

  test("only divisible by 2",() => {
    expect(launchcode.launchOutput(2)).toBe("Launch!")
  });

  test("only divisible by 3",() => {
    expect(launchcode.launchOutput(3)).toBe("Code!")
  });

  test("only divisible by 5",() => {
    expect(launchcode.launchOutput(5)).toBe("Rocks!")
  });

  test("if divisible by 2 and 3",() => {
    expect(launchcode.launchOutput(6)).toBe("LaunchCode!")
  });

  test("if divisible by 3 and 5",() => {
    expect(launchcode.launchOutput(15)).toBe("Code Rocks!")
  });

  test("if divisible by 2 and 5",() => {
    expect(launchcode.launchOutput(10)).toBe('Launch Rocks! (CRASH!!!!)')
  });

  test("if divisible by 2, 3, and 5",() => {
    expect(launchcode.launchOutput(30)).toBe("LaunchCode Rocks!")
  });

  test("NOT divisible by 2, 3, and 5",() => {
    expect(launchcode.launchOutput(31)).toBe("Rutabagas! That doesn't work.")
  });

});