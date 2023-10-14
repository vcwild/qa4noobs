# User Acceptance Testing (UAT)

User Acceptance Testing (UAT), often simply called acceptance testing, is a type of testing applied by the end user or the client to verify and accept the system before progressing the application to the production environment.

User Acceptance Testing is performed at the end of the testing phase, after functional, integration, and system testing.

## Purpose of UAT

The primary purpose of UAT is to validate the flow from start to finish.

It does not focus on cosmetic errors, typos, or system testing, and is conducted in a separate test environment with a setup similar to the production environment.

**It is similar to black-box testing where two or more end-users are involved**.

## Why is UAT Necessary?

The need for this test arises once the software has passed integration, system, and unit testing, as developers might have built the software based on documented business rules under their own understanding, **leaving a chance that any further necessary changes during this phase might not have been efficiently communicated to them**.

Therefore, to verify if the final product is acceptable to the customer/user, this test becomes necessary.

### Prerequisites for UAT

- Acceptance criteria must be available.
- Application code must be completely developed.
- Unit, integration, and system testing must have been completed.
- No major issues in integration testing.
- Only cosmetic errors are acceptable before UAT.
- Regression testing must have been completed without major issues.
- All reported bugs must have been fixed and retested before UAT.
- Traceability matrix for all testing must be complete.
- The UAT environment must be ready.
- Testing Team must give the go-ahead for UAT.

## How to Perform UAT

UAT is done by the target audience of the system or software.

It is usually done at the client's location, which is commonly known as **Beta Testing**.

Once the entry criteria for UAT are satisfied, the following tasks need to be performed by the testers:

1. Analysis of Business Rules.
2. Creation of UAT Test Plan.
3. Creation of UAT Test Cases.
4. Preparation of Test Data (as it would be in Production).
5. Execution of Test Cases.
6. Cataloging the results.
7. Confirming acceptance criteria.

### 1. Analysis of Acceptance Rules

One of the most crucial activities in UAT is to identify and develop test scenarios. These scenarios are derived from the following documents:

- Project Plan
- Use Cases
- Process Flow Diagrams
- Necessary Business Documentation
- System Requirements Specifications

### 2. Creation of UAT Test Plan

The test plan defines the strategy that will be applied to verify and ensure that the application meets the acceptance conditions. It documents entry and exit criteria for UAT, the approach for scenarios and test cases, as well as the testing timeline.

### 3. Identification of Test Cases

Identification of scenarios will respect the business process and create clear test cases. The cases should sufficiently cover most of the UAT scenarios. Business use cases are inputs for creating test cases.

### 4. Preparation of Test Data

Using real-time data for UAT is recommended. The data should be scrambled for security and privacy reasons. Testers should be familiar with the database flow.

### 5. Execute and Document Results

Execute the tests and report any bugs, retest the bugs once they are fixed.

### 6. Confirm Business Rules

Business Analysts or UAT Testers need to provide a statement after testing. With this confirmation, the product is ready to proceed to Production. Deliverables for UAT are the Test Plan, UAT scenarios and test cases, results, and defect log.

## UAT Exit Criteria

Before proceeding to the production environment, the following must be considered:

- No critical defects without fixes.
- Business processes function satisfactorily.
- Meeting for positive UAT declaration with stakeholders.

## Best Practices

- Prepare the UAT plan early in the project life cycle.
- Prepare the checklist before UAT starts.
- Conduct pre-UAT sessions during the system testing phase itself.
- Clearly define UAT expectations and scope.
- Test the business flow from start to end and avoid system tests.
- Test the system or application with real-life applicable scenarios and data.
- Think like a user unfamiliar with the system.
- Perform Usability testing.
- Conduct feedback sessions and meetings before proceeding to Production.
