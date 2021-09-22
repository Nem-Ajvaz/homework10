const Engineer = require("../src/newEngineer");

test("Setting gitHub value", () => {
  const github = "GitHubUser";
  const newEngineer = new Engineer(
    33,
    "Lary Bird",
    "birdman@gmail.com",
    github
  );
  expect(newEngineer.github).toEqual(github);
});

test("Retrieving github value with getGithub()", () => {
  githubUserName = "_birdman33";
  const newEngineer = new Engineer(
    33,
    "birdman@gmail.com",
    "Lary Bird",
    githubUserName
  );
  const engineerGithub = newEngineer.getGithub();
  const gitHubURL = `https://github.com/${githubUserName}`;
  expect(engineerGithub).toEqual(gitHubURL);
});

test("getRole() Method", () => {
  const newEngineer = new Engineer(
    33,
    "birdman@gmail.com",
    "Lary Bird",
    "Indiana State"
  );
  const engineerRole = newEngineer.getRole();
  expect(engineerRole).toEqual(newEngineer);
});
