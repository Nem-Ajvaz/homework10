const Manager = require("../src/newManager");

test("Setting office number value", () => {
  const officeNumber = 33;
  const bossManager = new Manager(
    33,
    "Lary Bird",
    "birdman@gmail.com",
    officeNumber
  );

  expect(bossManager.officeNumber).toEqual(officeNumber);
});

test("getRole() Method", () => {
  const newManager = new Manager(
    33,
    "birdman@gmail.com",
    "Lary Bird",
    "Indiana State"
  );
  const bossManager = newManager.getRole();
  expect(bossManager).toEqual(newManager);
});

test("getOffice() Method", () => {
  const officeNumber = 33;
  const bossManager = new Manager(
    33,
    "birdman@gmail.com",
    "Lary Bird",
    officeNumber
  );
  expect(bossManager.getOffice()).toEqual(officeNumber);
});
