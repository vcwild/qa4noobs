# Scrum

In software testing, Scrum is a methodology used for building complex applications. It provides straightforward solutions for executing intricate tasks. Scrum assists the development team in focusing on all aspects of software product development, such as quality, performance, usability, etc. It generates transparency, inspection, and adaptation during the Software Development Life Cycle (SDLC) to avoid complexity.

![Scrum](https://www.guru99.com/images/11-2014/agile_Processesv1_4.png)

## Scrum Testing

Scrum testing is performed to validate business rules and involves checking non-functional parameters. There is no active role for testers in the process, so it is usually developed by developers using Unit Testing. Dedicated testing teams may be required depending on the nature and complexity of the project.

## Key Characteristics of the Scrum Methodology

- Scrum has short schedules for release cycles with adjustable scopes known as sprints. Each release may have multiple sprints, and each Scrum project may have multiple release cycles.
- A repetitive sequence of meetings, events, and milestones.
- The practice of testing and implementing new business rules, known as user stories, to ensure that parts of the work are released shortly after each sprint.

![Scrum Roles](https://www.guru99.com/images/11-2014/112714_1232_ScrumTestin1.jpg)

### 1. Roles in Scrum

- Product Owner:
  - Defines product features.
  - Decides release dates and related features.
  - Is responsible for the product's profitability.
  - Can accept or reject a result.

- Scrum Master:
  - Organizes the team and checks its productivity.
  - Maintains the list of impediments and removes barriers in development.
  - Coordinates with all roles and functions.
  - Defends the team from external interference.
  - Invites to daily Scrum, sprint review, and planning meetings.

- The Team:
  - Typically consists of 5-9 members.
  - Includes developers, designers, testers, etc.
  - The team organizes and plans the work on its own.
  - Has the authority to do everything within the project boundaries to achieve the sprint goal.
  - Actively participates in daily ceremonies.

### 2. Scrum Artifacts

![Scrum Artifacts](https://www.guru99.com/images/2/scrum_testing_2.png)

A Scrum process includes:

- User Stories: Short explanations of system features under test. An example for an insurance agency is, "Premium can be paid using the online system."
- Product Backlog: A collection of user stories captured for a Scrum project. The Product Owner prepares and maintains this backlog. It is prioritized by the Product Owner, and anyone can add items with their approval.
- Release Backlog: A release is a time span in which a number of iterations are completed. The Product Owner coordinates with the Scrum Master to decide which user stories should be prioritized in a release. User stories in the release backlog are prioritized for completion in a release.
- Sprints: A defined time frame for completing user stories, decided by the Product Owner and the development team, typically 2-4 weeks.
- Sprint Backlog: A group of user stories to be completed in a sprint. During the sprint backlog, work is never assigned, and the team self-assigns tasks. It is owned and managed by the team, while remaining estimated work is updated daily. It is the list of tasks to be developed in a sprint.
- Blockers List: A list of blocks and decisions not yet made, owned by the Scrum Master and updated daily.
- Burndown Chart: Represents the overall progress between work in progress and work completed throughout the entire process. It graphically shows unfinished user stories and features.

### 3. Ceremonies (Processes) in Scrum

- Sprint Planning: A sprint begins with the team importing user stories from the Release Backlog into the Sprint Backlog. Testers estimate the effort to validate the various user stories in the Sprint Backlog.
- Daily Scrum: Facilitated by the Scrum Master, it lasts about 15 minutes. During the Daily Scrum, team members discuss the work completed the previous day, planned work for the next day, and challenges encountered during a sprint. The team's progress is tracked during the daily meeting.
- Sprint Review/Retrospective: Also facilitated by the Scrum Master, it lasts 2-4 hours and discusses what the team developed in the last sprint and what lessons were learned.

## Role of the Tester in Scrum

**There is no active role for testers in the Scrum process.**

Usually, tests are developed by a developer with Unit Testing. The Product Owner is often involved in the testing process in each sprint. Some Scrum projects have dedicated testing teams depending on the nature and complexity of the project.

## Testing Activities in Scrum

- Sprint Planning:
  - Here, the tester should choose a user story from the product backlog for testing.
  - As a tester, they must decide how many hours (Effort Estimation) it will take to complete testing for each selected user story.
  - They should know the sprint's objectives.
  - Contribute to the prioritization process.

- Sprints:
  - Support developers in unit testing.
  - With user story tests complete, the testing execution is done in a lab where the developer and tester work together. Defects are logged in the Defect Management tool, which is checked daily. Defects can be reviewed and discussed during a Scrum meeting. Any bugs are retested as soon as they are fixed and implemented for testing.
  - As a tester, attend all daily meetings to provide input.
  - Bring any backlog items not completed in the current sprint for inclusion in the next sprint.
  - The tester is responsible for developing automation scripts. They schedule automated tests with the Continuous Integration (CI) system. Test automation is given importance due to short delivery times. Test automation can be achieved using various paid or open-source tools available. This proves its efficiency in ensuring that everything that needs to be tested is covered. Satisfactory test coverage can be achieved with close communication with the team.
  - Review automation results in the CI and send reports to stakeholders.
  - Execute non-functional tests for approved user stories.
  - Coordinate with the client and Product Owner to define acceptance criteria for Acceptance Testing.
  - At the end of the sprint, the tester may also perform User Acceptance Testing (UAT) in some cases and confirm the completion of testing for the current sprint.

- Sprint Retrospective:
  - As a tester, establish what went wrong and what was successful in the current sprint.
  - Identify lessons learned and best practices.

## Test Report

Scrum testing metrics provide transparency and visibility for stakeholders about the project. The reported metrics allow a team to analyze their progress and plan future strategies for product improvement.

There are two metrics commonly used for reporting:

### Burn Down Chart

Daily, the Scrum Master records the estimated remaining work for the current sprint, which is nothing but the Burn Down, updated daily.

This chart provides a quick overall view of project progress, showing information such as the total volume of work in the project that needs to be completed, work completed in each sprint, and more.

![Burn Down Chart](https://www.guru99.com/images/11-2014/112714_1232_ScrumTestin4.jpg)

### Velocity Chart

This technique predicts the team's velocity in each sprint, represented as a bar chart showing how the team's output has changed over time.

Additional useful metrics include schedule burn, budget burn, percentage of theme completed, completed stories, remaining stories, etc.
