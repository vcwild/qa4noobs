# Automated Testing

Automated testing is the application of software tools to automate a manual process of reviewing and validating software products. Modern Agile and DevOps projects include this technique.

This approach places ownership responsibilities in the hands of the engineering team. Test plans are developed in parallel with the standard development script and are executed automatically by continuous integration tools. This promotes an efficient QA team and allows the development team to focus on more critical features.

Continuous Delivery (CD) refers to delivering new code releases to customers as quickly as possible, and test automation plays a critical role in achieving this goal. There is no way to automate user delivery if there is a manual and time-consuming process within the delivery process.

Continuous delivery is part of a larger deployment pipeline and is both a successor and dependent on continuous integration (CI). CI is entirely responsible for running automated tests on any code changes, ensuring that these changes do not break established features or introduce new bugs.

Continuous deployment comes into play once the continuous integration step passes the automated test plan.

This relationship between automated testing, CI, and CD yields many benefits for a highly efficient team. Automation ensures quality throughout development by checking that new commits do not introduce bugs, making the software ready for deployment at any time.

![Automated Testing/CI/CD Pyramid](https://wac-cdn.atlassian.com/dam/jcr:c4c69694-506f-4d68-9563-c1bc5770e784/testing-stack@4x.png?cdnVersion=631)

## *What types of tests should be automated first?*

Consider the following priority order:

### 1. End-to-End (E2E) Tests

Arguably one of the most valuable tests to implement, this technique simulates a user-level experience throughout the entire software product. End-to-end test plans typically cover user-level stories such as "the user can log in," "the user can make a deposit," "the user can change email settings."

Implementing these tests is highly valuable as they provide assurance that real users will have a smooth, bug-free experience even when new commits are applied.

### 2. Unit Tests

As the name suggests, unit tests cover individual parts of the code, best measured in function definitions.

A unit test will validate an individual function by checking that the expected input to a function matches the expected output. Code that involves sensitive calculations (such as finances, healthcare, or aerospace) is best covered by this testing technique.

Unit tests are characterized by their low cost and implementation speed, providing a high return on investment.

### 3. Integration Tests

Often, a unit of code will make an external call to a third-party service, but the primary codebase under test will not have access to the code of this third-party utility.

Integration tests will handle the mocking of these third-party dependencies to verify that the code that interfaces behaves as expected.

This technique is similar to unit testing in how they are written and their tools. They are a cheaper alternative to end-to-end tests, but the return on investment is debatable when a combination of unit and end-to-end tests is already established.

### 4. Performance Tests

When used in the context of software development, 'performance' refers to the speed and responsiveness with which a software project responds. Some examples of performance metrics include:

- Page load time
- Initial rendering time
- Search result response time

These types of tests create metrics and assurances for these cases.

In their automated version, performance tests will run test cases through the metrics and alert the team if regressions or speed losses occur.

## What types of tests should be executed manually?

It is debatable whether all tests that *can* be automated *should* be. Automation represents a significant gain in productivity and cost of labor hours, but there are situations in which the Return on Investment (ROI) for developing a battery of automated tests is lower compared to manual test execution.

### 1. Exploratory Testing

Automated tests are, by definition, scripted and follow a sequence of steps to validate a behavior. Exploratory testing is more random and applies non-scripted sequences to find bugs or unexpected behaviors.

While there are tools to establish a battery of exploratory tests, they have not been refined enough and have not been widely adopted by companies. It can be much more efficient to assign a manual tester and use human creativity to explore how to break a software product.

### 2. Visual Regression Testing

Visual regression occurs when a visual design flaw is introduced in the product's UI, which may consist of improperly positioned elements, wrong fonts or colors, and more.

Just as in exploratory testing, there are tools for developing automated tests to detect these regressions. The tools take screenshots from different product states, apply Optical Character Recognition (OCR) to compare them to expected results. These tests have a high development cost, and the tools have not been widely adopted, making the human and manual option more efficient in some cases.

### 3. Building Automation Frameworks for DevOps Teams

There is no one-size-fits-all solution for test automation. When developing an automation plan, some key points should be considered:

- Release Frequency:
  Software products released at fixed intervals, such as monthly or weekly, may be better suited to manual testing. Products with faster releases greatly benefit from automated tests, as CI and CD depend on automated testing.

- Available Tools and Ecosystem:
  Each programming language has its ecosystem of complementary tools and utilities. Each type of automated testing standard has its own set of tools that may or may not be available in certain language ecosystems. Successfully implementing an automated testing standard will require an intersection of language and tooling support.

- Product Market Fit and Codebase Maturity:
  If the team is building a new product that has not been validated by a target audience and business model, it may not make sense to invest in automated testing. Considering the team works at high speed, it can be frustratingly expensive to update and maintain automated tests when the code changes dramatically and quickly.

## Automation Pyramid

This framework can help both developers and QA teams create high-quality software, reduce the time developers spend figuring out if an introduced change breaks the code, and contribute to a more reliable battery of tests.

Essentially, the testing pyramid, also known as the automation pyramid, establishes the types of tests to be included in an automated battery and defines the sequence and frequency of these tests.

The main goal is to provide immediate feedback, ensuring that changes in the code do not negatively affect existing features.

### *The Different Levels of the Pyramid*

This framework operates on three levels:

![Levels Structure](https://browserstack.wpenginepowered.com/wp-content/uploads/2020/01/test-automation-pyramid-640x586.jpg)

#### *Level 1) Unit Tests*

Unit tests form the base of the pyramid, validating individual components and functionalities to ensure they work correctly under isolated conditions. Therefore, it's essential to run various scenarios in unit tests.

- As the most significant subgroup, the unit test suite should be written to execute as quickly as possible.
- Remember that the number of unit tests will increase as new features are added.
- This suite should be run whenever a new feature is implemented.
- Consequently, developers receive immediate feedback on whether individual features work in their current form.

An efficient, fast-running unit test suite encourages developers to apply it frequently.

The application of Test-Driven Development (TDD) contributes to creating a robust suite, as the technique requires writing tests before any code is established, making it more straightforward, transparent, and bug-free.

#### *Level 2) Integration Tests*

While unit tests verify small pieces of code, integration tests should be run to check how different parts of the software interact with each other. Essentially, these are tests that validate how a piece of code interacts with external components, ranging from databases to external services (APIs).

- Integration tests constitute the second layer of the pyramid, meaning they should not be run as frequently as unit tests.
- Fundamentally, they test how a feature communicates with external dependencies.
- Whether it's a database query or a web service call, the software should communicate efficiently and fetch the right information to function as expected.

It's important to note that this technique involves interaction with external services, so its execution will be slower than unit tests. Moreover, they require a pre-production environment to be applied.

#### *Level 3) End-to-End Tests*

The highest level of the pyramid ensures that the entire application works as it should by testing it from start to finish.

- This technique is at the top of the pyramid because it takes longer to run.
- When developing these tests, it's essential to think from a user's perspective.
- How would a user use this application? How can tests be written to replicate these interactions?

They can also be fragile as they need to test various usage scenarios.

Like integration tests, they may require the application to communicate with external elements, which can potentially contribute to bottlenecks in completion.

A helpful tutorial on the strategy behind end-to-end tests can be found [here](https://youtu.be/kh-5UeQVlY0).

### *Why Agile Teams Should Use the Automation Pyramid*

Agile processes prioritize speed and efficiency, elements offered by the pyramid by organizing the testing process in a logical and clear progression, promoting efficient work completion.

Since the structure is designed to run more accessible tests first, testers can better manage their time, achieving better results and improving the work of everyone involved by providing the right priorities to the testing team.

If test scripts are written with a greater focus on the UI, chances are that the core business logic and backend functionality have not been thoroughly verified. This affects product quality and leads to an increase in team workload.

Additionally, the response time of UI tests is high, resulting in lower overall test coverage. By implementing the automation pyramid, these situations are completely addressed.

In test automation, tools and frameworks like Selenium execute scripted tests on software applications or components to ensure they work as expected. Their sole aim is to reduce human effort and error, but for the machine to provide the correct results, it must be appropriately directed.

The automation pyramid seeks to meet this need by organizing and structuring the testing cycle, streamlining the entire process and providing efficient time management, enabling testers to use validated patterns to shape their projects.

## The Backend Testing Process

Commonly developed for database verification, the Back-End test is a process that verifies server parameters for a smooth transition. It is one of the most essential testing activities, occurring in all programs.

Data storage typically occurs in the backend, which is validated by the testing process to eliminate any threats in the database.

### What Is the Importance of Backend Testing?

Different types of databases are available in the market, ranging from SQL, Oracle, DB2, MYSQL, etc. Data organization into specific tables is one of the important factors to consider. It helps provide the correct output on the front end.

Some of the most sensitive problems and complications, such as data corruption and loss, are solved through database testing.

### How Does the Back-End Testing Process Work?

It is not mandatory to view backend testing through user graphical interfaces; therefore, the tests occur only in functionalities and source codes. Browser parameters are commonly checked depending on the program or project.

Back-end testing is usually completed in a few steps, so it's essential to understand the purpose of the process before starting.

The initial steps examine the database and server before progressing to functions; the subsequent steps are built based on specifications and programming.

1. Schema.
2. Database Tables.
3. Columns.
4. Keys and Indexes.
5. Stored Procedures.
6. Triggers.
7. Database Server Validations.
8. Data Duplication Validation.

### When to Apply Backend Testing?

Testers prefer to conduct backend tests in the early stages for various reasons. The technique helps identify some of the basic problems with the database and also resolves server-related issues.

Modern tools easily identify backend issues, saving significant amounts of time without compromising quality.

### Different Types of Backend Testing

There are various approaches to validate the backend, making it necessary to understand the requirements to develop an efficient strategy.

- Functional Testing.
- Non-functional Testing.
- Structural Testing.

## Backend Testing vs. Frontend Testing

- Backend Testing:
  - Focuses on testing business logic and databases.
  - A strong foundation in databases and servers is preferable for the tester.
  - Most tests are performed on the database server.
  - Knowledge of structured query language (SQL) and other scripts is a necessity.
  - Requires database server storage to test servers.
  - Some common test types involved are API testing, SQL testing, etc.

- Frontend Testing:
  - Focuses on the interface and other user-related functionalities.
  - Solid understanding of business requirements and user experience is required.
  - Familiarity with automation frameworks is also imperative.
  - Requires full access to change frontend modules and options.
  - Some common test types involved are Unit Testing, Acceptance Testing, Regression Testing, etc.

## Tools for Backend Testing

- Data Factory.
- Data Generator.
- TurboData.
