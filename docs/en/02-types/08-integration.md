# Integration Testing

It is a type of testing where software modules are logically integrated and tested as a group.

A typical software project consists of multiple modules, coded by different programmers; the purpose of this level of testing is to expose defects in the interaction between these integrated modules. This technique focuses on validating the data communication between these modules, also known as *I & T (Integration and Testing)*, *String Testing*, and sometimes *Thread Testing*.

## Why Perform Integration Testing

Even though each module is unit-based, defects still exist for various reasons:

- A module is generally designed by an individual developer, who may have a different understanding and logic than other programmers;
- During module development, there is a high chance of changes in business rules from clients. These new requirements might not be thoroughly unit-tested, necessitating integration testing of the system;
- The interface between modules and the database might be erroneous;
- External hardware interfaces, if any, could be erroneous;
- Improper exception handling can cause errors.

## Example of Integration Testing Scenario

Integration testing cases differ from other testing modalities in that they primarily focus on the interfaces and data flow/information between modules.

The focus here is on integration links rather than the unit functions already tested.

### *Integration Testing Cases Samples for the Following Scenario:*

Application has 3 modules

- Login Page;
- Mailbox;
- Delete Emails;

All integrated logically.

Here, we don't concentrate on testing the Login Page since tests for this feature have already been conducted in Unit Testing. Instead, we check its integration with the Mailbox.

Similarly, we check the integration between the Mailbox and the Delete Emails module.

   - Test Cases:
     - Case 1
       - Objective: Verify the interface link between Login and Mailbox;
       - Test Case Description: Enter login credentials and click the Login button;
       - Expected Result: Redirected to Mailbox;
     - Case 2
       - Objective: Check the interface link between Mailbox and Delete Emails;
       - Test Case Description: From Mailbox, select the email and click a delete button;
       - Expected Result: Selected email appears in the deleted/trash folder;

## Types of Integration Testing

Software engineering defines a myriad of strategies for performing integration testing, such as:

- Big Bang Approach
- Incremental Approach: further subdivided into two parts
  - Top-Down Approach
  - Bottom-Up Approach
  - Sandwich Approach (combines the two above)

### Big Bang Testing

It is an integration testing approach where all components or modules are integrated together all at once and tested as a unit.

This combined set of components is considered as one entity during testing; if any of the components in the unit are incomplete, integration will not be executed.

- Pros:
  - Convenient for small systems
- Cons:
  - Difficult to locate faults;
  - Given the number of interfaces needing to be tested in this method, some interface connections might easily be overlooked;
  - Since integration testing can only start after "all" modules have been architected, the testing team will have less time for execution in the testing phase;
  - Given that all modules are tested at once, critical high-risk modules are not isolated and tested as a priority. Peripheral modules handling fewer user interfaces are not isolated for priority testing.

### Incremental Testing

In this approach, testing is done by integrating two or more logically related modules, then tested for proper functioning of the application.

Then, other related modules are incrementally integrated, and the process continues until all logically related modules have been successfully tested.

     Stubs and Drivers:
    These are dummy programs used to facilitate testing activities. These programs act as substitutes for missing modules in testing. They don't implement the entire logic of the module but simulate data communication with the calling module during testing.
       - Stub: is called by the sub-test modules.
       - Driver: calls the module to be tested.

### Bottom-Up Integration Testing

It is the strategy where the lowest-level modules are tested first.

These already tested modules are then used to facilitate testing of higher-level modules. The process continues until all the top-level modules have been verified.

Once low-level modules have been tested and integrated, the next level of modules is formed.

   1. Pros:
      - Fault localization is easier;
      - No time is wasted waiting for all modules to be developed as in the Big Bang approach.
   2. Cons:
      - Critical modules (at the top level of the software architecture) controlling the application flow are tested last and may be prone to defects;
      - An early-stage prototype is not possible.

### Top-Down Integration Testing

A method where testing starts from the top and moves down following the software system's control flow.

Higher levels are tested first, followed by lower levels, which are integrated to check software functionality. Stubs are used to test if some modules are not ready.

   1. Pros:
      1. Fault localization is easier;
      2. The possibility of getting a prototype;
      3. Critical modules are tested as a priority; significant design flaws can be identified and corrected first.
   2. Cons:
      1. Needs many Stubs;
      2. Lower-level modules are inadequately tested.

### Sandwich Testing

Here, the highest-level modules are tested together with the lowest-level ones. Simultaneously, the lower ones are integrated with the higher ones and tested as a system.

It combines both Top-Down and Bottom-Up approaches, so it's called Hybrid Integration Testing.

It uses both Stubs and Drivers.

## How to Perform Integration Testing?

The testing procedure is independent of the above-mentioned strategies:

  1. Prepare the Integration Test Plan;
  2. Define test scenarios, cases, and scripts;
  3. Execute test cases, reporting any defects;
  4. Trace and retest defects;
  5. Steps 3 and 4 are repeated until integration is successfully completed;

### Example of a Test Plan

- Methods/Approaches for testing;
- In-scope and out-of-scope items for integration testing;
- Roles and Responsibilities;
- Prerequisites for integration testing;
- Testing environment;
- Risk mitigation plans;

## Entry and Exit Criteria

- Entry:
  1. Unit testing of components/modules;
  2. All high-priority bugs fixed and closed;
  3. All modules to be coded are complete and successfully integrated;
  4. Integration Test Plan, test cases, scenarios to be signed off and documented;
  5. Testing environment set up for integration;
- Exit:
  1. Successfully tested integrated application;
  2. Executed test cases are documented;
  3. High-priority bugs fixed;
  4. Technical documents to be submitted, followed by release notes;

## Best Practices

Consider the following best practices for integration testing:

- First, determine the integration testing strategies that can be adopted, and then prepare test cases and data accordingly.
- Study the application architecture and identify critical modules for priority testing;
- Obtain the interface design from the Architecture team, create test cases to verify all interfaces in detail. Interface for database/external hardware/software applications must be thoroughly tested;
- After test cases, test data plays a crucial role;
- Always have the mock data prepared before executing. Do not select test data during test case execution;
