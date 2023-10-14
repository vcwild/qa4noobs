# Verification and Validation

In software testing, verification is a process of checking documents, design, code, and program to validate whether the software has been built according to the business rules.

The main goal is to ensure the quality of the application, design, architecture, etc. This process involves activities such as reviews, step-by-step checks, and inspections.

## What is Validation for Software Testing?

It is a dynamic mechanism that tests and validates whether the software actually meets the exact needs of the customer or not. The process helps ensure that the product meets the desired use in an appropriate environment. The Validation process involves activities such as Unit Testing, Integration Testing, System Testing, and User Acceptance Testing (UAT).

## Differences between Verification and Validation

Let's look at the characteristics that differentiate Verification from Validation:

### Verification

- The verification process includes checking documents, design, code, and program.
- **Does not involve** code execution.
- Verification uses methods like reviews, step-by-step checks, inspections, desk checking, etc.
- It checks if the system complies with the specifications.
- It finds bugs in the early development cycle.
- Targets the application and software architecture, specifications, complete design, high-level design, database design, etc.
- The QA team performs verifications and ensures that the software complies with business rules.
- Comes **before** Validation.

### Validation

- It is a dynamic mechanism for testing and validating an actual product.
- Always involves code execution.
- Uses methods like Black-Box, White-Box, and Non-Functional Testing.
- Can find bugs that the verification process did not detect.
- Targets the product itself.
- With the involvement of the testing team, validation is performed on the software code.
- Comes **after** verification.

## Examples of Verification and Validation

*A clickable button named* **Submit**

- Verification would check the design document and correct the typographical error.
- Otherwise, the development team would create the button as follows:

![Submit Button](https://www.guru99.com/images/blog/submet.png)

So, the specification is a button named **Submit**.

- Once the code is ready, Validation is performed.
- In the Validation process, it is noted that the button is not clickable.

Thanks to the Validation test, the development team will make the Submit button clickable.

## Design Validation

It is a process that evaluates whether a software product meets the exact requirements of end-users or investors. The purpose is to test the software product after development to ensure it meets business rules in a user environment.

![Design Validation Flowchart](https://www.guru99.com/images/jsp/030116_0846_LearnDesign1.png)

Validation concerns demonstrating the consistency and completeness of the design regarding user needs. This is the stage where a version of the product is built and validated against business rules.

![Validation Process Flowchart](https://www.guru99.com/images/jsp/030116_0846_LearnDesign2.png)

The goal is to provide objective evidence that the product meets user needs, where objective evidence is nothing more than physical proof of the output, such as an image, text, or an audio file that indicates the procedure's success.

This process involves testing, inspection, analysis, and more.

## Design Verification

It is a method that confirms whether the output of a designated software product meets input specifications by examining and providing evidence. The purpose of the verification process is to ensure that the design is identical to what was specified.

Design input includes any physical and performance requirements used as a basis for design purposes. The output is the result of each design phase at the end of all development efforts. The final output is the basis for the device's master record.

### Project Verification Process

- Identification and Preparation
  - During the specification development stage, identification and verification activities are carried out in parallel. This allows the designer to ensure that the specifications are verifiable. A test engineer can then initiate detailed test plans and procedures. Any changes to the specification must be communicated.
  - Identify the best approach for conducting verification, define measurement methods, required resources, tools, and facilities.
  - The complete verification plan will be reviewed by the design team to identify any issues before finalization.

- Planning:
  - Verification planning is a concurrent activity between core and development teams. This occurs throughout the project's lifecycle and is updated when any changes are made to the inputs.
  - During this phase, the system or software under test must be documented within scope.
  - Preliminary test plans and their refinement are conducted at this stage. The plan captures critical milestones to reduce project risks.
  - Tools, testing environment, development strategy, and requirements identification through inspection or analysis are included.

- Development:
  - Test case development coincides with the SLDC methodology implemented by a team. Various methods are identified during this stage.
  - Design inputs will be developed to include straightforward, unambiguous, and verifiable checks.
  - Verification time should be reduced when similar concepts are conducted in sequence. Even the output of one test can be used as input for subsequent tests.
  - Traceability links are created between test cases and corresponding design inputs to ensure that all requirements are tested and that the design output meets the inputs.

- Execution:
  - The test procedures created during the development phase are executed in accordance with the verification plan, which must be strictly followed for verification activities.
  - If any invalid results occur, or if any procedures require modifications, it is important to document the changes and obtain relevant approvals.
  - At this stage, any issues are identified and cataloged as defects.
  - A traceability matrix is created to ensure that all identified design inputs in the verification test plan have been tested and to determine the success rate.

- Reporting:
  - This activity is carried out at the end of each verification phase.
  - The design verification report provides a detailed summary of the verification results, including configuration management, test results for each modality, and issues found during verification.
  - The design verification traceability report is created between requirements and corresponding test results to verify that all business rules have been tested and provided with appropriate results.
  - Any discrepancies will be documented and appropriately addressed.
  - Reviews are conducted upon the completion of design verification and are approved accordingly.

### Project Validation Process

- Some designs can be validated by comparing them with similar equipment performing similar activities. This method is particularly relevant for validating configuration changes to existing infrastructure or standard designs to be incorporated into a new system or application.
- Demonstrations and/or inspections can be used to validate business rules and other project functionalities.
- Product analysis can be performed, such as mathematical modeling or simulation recreating the necessary functionality.
- Tests are carried out on the final design to validate the system's ability to operate according to established guidelines.
- Test plans, execution, and results must be documented and kept as part of the design records. Therefore, Validation is a collection of the results of all validation actions.
- When equivalent products are used in final design validation, the manufacturer must document the similarity and any differences from the original production.

*Example:*

- Let's take a simple product as an example, a waterproof watch.
- Business rules may state that "the watch must be waterproof during swimming."
- The design specification may specify that "the watch must function even if the user swims for an extended period."
- Test results must confirm that the watch meets these rules, or redesign iterations are made until the requirements are satisfied.

## Advantages of Design Validation and Verification

- We can continuously monitor designs, allowing us to meet user-defined requirements at each stage.
- Validating the design will highlight the difference between how the functionality operates and how it should operate.
- Documenting validation procedures will help easily understand the functionality at any stage in the future in case of changes or improvements.
- Development time will be consistently reduced, improving productivity, enabling product delivery as expected.
- This process includes the breadth and scope of each validation method that should be applied.
- Any discrepancies between the results and user needs must be documented.
- Changes in design validation lead to revalidations.
- It is important to document all activities that occur during validation, adequately proving that the design meets user requirements.
