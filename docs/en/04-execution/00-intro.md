# Test Execution

To perform tests, it's essential to have an understanding of how the software functions. This may require the software to be in an advanced stage of development or have very consistent requirements.

## Types of Test Execution

There are two ways in which tests can be executed: manually or automatically. Manual execution is more common because it allows tests to be performed quickly and easily. However, it's more prone to errors since the test can be executed incorrectly. On the other hand, automated execution is slower as it requires the creation of a script responsible for running the test.

Due to these differences, manual execution is more recommended for simple tests, while automated execution is more recommended for complex tests.

The complexity of tests is relative to their scope; the larger the scope of the test, the more complex it becomes. For example, a test that checks if a button is working correctly is a simple test because it has a small scope. On the other hand, a test that verifies if an entire system is functioning correctly is a complex test because it has a large scope.

Moreover, the complexity of a test can also be measured by the number of steps required to execute it. For example, a test with only one step is a simple test, while a test with multiple steps is a complex test.

## Test Cases and Scenarios

Test cases consist of a group of actions performed to verify a feature or functionality of a software application. A test case contains test steps, test data, preconditions, and postconditions developed for a specific test scenario to validate any necessary requirements.

The test case includes specific variables and conditions through which a test engineer can compare the expected results with the actual results to determine if a software product is working in accordance with the specified business rules.

## Test Scenario vs. Test Case

- Test Scenario:
  - A scenario contains high-level documentation describing a feature to be tested from start to finish.
  - It focuses more on "what" to test rather than "how" to test.
  - Scenarios have a narrative, so there is always a chance of ambiguity in testing.
  - Test scenarios are derived from artifacts such as BRS, SRS, etc.
  - Assists in an agile way of testing the feature from start to finish.
  - Test scenarios are high-level actions.
  - Comparatively, less time and resources are required for creating and testing using scenarios.

- Test Case:
  - Contains defined steps, required data, expected results for testing all features in an application.
  - A complete emphasis on "what to test" **and** "how to test."
  - Test cases have defined steps, prerequisites, expected results, etc. Therefore, there is no ambiguity in the process.
  - Test cases are mostly derived from test scenarios. Multiple test cases can be derived from a single scenario.
  - Assists in the exhaustive testing of an application.
  - Test cases are low-level actions.
  - More resources are needed for documenting and executing test cases.

## Standard Test Case Format

- ID: TU01
  - Test Case Description: Verify login with valid information.
  - Test Steps:
      1. Access the website.
      2. Enter the user ID.
      3. Enter the password.
      4. Click on Submit.
  - Test Data:
      1. User ID: guru99.
      2. Password: pass99.
  - Expected Results: User should log in to the application.
  - Actual Results: As expected.
- ID: TU02
  - Test Case Description: Verify login with invalid information.
  - Test Steps:
    1. Go to the website.
    2. Enter the user ID.
    3. Enter the password.
    4. Click on Submit.
  - Test Data:
    1. User ID: guru99.
    2. Password: glass99.
  - Expected Results: User should not log in to the application.
  - Actual Results: As expected.

## How to Write Manual Test Cases

Let's create a test case for the scenario: "Check Login Functionality"

![Login Screen](https://www.guru99.com/images/1/test-cases_01.png)

Step 1) A simple test case to explain the scenario would be:

- Test Case #1
- Case Description:
  Verify the response when valid email and password information is entered.

Step 2) Testing the Information

In order to execute test cases, the test information needs to be added as follows:

- Test Case #1
- Case Description:
  Verify the response when valid email and password information is entered.
- Test Data:
  Email: guru99@email.com
  Password: lNf9^Oti7^2h

Identifying test data can take time and sometimes requires the creation of new data, which is why it needs to be documented.

Step 3) Performing Actions

To execute a test case, the tester must develop a series of actions in the UAT, documented as follows:

- Test Case #1
- Case Description:
  Verify the response when valid email and password information is entered.
- Test Steps:
  1. Enter the email address.
  2. Enter the password.
  3. Click on Sign In.
- Test Data:
  Email: guru99@email.com;
  Password: lNf9^Oti7^2h;

Often, test steps are not as simple, requiring detailed documentation. Additionally, the test case author may leave the organization, go on vacation, fall ill, or encounter other situations. A new hire may be assigned to execute the test case, and documented steps will facilitate their role and enable reviews by other stakeholders.

Step 4) Verify the Behavior of the AUT (Application Under Test)

The purpose of test cases in software testing is to verify the behavior of the UAT by comparing it to the expected result. It should be documented as follows:

