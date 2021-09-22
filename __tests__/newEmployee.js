const Employee = require("../src/newEmployee");

test("create employee", () => {
  const newEmployee = new Employee();
  expect(typeof newEmployee).toBe("object");
});
