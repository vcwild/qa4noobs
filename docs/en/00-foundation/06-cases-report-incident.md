# Test Cases, Incident Reports, and Priorities

When conducting tests, it's necessary to write test cases for organized and standardized testing. Incident reports should be documented to fix issues and ensure software quality. Additionally, prioritizing incidents is essential to fix them according to their importance.

## How to Write Test Cases from a User Story

- **What Are User Stories**

An informal and general explanation of a software feature written from the perspective of the end user. Its purpose is to articulate how a software feature can deliver value to the customer. They are not system requirements but are key components in development that emphasize end users, using non-technical language to provide context to the development team, instructing them on what they are building and what value it will generate for the user.

They enable a user-centered structure, promoting collaboration, creativity, and product quality. They articulate how a single task can offer specific value to the customer.

They are written in a few sentences with simple language that outlines the desired result. Requirements are added later once the team agrees on the user stories.

### Example of a User Story

**As a** customer
**I want** various payment methods to be available
**So that** I can pay for my order.

## Specification of Test Cases

How is a test case written?

- **Title:** It should be concise, simple, and self-explanatory, providing information so the analyst knows the validation the test aims for (Validate User Registration, Order Placement, etc.).
- **Detailed Objective:** Describe what will be executed, providing an overview of the test to be performed. For example, "Check if file upload with allowed extensions is possible," "Verify if the purchase order is sent with information on asset, quantity, price, etc."
- **Preconditions Necessary for Execution:** Prevents necessary information from being missing, such as not specifying that the user must be registered to perform the test. These are fundamental elements for the test to be executed correctly, such as the need for the user to have registered a note previously to test the query. The absence of preconditions will result in a flawed and inefficient test.
- **Defined Steps:** Describe all actions the analyst must follow during execution until reaching the expected result. "Access X functionality," "Click on Y button," "Fill out the presented form," "Check if a blank form is displayed."
- **Expected Results:** Describes the expected system behavior after executing the steps. "Valid," "Displays," "Recovers," "Returns." It should be direct and clear to avoid false positives. "System displays an editing screen with filled fields," "The order is sent and results in the informed price," "Registration is saved in the database."

The case should be self-sufficient, including all necessary information for execution within its body. It should be concise, optimizing execution time, and should have as few steps as possible, facilitating the understanding of the required stages.

It's also necessary to include both valid and unexpected inputs, as well as valid and expected inputs.

## Bug Classification: Severity and Priority

- **Severity:** Defines the degree or intensity of a defect concerning its impact on the software and its operation.
  - **S1 - Critical/Showstopper:** Testing blockage or functionality that causes the application to crash or affects major use cases of key functionalities, security issues, severe data loss. Blockages that prevent testing other functions.
  - **S2 - Major:** Problems related to unexpected information, unwanted defects, unusual input that causes irreversible effects, etc. Navigation is possible but generates significant errors in function.
  - **S3 - Moderate:** Functionality does not meet certain acceptance criteria, such as error and success messages not displayed.
  - **S4 - Minor:** Has little impact, interface errors, typos, misordered columns, design flaws.

- **Priority:** Bugs viewed from a business perspective, indicating which ones should be fixed first based on demand and current context.
  - **P1 - Critical:** Must be fixed immediately. Severity 1, performance errors, graphical interface affecting the user.
  - **P2 - High:** Functionality is not usable as it should be due to code errors.
  - **P3 - Medium:** Problems that can be evaluated by the developer and the tester for a later cycle depending on available resources.
  - **P4 - Low:** Text errors, minor user experience and interface improvements.
