# Regression Testing

Regression testing is a type of testing used to confirm that recent changes in the code have not adversely affected existing features.

Regression testing is a black-box testing technique, where test cases are re-executed to verify that previous functionalities of the application are working as intended and that new additions have not introduced any bugs.

It can be applied to a new build when there is a significant change in the original functionality, as it ensures that the code still works once changes occur. Regression means "re-testing" these parts of the application that remain unchanged.

Regression Testing is also known as Verification Method; test cases are often automated since they need to be executed repeatedly during the development process.

## When Should We Apply Regression Testing?

Whenever the code is modified, such as in the following scenarios:

1. **New Feature Added to the Application**
   Example: A website has a login feature that allows login via Email. Now providing the option to log in with Facebook.

2. **When There is a Requirement Change**
   Example:
   "Remember Password" function removed from the login page.

3. **When a Defect is Fixed**
   Example:
   A bug was found and reported, once the development team has fixed it, the QA team will retest it to ensure the issue has been resolved. Simultaneously testing other related functionalities.

4. **When There is a Fix for Performance Issues**
   Example: the loading time of a home page was 5 seconds, and an update reduces it to 2 seconds.

5. **When There is a Change in Environment**
   Example: the project moves from the Testing environment to the Production environment.

## How to Perform Regression Testing?

The need for regression testing arises when software maintenance includes enhancements, fixes, optimizations, or removal of existing features.

These modifications can affect the system's functionality, necessitating regression.

Testing can be applied using the following techniques:

### 1. "Re-Test" Everything

Retesting is one of the approaches used for regression testing. Here, all test cases need to be re-executed.

Here, "re-test" is defined as when a test fails, and we determine the cause to be a software failure.

The failure is reported, and once fixed in a new version of the software, re-execution of the test is necessary to confirm its correction.

This process is known as "retesting" or confirmation testing and consumes both time and financial resources.

### 2. Selective Regression Testing

In this approach, specific test cases are selected instead of running the entire test suite.

Selection is divided into two cases:

- **Reusable:**
      That **can** be used in later regression tests.

- **Obsolete:**
      That **cannot** be used in later regression tests.

## Regression Testing Tools

If the software undergoes constant changes, regression tests will become increasingly costly, as will the time invested in this process when done manually.

In such situations, automation is the best choice.

- **[Selenium](https://www.seleniumhq.org/):** an open-source tool used for automation testing in a web application. For browser-based regression tests, Selenium is utilized as well as for UI-level regressions.

## What are Regression Testing and Configuration Management?

Configuration Management in regression testing becomes imperative in Agile Methodology environments where code is continually changed.

To ensure valid regression testing, we must follow these steps:

- Changes in the code are not allowed during the regression testing phase.
- A regression test case should consist of unchanged development changes.
- The database used for regression must be isolated, and changes are not allowed.

## What Are the Differences Between Re-Testing and Regression Testing?

- **Re-Testing:**
  - Means testing the functionality again to ensure the code correction. If not fixed, defects must be re-opened; if fixed, the defect is closed.
  - Re-testing is applied to check if failed test cases in the final run obtain success after the defects have been fixed.
  - Re-tests work to detect fixes.
  - Defect verification is part of the process.
  - Priority is higher than regression tests, therefore, performed earlier.
  - It is a planned test.
  - Cannot be automated.

- **Regression Testing:**
  - Means testing the application when it undergoes a change in the code to ensure the new code has not affected other existing parts of the software.
  - Does not include defect verification.
  - Based on project type and resource availability, regression testing can run parallel to re-testing.
  - It is a generic test.
  - Can be automated.
  - Checks for unintended side effects.
  - Occurs when modifications or changes become mandatory for the project.
