const Intern = require("../src/NewIntern");

test("Setting school value", () => {
  const school = "Indiana State";
  const newIntern = new Intern(33, "Lary Bird", "birdman@gmail.com", school);
  expect(newIntern.school).toEqual(school);
});

test("Retrieving school value with getSchool()", () => {
  const school = "Indiana State";
  const newIntern = new Intern(33, "Lary Bird", "birdman@gmail.com", school);
  expect(newIntern.getSchool()).toEqual(school);
});

test("getRole() Method", () => {
  const newIntern = new Intern(
    33,
    "birdman@gmail.com",
    "Lary Bird",
    "Indiana State"
  );
  const internRole = newIntern.getRole();
  expect(internRole).toEqual(newIntern);
});
