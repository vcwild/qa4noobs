# Test Prioritization

- Prioritization is one of the most efficient ways to produce high-quality products according to market and consumer standards.

- It's a way to prioritize and rank cases from most important to least important.

- Minimizes costs, effort, and time during the testing phase.

- It's important to have a good understanding of the benefits, challenges, and prioritization techniques to reap the best results.

Test prioritization is about ordering the test cases to be eventually conducted.

Prioritizing tests helps meet time and budget constraints in testing to enhance the fault detection rate as quickly as possible.

## Priority Categories

- Priority 1:

  Test cases that **must** be executed, or the consequences may be worse after the product's release. These are critical test cases, where the chances of a new feature breaking an existing one are more likely.
- Priority 2:

  Test cases that **can** be executed if there is time. These are not as critical but can be performed as a best practice to double-check before release.
- Priority 3:

  Test cases that are **not** important enough to be tested before the current release. These can be tested later, immediately after the current version of the software is released, again as a best practice. However, there is no direct dependency on them.
- Priority 4:

   Test cases that are **never** important since their impact is negligible.

In the prioritization scheme, the main guideline is to ensure that low-priority cases should not cause severe impacts on the software. This prioritization should have several objectives, such as:

- Based on functionality that has already been communicated to users and is critical from a business perspective.

- Assess the probability of faults by checking the fault detection rate of a test category. This helps understand if this category is critical or not.

- Increase code coverage of the system under test more quickly using previously used coverage criteria.

- Increase the detection rate of critical faults in a test category by locating similar faults that occurred earlier in the testing process.

- Increase the probability of faults being revealed due to specific changes in the code earlier in the Regression Testing process.

## Types of Test Case Prioritization

- General Prioritization:

Here, test cases are prioritized based on how useful they will be for subsequent versions of the product. This does not require any knowledge of modified versions, so general prioritization can be applied immediately after the release of a version outside of peak hours. Due to this, the cost of applying this prioritization category is amortized during subsequent releases.

- Version-Specific Test Case Prioritization:

In this mode, we prioritize the cases so that they will be useful according to each version of the product. This requires knowledge of all the changes made to the product. It is applied before regression testing in the modified version.

## What Are the Different Techniques for Prioritization?

We can prioritize test cases using the following techniques:

### 1. Coverage-Based

Focuses on code coverage by tests according to the following techniques:

- Total Statement Coverage:

      Here, the total number of statements covered by a test case is used as a factor to prioritize the tests. For example, a test covering 5 statements will receive priority over one covering only 2.

- Additional Statement Coverage:

   This technique involves iteratively selecting a test case with the highest statement coverage and then selecting a case that covers what the previous one missed. The process is repeated until everything is covered.

- Total Branch Coverage:

   Here, branches refer to the total possibilities of output in a condition, and the highest coverage of these is the determining factor.

- Additional Branch Coverage:

   Similar to additional statement coverage, here, the technique picks the test with the highest branch coverage and iteratively selects the next ones according to those not covered by the previous one.

### 2. Risk-Based

Here, risk analysis is used to identify potential problem areas that, if they fail, could lead to severe consequences.

### 3. Business Rule-Based

In this technique, prioritization is based on various factors that determine business rules. These factors are documented in the acceptance criteria. Test cases are designed considering the priority assigned by the customer to a rule, its complexity, and volatility.

The factors used are:

- Priority Indicated by the Customer: It is a measure of the importance of business rules to a customer from a business perspective.
- Business Rule Volatility: Indicates how many times the business rule has changed.
- Implementation Complexity: Indicates the effort or time required to implement a business rule.
- Error-Prone Nature: Indicates how error-prone a business rule was in previous versions of the software.

### 4. History-Based

In this technique, prioritization is done based on the history of test cases, i.e., the results of previous executions are checked.

It is used to determine the possible chances of failure in the tests, and those in which failure is more likely receive priority. History verification is used to select which test cases should be considered for retesting in the current cycle.

### 5. Cost-Based

Here, the cost factor comes into play, where tests that cost less are prioritized over tests with higher costs. This includes:

- Cost of regression testing.
- Cost of gathering business rules.
- Cost of analyzing whether to select a test case.
- Cost of test case prioritization.
- Cost of full test execution.
