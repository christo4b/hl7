# hl7

## Installation
This repo uses `yarn` as a package manager. [Yarn can be installed using homebrew.](https://yarnpkg.com/en/docs/install)

`yarn install` is used to install all dependencies on a project.

## Features and Testing
Use the command `npm test` to run the test suite. You will be able to see a few HL7 strings produced from within the test suite.

I used TDD using [Mocha](https://mochajs.org/) to develop the initial back-end for the application.

This repo is using [StandardJS](http://standardjs.com/awesome.html) as a linter.

Upon every filechange, the test suite is run and the code is linted automatically using [grunt](http://gruntjs.com/)

## Dependencies
You must have `node`, `yarn`, and `grunt` installed on your computer in order to run this locally.

To see the program in action, use the `grunt` command in your terminal to set up the live dev environment. Modify the `class.js` file to see the automatic test and linting integration.

## To-do
- [ ] Create front-end form 
- [ ] Add validation functions for some fields (length, character type)
- [ ] Validate date format used (should we use a date selection tool in the UI?)
- [ ] Sanitize inputs
- [ ] Function to concat sub-sections (first name with last name, etc)

## Edge Cases:
- People named `undefined`, `null`, `NaN`, etc.
- People with non alpha characters in their names

## Other Considerations
This repository only formats data into the PID and PV1 sections of HL7 strings. This program does not store data. 

The patient name segment only has fields for first and last name. Normally this segment follows the [XPN - Extended Patient Name](http://hl7-definition.caristix.com:9010/HL7%20v2.3.1/segment/Default.aspx?version=HL7%20v2.3.1&dataType=XPN) structure which has up to 8 fields. I used only first and last name for simplicity.