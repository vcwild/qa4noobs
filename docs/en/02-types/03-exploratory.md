# Exploratory Testing

Exploratory testing involves evaluating a product by learning about it through exploration and experimentation, including:

- Questioning;
- Study;
- Modeling;
- Observation;
- Inference;

Often described as simultaneous learning, test design, and execution, it focuses on discovery and relies on the individual tester's guidance to uncover potential defects not easily covered within the scope of other tests.

## Why Use Exploratory Testing?

Most software quality tests use a **structured** approach, with test cases defined based on metrics such as user history and software engineering parameters, ensuring adequate coverage from a technical perspective.

What's lacking is coverage for extreme cases, which are checked during UAT and tested based on user personas. Exploratory Testing, on the other hand, is **random**, or unstructured by nature, and can reveal bugs that wouldn't be discovered in structured testing modes.

Test execution is implemented without creating formal steps, making it a precursor to automation.

It helps formalize discoveries and automate documentation. With the aid of visual feedback and collaborative testing tools, the entire team can participate in exploratory testing, enabling quick adaptation to changes and promoting an agile workflow.

Moreover, testers can convert exploratory test sequences into functional test scripts, automating the process.

Hence, exploratory testing speeds up documentation, facilitates unit tests, and helps create an instant feedback loop.

## When Should You Use Exploratory Testing?

It is suitable for specific scenarios, such as when someone needs to learn about a product or application quickly and provide rapid feedback. Exploratory testing helps assess quality from the user's perspective.

In many software cycles, an initial iteration is necessary when teams don't have much time to structure tests; exploratory tests are quite useful in this scenario.

Exploratory testing ensures no critical failure case goes unnoticed, guaranteeing quality. It also assists in the unit testing process, with testers documenting steps and using this information to test more broadly in subsequent sprints.

It is especially useful when finding new test scenarios to enhance coverage.

## When **Not** to Perform Exploratory Testing?

Organizations should be able to strike a balance between exploratory and scripted testing. Exploratory tests alone cannot offer sufficient coverage; they are thus complementary to scripted tests in some cases.

Especially in regulated or compliance-based testing, which requires scripted testing. In these cases, specific checklists and mandates need to be followed for legal reasons, making scripted testing preferable.

An example is accessibility tests that follow legal protocols with defined standards needing approval.

## Importance of Exploratory Testing for CI/CD

*// CI/CD: Continuous Integration/Continuous Delivery, a method to deliver applications frequently to customers. //*

Exploratory tests open testing to everyone, not just trained testers, making review faster and more efficient and allowing people beyond the traditional tester to participate.

Exploratory tests **complement** QA team testing strategies, including a series of undocumented test sessions to find yet-to-be-discovered bugs.

When combined with *automated tests* and other practices, they increase test coverage, discover extreme cases, and potentially add new features and improvements to the product.

**Without structural rigidity, they encourage experimentation, creativity, and discovery within teams.**

The almost instant nature of feedback helps bridge gaps between testers and developers, but most importantly, the results provide a user-oriented perspective and feedback for development teams.

**The goal is to complement traditional tests and uncover hidden defects behind the traditional workflow.**
