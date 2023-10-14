# Report Preparation

Preparing a report is a task that requires a lot of attention and care, as it is a document that should be clear and concise, containing relevant information for the reader.

## What is a Bug?

A bug is the consequence or result of a fault in the code. A fault in the code can be caused by a programming error or a design error. Code errors usually occur due to a lack of knowledge on the part of the programmer or due to inattention.

It is expected that the developed software will contain a reasonable number of bugs because it is impossible to predict all possible application usage scenarios. However, the later bugs are found, the more time it will take to fix them, and the more time will be spent on testing the application.

## Software Testing Defects

A defect is a variation or deviation in the software application from the original business rules or requirements.

A software defect consists of an error in the coding process, which leads to incorrect or unexpected results in the program, not meeting the established requirements. Testers may encounter such defects when applying test cases.

These two terms have a subtle difference, and in the industry, both are failures that need to be corrected and are used interchangeably by some teams.

## Software Testing Bug Report

A bug report is a detailed document about bugs found in the application, containing every detail such as description, date of discovery, the name of the tester who found it, the name of the developer who fixed it, etc. These reports help identify similar bugs in the future to avoid them.

When reporting bugs to the developer, your report should contain the following information:

- Defect_ID: A unique identification number for the defect.
- Defect Description: Detailed description, including information about the module in which the defect was found.
- Version: In which version of the application the defect was located.
- Date of Occurrence: Date when the defect occurred.
- Reference: Where references to documentation such as requirements, design, architecture, or even error screenshots are provided to help with understanding.
- Detected by: Name/ID of the tester who identified the defect.
- Status: The defect's situation.
- Fixed by: Name/ID of the developer who fixed it.
- Closure Date: Date when the defect was closed.
- Severity: Describes the impact of the defect on the application.
- Priority: Related to the urgency of defect correction. Priority can be high/medium/low based on how urgently the defect needs to be fixed.

Other necessary elements for the report include:

- When does the bug occur? How can it be reproduced?
- What is the incorrect behavior, and what was expected?
- What is the user's impact? How critical is its correction?
- Does this occur only with specific test data?
- Which build was used for testing (ideally including the Git commit)?
- If the bug occurs in the mobile version, what is the model, viewport size, and operating system?
- If the bug occurs in a browser, what type of browser, resolution, and version?
- If the bug occurs in an API, which specific API/workflow is affected, what are the request and response parameters?
- Screenshot with relevant areas marked.
- Video demonstrating the steps taken to encounter the bug.
- Application/server logs.
- Any specific selection/configuration feature, if involved when the bug occurred.

## Defect Management Process

A systematic approach to identifying and fixing bugs. The defect management cycle consists of the following steps:

1. Defect Discovery.
2. Categorization.
3. Defect Resolution by Developers.
4. Tester Verification.
5. Defect Closure.
6. Defect Reporting at the end of the project.

![Defect Management Cycle](https://www.guru99.com/images/TestManagement/testmanagement_article_4_4.png)

### Discovery

In this phase, teams must discover as many defects as possible before the end-users do. A defect is declared found and its status is changed to "Accepted" once recognized and accepted by developers.

![Discovery and Recognition of Defects Flowchart](https://www.guru99.com/images/TestManagement/testmanagement_article_4_5.png)

### Categorization

Defect categorization helps software developers prioritize their tasks based on severity.

- Critical: Defects that need to be fixed **immediately** as they can cause significant harm to the product.
- High: The defect impacts the product's core features.
- Medium: The defect results in minor deviations from the product's business rules.
- Low: The defect has little effect on the product's operation.

### Resolution

The resolution of defects in software testing is a process that corrects deviations step by step, starting with the assignment of defects to developers, who, in turn, insert defects into a schedule based on their priority.

Once the correction is complete, developers send a report to the Test Manager, which helps in the defect correction and registration process.

- Assignment: A developer or another professional receives the correction to be made and changes the status to "Responding."
- Schedule Fix: The developer takes some control in this phase, creating a schedule to fix the defects based on their priority.
- Defect Correction: While the development team fixes the defects, the Test Manager records the process.
- Resolution Report: The report on the defect correction is sent by the developers.

### Verification

After the development team has fixed and reported the defect, the testing team verifies that the problems have indeed been fixed.

### Closure

Once the defect has been fixed and verified, the status is changed to "Closed."

## Defect Reports

This is a process where Test Managers prepare and send defect reports for management teams to provide feedback on the defect management process and the status of these defects.

The management team checks the report and may provide feedback or additional support if necessary. The defect report helps to better communicate, record, and explain defects in detail.

The management board has the right to know the status of defects, as they need to understand the management process to assist in the project. Therefore, the current situation of defects must be reported to them, considering their feedback.

### How to Measure and Evaluate Test Execution Quality

- Defect Rejection Rate: (Number of rejected defects/Total number of defects)*100
- Defect Leakage Rate: (Number of undetected defects/Total software defects)*100
