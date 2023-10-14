# Black Box Testing

Black box testing aims to verify whether the system under scrutiny is functioning correctly, meaning it adheres to business rules and system specifications.

Black box tests have the following characteristics:

- Testing where the internal functionalities of the code are not accessible to the tester.
- Done from the user's perspective.
- Entirely focused on business rules and application specifications, also known as Behavioral Testing.

## How to Apply Black Box Testing

To apply black box testing, the tester must follow these steps:

1. Initially, business rules and specifications are examined.
2. The tester selects valid inputs (positive scenario testing) to check if the system processes them correctly. Invalid inputs (negative scenario testing) are also tested to verify if the system detects them.
3. The tester determines the expected outputs for each of the selected inputs.
4. The tester constructs test cases with the selected inputs.
5. Test cases are executed.
6. The tester compares actual outputs with ideal outputs.
7. Defects, if any, are corrected and retested.

### Types of Black Box Testing

Black box tests can be classified as:

- **Functional Testing:** Related to the business rules of a system; conducted by testers.
  
- **Non-Functional Testing:** **Not related** to testing any specific feature but rather non-functional business rules like performance, scalability, and usability.

- **Regression Testing:** This mode is applied after any fixes, upgrades, or maintenance in the code to verify if these changes have not affected features previously tested successfully.

## Black Box Testing Techniques

The following techniques are used to test a system:

- **Equivalence Class Testing:** Used to minimize the number of possible test cases to an optimized level while maintaining reasonable coverage.

- **Boundary Value Analysis:** Focuses on values at boundaries. This technique determines if a certain range of values is acceptable by the system or not, very useful for reducing the number of test cases. It is more appropriate for systems where an input falls within certain scopes.

- **Decision Table Testing:** A decision table inserts causes and their effects into a matrix, with a unique combination in each column.
