# Unit Testing

Unit testing is a testing technique where individual units or components of software are tested.

The purpose is to validate if each unit of the code functions satisfactorily.

It is applied during the development phase (coding phase) of an application by developers. This practice isolates a section of code and checks its integrity, which can be an individual function, method, procedure, module, or object.

## Why Apply Unit Testing?

- Helps catch bugs early in the development cycle, saving costs;
- Assists developers in understanding the basics of code testing and empowers them to make changes quickly;
- Good unit tests serve as project documentation;
- Aids in code reuse. Migrating both your code and your tests to a new project;

## How to Apply Unit Testing

To execute this technique, developers write a section of code to test a specific function in the application, which can also be isolated for more rigorous testing that reveals unnecessary dependencies between the function under test and other units, allowing them to be eliminated.

This type of testing is commonly done automatically, but it can still be performed manually. Neither has a bias, although automation is preferable.

Regarding the automated approach:

- The developer writes a section of code in the application solely to test the function.
- The developer might also isolate the function for more rigorous testing, helping to identify unnecessary dependencies between the code under test and other units in the product.
- A coder generates automation criteria to validate that the code works. During the test case execution, the framework logs all failures, with some tools automatically reporting them and, depending on severity, halting any further tests.
- The unit testing workflow is:
  - Create test cases
  - Review/Corrections
  - Baseline
  - Run the tests.

## Unit Testing Techniques

Mainly categorized into three parts:

- Black Box: user interface testing, with input and output;
- White Box: involves the functional behavior of the code;
- Gray Box: used for running test suites, test methods, test cases, and performing risk analysis;

Code coverage techniques used in unit testing are:

- Statement Coverage
- Decision Coverage
- Branch Coverage
- Condition Coverage
- Finite State Machine Coverage

### Example of Unit Testing: Mock Objects

Unit testing relies on creating mock objects to test sections of code that are not yet part of a complete application. Mocks fill in the missing parts in the program.

For instance, you may have a function that depends on variables or objects that have not been created yet. In unit testing, these will be replaced by mocks created only for the test to be conducted on the specific section.

### Unit Testing Tools

Some of the popular unit testing tools are:

- [Junit](https://www.guru99.com/junit-tutorial.html)
- [NUnit](https://nunit.org/)
- [JMockit](https://jmockit.github.io/index.html)
- [EMMA](http://emma.sourceforge.net/)
- [PHPUnit](https://phpunit.de/)

## Test-Driven Development (TDD) and Unit Testing

Unit testing in TDD involves extensive use of testing frameworks, which are used to create automated cases.

These frameworks are not exclusive to TDD, but they are essential to it due to the following characteristics of the process:

- Tests are written before the code;
- Heavily relies on testing frameworks;
- All classes in the application are tested;
- Quick and easy integration becomes possible;

## Advantages of Unit Testing

1. Developers seeking to learn what functionality is provided from a unit and how to use it can look at unit tests again and gain a basic understanding of the API;
2. Unit Testing allows programmers to refactor the code at a later stage, ensuring that the module still works correctly (Regression Testing). The procedure is to write test cases for all functions and methods to ensure that new changes do not fail, which can be quickly identified and corrected;
3. Due to the modular nature of unit testing, we can test parts of the project without waiting for others to be completed (mocks);

## Disadvantages of Unit Testing

1. Unit tests cannot detect all errors in a program, and it is impossible to evaluate all execution paths even in the most trivial programs;
2. Due to its very nature, this technique focuses on a unit of code, so it cannot detect integration errors or broad-spectrum system failures.

   It is recommended that this testing approach be combined with other techniques.

### Best Practices

Some of the best practices for unit testing are:

- Unit tests should be independent. In case of any improvements or changes in business rules, the tests should remain unchanged;
- Test only one piece of code at a time;
- Follow clear and consistent naming guidelines for test units;
- In case of code changes or any module, ensure there is a corresponding unit test case, and the module passes the tests before altering the implementation;
- Bugs identified in this technique should be fixed before proceeding to other phases of the Development Cycle;
- Adopt a "test while you code" stance. The more code is written without tests, the more paths need to be checked.
