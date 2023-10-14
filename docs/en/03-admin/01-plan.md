# Test Planning

A Test Plan is a detailed document that describes the testing strategy, objectives, schedule, estimates, deliverables, and resources required to perform testing on a software product.

The plan helps determine the effort needed to validate the quality of the application under test. This plan serves as a blueprint for conducting testing activities as a defined process, which is closely monitored and controlled by the Test Manager.

According to the ISTQB definition:

     "The Test Plan is a document that describes the scope, approach, resources, and schedule of planned test activities."

## Importance of Test Planning

The benefits of the Test Plan document are diverse:

- It aids people outside the testing team, such as developers, business managers, and clients, in understanding the details of testing.
- The plan guides reasoning and acts as a set of rules to be followed.
- Important aspects such as test estimation, test scope, strategies, etc., are documented in the Plan so that they can be reviewed by the Management Team and reused for other projects.

## How to Write a Test Plan

![Test Plan Flowchart](https://www.guru99.com/images/TestManagement/testmanagement_article_2_4_3.png)

### 1. Analyze the Product

How can you test a product without any information about it? You can't. You need a deep understanding of the product before testing it.

The product under test is the Guru99 Banking Site. Research customers, end-users, and their needs and expectations from the application.

- Who will use the site?
- What is its function?
- How will it work?
- What software/hardware does the product use?

The idea is to explore the product and review its documentation, which will help understand all the project's features and usability. If there is any lack of understanding, interviews can be conducted with customers, developers, and designers for further information.

### 2. Develop the Test Strategy

The Test Strategy is a critical step in creating a Test Plan within software testing. The strategy is a high-level document, typically developed by the Test Manager. The document defines:

- The test project's objectives and the means to achieve them.
- Determines the required effort and costs.

![Development of Strategy Flowchart](https://www.guru99.com/images/TestManagement/testmanagement_article_2_4_6.png)

#### 2.1. Define the Test Scope

Before starting any testing activity, the scope must be defined.

- Components of the system to be tested (hardware, software, middleware, etc.) are defined according to the scope.
- Components of the system that will not be tested must also be clearly defined as not within the scope.

Defining the scope of your test project is essential for all stakeholders, as it provides everyone with reliable and accurate information about the testing to be carried out. All project members will have a clear understanding of what will be tested and what will not.

##### 2.1.1. How to Determine Test Scope

- Precise Customer Requirements
- Project Budget
- Product Specification
- Skills and Talents in the Test Team

Now, you need to define clearly what is within and outside the scope.

#### 2.2. Identifying Test Types

A test type is a standard procedure that provides an expected outcome for tests.

Each type of testing is designed to identify a specific type of bug in the product. However, all types share the common goal of early defect identification before the client release.

Commonly used types include:

- Unit Testing: Verifies the smallest verifiable software parts in the application.
- API Testing: Validates the API created for the application.
- Integration Testing: Individual modules are combined and tested as a group.
- System Testing: Conducted on a complete and integrated system to evaluate compliance with requirements.
- Installation/Uninstallation Testing: Focuses on what customers need to do to successfully install/uninstall, configure/remove new software.
- Agile Testing: Evaluates the system according to agile methodology.

There are a myriad of test types for the product, and the Test Manager should define the appropriate prioritization based on the application's functions and within the defined budget.

#### 2.3. Document Risks and Issues

Risks are future and uncertain events with the probability of occurrence and the potential for loss. When the risk actually occurs, it becomes an "issue."

Examples of documentation risks include:

- Team member lacks required skills: Plan training sessions.
- The schedule is tight, making it difficult to complete requirements on time: Determine test priority for each activity.
- Test Manager lacks adequate management skills: Plan training sessions for leadership.
- A lack of cooperation negatively affects team productivity: Encourage each member in their tasks and inspire them to greater efforts.
- Incorrect budget estimate and additional costs: Establish scope before starting work, pay due attention to planning, and continuously measure progress.

#### 2.4. Create Test Logic

In test logic, the Manager must answer the following questions:

- Who will perform the test?
- When will the test take place?

You may not know the names of each tester, but the type of tester can be defined.

To select the right member for a specific task, you must consider whether their skills qualify them for the task and estimate the available budget. Incorrect selection can cause delays or project failure.

Possessing the following skills is most ideal for testing:

- Ability to understand from a customer's perspective.
- Strong desire for quality.
- Attention to detail.
- Good cooperation.

In your project, the tester will take the reins of execution. Based on the budget, you can select outsourcing.

*When will the test occur?*

Test activities should be associated with development activities and should start when all necessary items exist.

![Items Required to Start Testing](https://www.guru99.com/images/TestManagement/testmanagement_article_2_4_8.png)

### 3. Set Test Objectives

This involves the overall goal and achievement of the best execution. The goal of testing is to find as many defects as possible, ensuring that the software is bug-free before release.

To set objectives, you need to:

- List all features (functionality, performance, GUI, etc.) that may require testing.
- Define the target or objective of the test based on the above features.

### 4. Define Test Criteria

Criteria are standards or rules on which test procedures are based, and there are two types:

#### 4.1. Suspension Criteria

Specify critical suspension criteria for a test. If these criteria are met during testing, the active test cycle will be *suspended* until the criteria are resolved.

*Example:* If the team reports that 40% of cases have failed, you must suspend testing until the development team fixes all cases.

![Suspension Criteria Flowchart](https://www.guru99.com/images/TestManagement/testmanagement_article_2_4_10.png)

#### 4.2. Exit Criteria

Exit criteria specify the guidelines that denote success in a testing phase. Exit criteria are the target results of tests required before proceeding to the next development phase.
E.g., 95% of all critical test cases must pass.

Some methods for defining exit criteria consist of specifying execution and success rates.

- Execution Rate: It is the ratio of the number of executed test cases to the total number of cases.
- Success Rate: The ratio of tests that have passed to the total number of executed test cases.

These data can be collected in test metric documents.

- The Execution Rate must necessarily be 100%, unless a clear reason is provided.
- The Success Rate depends on the project's scope, but it is ideal for it to be as high as possible.

### 5. Resource Planning

Resource planning is a detailed summary of all types of resources required to complete a task or project. Resources can be human, equipment, and materials needed to finish a project.

Resource planning is an important factor in test planning as it helps determine the number of resources to be employed in the project. Therefore, the Test Manager can accurately develop the schedule and estimates for the project.

- Human Resources:
  - Test Manager:
        1. Manages the entire project.
        2. Defines guidelines.
        3. Acquires the necessary resources.
        4. Identifies and describes appropriate automation techniques/tools/architecture.
  - Tester:
       1. Executes tests, catalogs results, reports defects.
       2. Can be internal or outsourced, depending on the available budget.
       3. For tasks that require low specialization, it is recommended to use an outsourced team to save costs.
  - Test Developer:
      1. Implements test cases, test programs, test batteries, etc.

  - Test Administrator:
     1. Builds and ensures that the test environment and its resources are managed and maintained.
     2. Provides support to the tester for using the test environment.
  - SQA Members:
     1. Responsible for Quality Assurance.
     2. Verify and confirm that the test process meets specified requirements.

#### 5.1. System Resources

To test a web application, resources must be planned according to:

- Server:
  - Installs the web application under test.
  - Includes a separate web server, database server, and application server, if applicable.
- Testing Tool:
  - The testing tool is used to automate processes, simulate proper user operations, and generate results.
  - There are various tools available for this purpose (Selenium, QTP, etc.).
- Network:
  - The network must include LAN and the Internet to simulate real business conditions and the user environment.
- Computer:
  - The computer on which users commonly access the web server.

### 6. Test Environment Planning

*What is the test environment?*

It consists of the software and hardware setup in which the test team develops test cases. It is characterized by a real business and user environment, as well as physical environments such as servers and front-end execution.

#### 6.1. How to Set Up the Test Environment

Assuming cooperation between the development team and the test team, ask the developers for all the necessary information to understand the application under test clearly.

- What is the maximum number of actively connected users the website can handle simultaneously?
- What are the hardware/software requirements for website installation?
- Does the user need any specific configurations to browse the website?

### 7. Schedule and Estimation

Suppose that the entire project is subdivided into smaller tasks and added to the estimate as follows:

- Creation of Test Specifications:
  - Developed by the Test Designer.
  - 170 hours of work.
- Test Execution:
  - Tester, Test Administrator.
  - 80 hours of work.
- Test Report:
  - Tester.
  - 10 hours of work.
- Test Delivery:
  - 20 hours of work.
- Total: 280 Hours of Work.

This way, you can create a schedule to complete all the tasks.

Creating schedules is a common term in project management. By creating a solid schedule in Test Planning, the Manager can use it as a tool to monitor progress and control additional costs.

To create a project schedule, the Test Manager needs various information, such as:

- Employee and Project Deadlines: Workdays, project deadlines, and available resources are factors that affect the schedule.
- Project Estimation: Based on the estimation, the Manager will know how much time will be spent to complete the project, enabling the creation of an appropriate schedule.
- Project Risks: Understanding the risks helps the Manager add enough extra time to the schedule to deal with risks.

### 8. Determine the Deliverables for Testing

Deliverables are a list of all the documents, tools, and other components that need to be developed and maintained to support testing efforts.

There are different deliverables in all phases of development.

![Before Testing, During Testing, After Testing](https://www.guru99.com/images/TestManagement/testmanagement_article_2_4_15.png)

Deliverables are provided *before* the testing phase:

- Test Plans Document
- Test Cases Document
- Test Design Specifications

Deliverables are provided *during* the testing phase:

- Test Scripts
- Simulators
- Test Data
- Test Traceability Matrix
- Error and Execution Logs

Deliverables are provided *after* the testing phase:

- Test Results/Reports
- Defect Reports
- Installation/Testing Procedure Guidelines
- Release Notes.