- Test Case #1
- Case Description: Verify the response when valid email and password information is entered.
- Test Steps:
  1. Enter the email address.
  2. Enter the password.
  3. Click on Sign In.
- Test Data:
  Email: guru99@email.com;
  Password: lNf9^Oti7^2h;
- Expected Results:
  Successful login.

During the test execution period, the professional will compare expected results with actual results, assigning a status of Pass or Fail.

- Test Case #1
- Case Description: Verify the response when valid email and password information is entered.
- Test Steps:
  1. Enter the email address.
  2. Enter the password.
  3. Click on Sign In.
- Test Data:
  Email: guru99@email.com;
  Password: lNf9^Oti7^2h;
- Expected Results: Successful login.
- Success/Failure: Success.

Step 5) The test case may have a precondition specifying elements required before the start of testing.

For our test case, a precondition would be to have a browser installed to gain access to the validation website. A test case may also include postconditions that specify any actions that apply after the completion of the test.

In this example, the postcondition would be that the login date and time are documented in the database.

## Best Practices for Writing Good Test Cases

Consider the following practices:

### 1. Test Cases Should Be Simple and Transparent

Create test cases that are as simple as possible. They should be clear and concise since the author of the case may not be the one executing it.

Use assertive language like "navigate to the home page," "input data," "click on X." This makes understanding easy and execution faster.

### 2. Create Test Cases with the End User in Mind

The primary goal of any software project is to create test cases that meet the client's business rules and are easy to operate. A tester should create test cases with the end user in mind.

### 3. Avoid Test Case Repetition

Do not repeat test cases. If one test case is needed for the execution of another, refer to it by its ID in the prerequisites column.

### 4. Do Not Assume

Do not assume application functionalities and features while preparing a test case. Stick to the specification documents.

### 5. Ensure 100% Coverage

Ensure that test cases cover all software requirements mentioned in the specification documentation. Use traceability matrices to ensure that no function/condition is overlooked.

### 6. Test Cases Should Be Identifiable

Name test case IDs in a way that they are easily identifiable when searching for defects or identifying a software requirement in the advanced stages.

### 7. Implement Testing Techniques

It is not possible to test all possible conditions in a software application. Testing techniques help select test cases with the highest likelihood of finding defects.

- Boundary Value Analysis (BVA): This technique tests the boundaries of a specific range of values, as the name suggests.
- Equivalence Partitioning (EP): This technique divides the range into equal parts/groups that tend to behave the same way.
- State Transition Technique: This method is used when the behavior of software changes from one state to another following a particular action.
- Error Guessing Technique: This technique guesses/anticipates errors that may arise during manual test execution. It is not a formal method and relies on the tester's experience with the application.

### 8. Self-Cleaning

Test cases should return the Testing Environment to its pre-test state, without rendering the test environment unusable. This is especially relevant for configuration tests.

### 9. Repeatable and Autonomous

Test Cases should generate the same results every time, regardless of who performs the test.

### 10. Peer Review

After creating test cases, have them reviewed by your colleagues. Your peers may find defects in the case design.

*Include the following information when developing a test case*:

- The description of the requirement being tested.
- Explanation of how the system will be validated.
- Test setup, such as a version of the application under verification, software, data files, operating system, security access, logical or physical data, time of day, prerequisites like other tests, and any other setup information relevant to the requirements being tested.
- Inputs, outputs, actions, and their expected results.
- Any evidence or attachments.
- Use active language with proper capitalization.
- Test cases should not have more than 15 steps.
- An automated test script is commented with inputs, purpose, and expected results.
- The setup provides an alternative for required pre-tests.
- If there are other tests, it should be ordered correctly in the business scenario.

## Test Case Management Tools

Test case management tools are automation elements that help coordinate and maintain test cases. The main functionalities of such a tool are:

1. Document Test Cases: With tools, test case creation can be accelerated using templates.
2. Execute Test Cases and Document Results: Test cases can be executed through the tools, and results can be collected for easy record-keeping.
3. Automate Defect Tracking: Tests that fail are automatically linked to the bug tracker, which can then be assigned to developers via email notification.
4. Traceability: Requirements, test cases, and their executions are linked through the tools, and each test case can be traced back to others to validate coverage.
5. Protect Test Cases: Test cases should be reusable and protected from loss or corruption due to poor version control.

These tools often offer features such as:

- Naming and numbering conventions
- Version control
- Read-only storage
- Controlled access
- External backup

*Popular test case management tools include*:

- [Quality Center](https://www.guru99.com/hp-alm-free-tutorial.html)
- [Jira](https://www.guru99.com/jira-tutorial-a-complete-guide-for-beginners.html)
