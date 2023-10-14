# Functional Testing Techniques

Functional testing is a type of testing that validates the system against specifications and acceptance criteria. The purpose of this type of testing is to test each function of the software by providing appropriate input and verifying the output according to the functional requirements.

Let's explore some of the key functional testing techniques.

## Equivalence Partitioning (BVA)

Equivalence partitioning is a testing technique based on requirements in the documentation.

Executed through the black-box approach, it provides the tester with a clear understanding of test coverage based on requirements and specifications.

It does not require knowledge of internal paths, structure, and implementation of the software under test and reduces the number of test cases to a manageable level. It is intuitively used by most testers.

Partitioning divides user inputs into partitions or classes of equivalence, and then subdivides them into ranges of possible values, so that one of these values is elected as the basis for the tests. There are partitions for:

- Valid values, which should be accepted by the system.
- Invalid values, which should be rejected by the system.

Consider a human resources system in a company that processes employee requests based on age. We have a business rule related to age stating that individuals under 16 years old cannot work, individuals between 16-60 years old are eligible for hire, and those who are 60 years old or older are not suitable for the job.

Dividing these rules, we have:

- Invalid partition: 0-15
- Valid partition: 16-60
- Invalid partition: 60-

Equivalence partitioning guides us to choose a subset of tests that will find more defects than a randomly chosen set.

When working with partitions, we observe a maxim that states:

    "Any value within a partition is as good as any other."

Therefore, values belonging to the same partition must be treated equally by the system, meaning they will produce the same result. Thus, any value within the equivalence class, in terms of testing, is equivalent to any other.

To achieve satisfactory test coverage when implementing this technique, test cases must cover all existing partitions. In the example under analysis, we have identified 3 partitions.

A test script for age validation in the hiring module would have 3 test cases:

C1: Age = 5

According to the rule, it should not work; the expected value is "Should not hire."

C2: Age = 33

According to the rule, it can work; the expected value is "Can hire."

C3: Age = 65

According to the rule, it should not work; the expected value is "Should not hire."

It is understood that within the range of values 0-15, regardless of which one is selected within the invalid partition, it should not be accepted by the system. The same applies to the range of 16-60, multiple possibilities that result in acceptance in the system.

It is not necessary to test all possible values; the coverage is sufficient when choosing one within each partition.

## Boundary Value Analysis

It assumes that the behavior at the edge of a partition is more likely to cause errors.

In the example, with the boundary value technique, we would select the value 15, invalid according to the system, then we select 16, borderline, but it should yield a positive result.

A good practice of combining techniques is to select a random value for each partition, test it, and then validate the boundary values within each partition.

- Decision Table:

A relevant method for documenting business rules to be followed by the system, created from the analysis of functional specifications and identification of business rules.

The table contains trigger conditions, combinations of true or false for data entry, and results for each of the combinations. It is a way to express in a tabular form which set of actions should occur to arrive at an expected result.

The main point of the table is the business rule, which defines the set of actions to be taken based on a set of conditions.

In the example, if we know that from 0-15 should not work, in the table, we establish that

0-15 Cannot

16-60 Can

This combination can/cannot, is a visual representation to assist in documenting the rules the system follows.

## Transition between States

It is based on the idea that a system can exhibit different behaviors depending on its current state or previous events. Creating a diagram allows the test to visualize the statuses, i.e., the transitions, data entry, and events that trigger actions.

The technique helps identify possible invalid transactions because knowing what the system expects, when testing the combinations, we can discover faulty transactions.

A person can be eligible to work and then become ineligible, invalid.

### Techniques Based on Experience

These are techniques where tests are derived from the skills and experience of the tester, the individual visualization capability of the professional, based on their past work, enabling them to find errors and faults that others may not discover.

This topic is better explored in the article on [exploratory testing](test).
