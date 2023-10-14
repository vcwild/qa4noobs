# Sanity Testing

Sanity testing is a type of testing performed after receiving a software build with minor changes in the code or functionality, **to ensure that bugs have been fixed and no new issues have been introduced.**

The goal is to ensure that the proposed functionality works rudimentarily as expected.

If it fails, the build is rejected to avoid the expenditure of time and resources involved in more rigorous testing.

Sanity testing is a subset of regression testing and is applied to ensure that changes in the code work appropriately. It is a step to check whether the build can proceed to further testing or not.

The focus of the team during sanity testing is to validate the application's functionality, not detailed testing.

It is usually applied to a build where the production implementation is needed immediately, such as a critical bug fix.

## Functionality of Sanity Testing

The main objective is to determine that the changes or proposed functionality work as expected.

If quality testing fails, the product is rejected by the QA team to save time and money.

It is only applied after the product has passed the Smoke Test and the QA team has accepted it for further testing.

## Examples of Sanity Testing

In an e-commerce project, the main modules are the login page, the home page, and the user profile page.

There is a defect in the login page where the password field accepts fewer than 4 alphanumeric characters, while the business rules state that this field should not be less than eight characters. Therefore, the defect is reported by QA for the developer to fix.

The developer then fixes the issue and sends it back to the testing team for approval.

QA checks whether the changes made are working or not.

It is also determined whether this has an impact on other related functionalities. Assuming there is now a feature to update the password on the user profile screen, as part of the sanity test, the login page is also validated, as well as the profile page to ensure both work well with the addition of the new function.

### Aspects of Sanity Testing

Below are some aspects to consider when conducting sanity testing:

1. Subset of Regression Testing: focuses on smaller sections of the application.
2. May not have a script (occasionally).
3. Not documented (occasionally).
4. Specific and In-Depth: limited functionalities are thoroughly checked.
5. Performed by testers;

### Advantages of Sanity Testing

- Helps quickly identify defects in the core functionality.
- If defects are found during sanity testing, the project is rejected, saving time in running regression tests.
- The testing technique is not as costly compared to other modalities.
- Helps identify missing necessary objects.
- Used to validate a small functionality of the application, whether it's working or not after a minor change.
- Assists in scenarios where time to test the product, or perform the test, is limited.

### Disadvantages of Sanity Testing

- Focuses only on application functions and commands.
- Cannot cover all test cases and scenarios.
- Covers only a few functionalities of the application. Problems in unchecked functionalities cannot be discovered.
- Sanity testing usually does not have a script. Therefore, future references are not available.
- Does not cover the level of design structure, and thus, it will be difficult for the development team to identify and fix issues.
