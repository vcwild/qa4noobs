# Smoke Testing

A technique that verifies whether the deployed version of the software is stable or not.

It consists of a minimal set of tests applied to each software build to verify its functionalities.

    Also known as "Build Verification Testing" or "Confidence Testing."

In simple terms, smoke testing validates if vital features are working and if there are no showstoppers in the build under test.

It is a quick and small regression test only to test the core functionalities, determining if the build is so faulty that it renders further tests a waste of time and resources.

## Smoke Testing vs. Sanity Testing

- *Smoke Testing* verifies critical functionalities, while *Sanity Testing* checks new functionalities like bug fixes.
- *Smoke Testing* is documented or scripted, while *Sanity Testing* is not.
- *Smoke Testing* checks the entirety of the system from start to end, while *Sanity Testing* checks only an individual component.

## When to Apply Smoke Testing?

Applied whenever new features are developed and integrated with an existing build, which is then deployed in the QA environment, ensuring all functionalities are working perfectly or not.

<img src="https://www.guru99.com/images/3-2016/032816_1308_SmokeTestin1.png" alt="Testing Flowchart">

If the build is positively verified by the QA team in Smoke Testing, the team proceeds with functional testing.

### Reasons to Apply Smoke Testing:

- All showstoppers will be identified here.
- It is performed after a build is handed over to QA. Hence, most defects are identified in the early stages of software development.
- With smoke testing, we simplify the detection and correction of major defects.

## How to Apply Smoke Testing?

This technique is generally done manually, although achieving the same effect through automation is also possible and varies from company to company.

- **Manual Testing:**
    Performed to ensure that critical paths' navigation is operating as expected and not hindering functionality.
    Once the build is handed over to QA, high-priority test cases should be taken to locate major defects in the system.
    If the build passes, we proceed to functional testing. If the test fails, the build is rejected and sent back to the development team, restarting the cycle.

- **Automated Testing:**
   Automation is used for regression testing; however, we can also apply it to these test cases, streamlining the verification process of new builds.
   Instead of the inefficient process of repeating all tests whenever a new build is implemented, we can automate the necessary steps, saving time and resources.

   <img src=https://www.guru99.com/images/3-2016/032816_1308_SmokeTestin2.png alt= "Testing Cycle Flowchart">
