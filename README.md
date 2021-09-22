# Team Profile Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Video Link

HTML Generation:
https://drive.google.com/file/d/1DTSytNGU_0Xv670reImCxo7DCXo_3g6X/view?usp=sharing

Testing:
https://drive.google.com/file/d/1lsP02LojgDp11smWuQsflA1jyvoI1pyJ/view?usp=sharing

## Description

We need to build a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person

## Table of Contents

- [Team Profile Generator](#team-profile-generator)
  - [Video Link](#video-link)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Questions](#questions)

## User Story

```
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```

GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated


```

## Installation

Clone my repo using the following command `git clone https://github.com/Nem-Ajvaz/Team-Profile-Generator` and then install jest using `npm install jest`

## Usage

Navigate the terminal to index.js in the cloned repo and run `node index.js` to run the program. To run the test run `npm run test`.

## Questions

For any further questions please reach out to my email :Email: nemanja.ajvaz@gmail.com or message me on GitHub:(https://github.com/Nem-Ajvaz)

