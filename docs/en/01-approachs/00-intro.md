# Testing Approaches

Testing an application is a process that must be done with great care because it ensures that the software is working correctly and there are no defects that could harm the user. However, creating tests is not an easy task. There are two approaches that can be used to create tests, each with its advantages and disadvantages. They are:

- Proactive: where the test design process starts as early as possible to find and fix errors before the build is created.
- Reactive: an approach where testing does not start until after the design and development are complete.

Given these two approaches, we can say that the proactive approach is the most recommended because it allows tests to be created before the code, enabling the developer to fix errors before the code is implemented. On the other hand, the reactive approach is more commonly used in projects with tight schedules as it allows development to be done first, followed by testing.

## Black Box vs. White Box

Testing approaches can be divided into two categories, **black-box** and **white-box**. The difference between them is that black-box focuses on the system's behavior, while white-box focuses on the internal structure of the code.

### Black Box

Black-box tests are the most commonly used because they are easier to implement and do not require knowledge of the programming language used. Moreover, they are easier to understand for non-technical individuals and can be implemented in different programming languages.

Key aspects of black-box tests include:

- Primary focus on validating **functional** business rules.
- Provides abstraction to the code and focuses on the system's behavior.
- Facilitates test communication between modules.

### White Box

White-box tests are more challenging to implement as they require knowledge of the programming language used. They are also harder to understand for a layman and are more difficult to implement in different programming languages.

Some key aspects of white-box tests include:

- Validates **internal** structure and functionality of code.
- Knowledge of the programming language used is essential.
- Does not facilitate test communication between modules.
