# Questions and Answers

Let's review the concepts learned so far and answer some questions.

## *1) What are the phases involved in the software testing life cycle?*

- Test Planning: Strategy to be applied in testing.
- Test Case Development: Defining and developing test cases.
- Environment Setup: Configuring the necessary software and hardware for testing.
- Execution: Running the code and comparing expected results with actual results.
- Closure: Evaluation of completion criteria based on test coverage, quality, critical business objectives, etc.

## *2) What are the different types of testing?*

- Black Box Testing: Based on requirements and specifications, without an internal view of software functionality, from a user perspective.
- White Box Testing: Based on internal structure, architecture, and source code, used to test system units.
- Gray Box Testing: Software debugging, tester has limited knowledge of internal functioning, mixed approach.

## *3) What are the different levels of testing?*

- Unit Testing: Validates individual parts of the code.
- Integration Testing: Validates the interaction of individual project parts and their interaction with external interfaces.
- System Testing: Functional, actually uses the system.
- Acceptance Testing: With the user, system acceptance.

## *4) Explain the bug life cycle or defect life cycle*

- Defect Found (NEW)
- Assign: Assign to a developer for correction.
- Activity: Resolving the bug itself, reject or accept, return for further explanations, etc.
- Testing: The fixed bug is tested again for validation. If it's not fixed, it returns to the activity phase.
- Closed: Fixed, validated, closed.

## *5) What is a test case?*

It is a set of conditions and variables under which a tester will determine if a system under test meets the functional requirements correctly.

## *6) What is the difference between functional and non-functional tests?*

- Functional: **Performed before non-functional tests**, based on client requirements, describes what the product does.
- Non-Functional: **Performed after functional tests**, based on client expectations, describes how the product works.

## *7) What is Verification and Validation in Software Testing?*

Verification - Static analysis technique, checks documentation, testing is done without code execution (review, inspection, step-by-step testing).

Validation - Dynamic analysis technique where testing is done by executing the code (non-functional and functional testing techniques).

## *8) What is usability testing?*

Testing methodology where the end user is asked to use the software to check ease of use, perception, system performance, etc. A precise way to understand the customer's perspective, using prototypes, mocks, etc.

## *9) What is coverage, and what are the different coverage techniques?*

A parameter to describe how much source code is tested.

- Statement Coverage: Ensures that each line of code was executed and tested.
- Decision Coverage: Ensures that all true and false paths were executed and tested.
- Path Coverage: Ensures that all possible routes through a specific part of the code were executed and tested.

## *10) A defect that could have been removed during the initial stage is removed at a later stage. How does this affect cost?*

Defects should be removed as early as possible because postponing removal increases costs exponentially. Early-phase removal is cheaper and simpler.

## *11) What is regression and confirmation testing?*

- Regression: Confirms that a recent code change does not adversely affect existing features.
- Confirmation: When a test fails due to a defect, it is reported, a new version of the corrected software is sent, and the test is re-run. This is confirmation of the correction.

## *12) What is the basis for estimating your project?*

To estimate a project, you should:

- Break down the entire project into smaller tasks.
- Assign each task to team members.
- Estimate the effort required to complete each task.
- Validate the estimation.

## *13) Which test cases are written first: white box or black box?*

Usually, **black box test cases** are written first.

Since these only require requirements and design documents or a project plan, these documents are readily available at the beginning of the project.

White box tests cannot be executed in the initial project phase because they require a clearer understanding of the architecture, which is not available in the early stages. Therefore, they are generally written **after** black box tests.

## *14) Mention the basic components of the defect report format*

- Project Name
- Module Name (if applicable)
- Defect Detected In
- Defect Detected By
- Where the Defect Was Found
- Defect ID and Name
- Defect Snapshot (bug evidence)
- Priority/Severity Status
- Defect Resolved By
- Defect Resolved On (date)

## *15) What does the Cascade of Defects mean?*

Cascading defects occur when one defect is caused by another defect, one defect adds to another.

When a defect is present in any stage but goes unnoticed and unaddressed, it results in a significant increase in the number of defects.

They are mostly detected during regression testing.

## *16) What are the defect categories?*

- Wrong: Indicates that requirements were implemented incorrectly, a deviation from the provided specification.
- Missing: A variation from the specifications, an indication that a specification was not implemented, or a customer requirement was not noted correctly.
- Extra: An attribute desired by the product's end user, not provided by the final customer. It is always a deviation from the specification but may be a desired attribute by the product's user.

## *17) On what basis is the acceptance plan prepared?*

- Requirement Document: Specifies what is required in the project from the customer's perspective.
- Customer Input: May include discussions, informal conversations, emails, etc.
- Project Plan: The project plan prepared by the project manager also serves as good input to finalize acceptance testing.

## *18) Why is Selenium the preferred tool for automation testing?*

Selenium is an open-source tool designed to automate web browser testing. Since Selenium is open source, there is no licensing cost, which is a significant advantage over other testing tools. Other reasons include:

- Test scripts can be written in various programming languages: Java, Python, C#, PHP, Ruby, Perl, and more.
- Tests can be conducted in various web browsers: Mozilla, IE, Chrome, Safari, or Opera.
- It can be integrated with tools like TestNG and JUnit for test case management and report generation.
- Integration with Maven, Jenkins, and Docker for continuous testing.

## *19) What are the various components of Selenium?*

- Selenium Integrated Development Environment (IDE)
- Selenium Remote Control (RC)
- Selenium WebDriver
- Selenium Grid

## *20) What are the different types of locators in Selenium?*

A locator is an address that uniquely identifies a web element within a web page. To identify web elements accurately, Selenium offers different types of locators, including:

- ID
- Class Name
- Name
- Tag Name
- Link Text
- Partial Link Text
- XPath
- CSS Selector
- DOM


## *21) What is XPath?*

XPath, also known as XML Path, is a language for querying XML documents. It is a crucial strategy for locating elements in Selenium automation. XPath comprises a path expression along with certain conditions. Here, you can easily write an XPath script/query to locate any element on a web page. XPath is designed to enable navigation of XML documents with the aim of selecting individual elements, attributes, or specific parts of an XML document for processing. It also produces reliable locators.


## *22) What is the Difference Between Absolute and Relative Path?*

- Absolute XPath:

It is the direct way to locate an element, but the disadvantage of absolute XPath is that if there is any change made to the element's path, the XPath will fail. For example:

         /html/body/div[1]/section/div[1]/div

- Relative XPath:

For relative XPath, the path starts in the middle of the HTML DOM structure. It begins with a double forward slash (//), which means it can search for the element anywhere on the web page. For example:

       // input [@ id = 'ap_email']

## *23) When Should I Use Selenium Grid?*

Selenium Grid can be used to execute identical or different test scripts on multiple platforms and browsers simultaneously, enabling distributed test execution, testing across different environments, and saving execution time.

## *24) How Do I Launch the Browser Using WebDriver?*

The following syntax can be used to launch the browser:

WebDriver driver = new FirefoxDriver()

Driver WebDriver = new ChromeDriver()

Driver WebDriver = new InternetExplorerDriver()

## *25) Should Testing Be Done Only After the Completion of Development and Execution Phases?*

Testing is always done after the development and execution phases. The earlier a defect is detected, the more cost-effective it is. For example, fixing a defect during maintenance is ten times more expensive than fixing it during execution.

## *26) What Is the Relationship Between the Reality of the Environment and Testing Phases?*

As testing phases progress, the reality of the environment becomes more crucial. For instance, during unit testing, you need the environment to be partially real, but in the acceptance phase, you must have a 100% real environment, or we can say it should be **the** real environment.

## *27) What Is Random Testing?*

Usually, in random testing, data is generated randomly, often using a tool. For example, the figure below demonstrates how randomly generated data is fed into the system.

This data is generated using an automated tool or mechanism. With this random input, the system is then tested, and the results are observed.

## *28) Which Test Cases Can Be Automated?*

- Smoke Testing
- Regression Testing
- Complex Calculation Testing
- Data-Driven Testing
- Non-functional Testing

## *29) Based on What Can You Measure the Success of Automation Tests?*

- Defect Detection Rate
- Automation Execution Time and Time Savings for Product Launch
- Reduction in Labor and Other Costs

## *30) How to Click on a Hyperlink Using linkText()?*
           driver.findElement(By.linkText("Google")).click();

This command locates the element using the link text and then clicks on it. This way, the user would be redirected to the corresponding page.

## *31) What Is TestNG?*

It is an advanced framework designed to leverage the benefits of developers and testers. It also has a built-in exception handling mechanism that allows the program to run without unexpectedly terminating.

## *32) How to Set the Test Case Priority in TestNG*

The code below helps you understand how to set the test case priority in TestNG:

      ```java
      package TestNG;
      import org.testing.annotation.*;

      public class SettingPriority {
            @Test(priority=0)
            public void method1() {}

            @Test(priority=1)
            public void method2() {}

            @Test(priority=2)
            public void method3() {}
      }
      ```

Test execution sequence:

 1. Method1
 2. Method2
 3. Method3

## *33) What Is Object Repository? How Can We Create an Object Repository in Selenium?*

Object repository refers to the collection of web elements belonging to the Application Under Test (AUT) along with their locator values. In the context of Selenium, objects can be stored in an Excel spreadsheet that can be filled within the script whenever needed.

## *40) How to Enter Text in a Text Box Using Selenium WebDriver?*

Using the **sendKeys()** method, we can enter text into the text box.

## *41) What Are the Different Deployment Strategies for End Users?*

- Pilot
- Gradual Rollout
- Phased Implementation
- Parallel Implementation

## *42) Explain How You Can Find Broken Links on a Page Using Selenium WebDriver*

Let's assume the interviewer presents 20 links on a web page, and we need to check which of these 20 links are working and which ones are broken.

The solution is to send HTTP requests to all the links on the web page and analyze the response. Whenever you use the **driver.get()** method to navigate to a URL, it will respond with a status of 200-OK. This indicates that the link is working and was successfully retrieved. Any other status indicates that the link is broken.

First, we have to use the anchor tags `<a>` to identify the different hyperlinks on the web page.

For each `<a>` tag, we can use the 'href' attribute value to get the hyperlinks and then analyze the response received when used in the **driver.get()** method.

## *43) Which Technique Should Be Considered in the Script If There Is No ID or Name of the Frame?*

If the frame's name and ID are not available, we can use **frame by index**. For example, if there are 3 frames on a web page, and none of them have a frame name or ID, we can select them using a frame index attribute (zero-based).

Each frame will have an index number, with the first one being "0", the second one "1", and the third one "2".

      driver.switchTo().frame(int arg0);

## *44) How to Take Screenshots in Selenium WebDriver?*

You can capture screenshots using the **TakeScreenshot** function. With the help of the **getScreenshotAs()** method, you can save the captured screenshot.

Example:

       scrFile = ((TakeScreenshot)driver).getScreenshotAs(outputtype.FILE)

## *45) Explain How You Would Log into Any Site if It Shows an Authentication Pop-Up for Username and Password?*

If there is a login pop-up, we need to use the explicit command and check if the alert is actually present. The following code helps understand the use of the explicit command.

       WebDriverWait wait = new WebDriverWait(driver, 10);
       Alert alert = wait.until(ExpectedConditions.alertIsPresent());
       alert.authenticateUsing(new UserAndPassword(**username**, **password**));

## *46) How to Skip a Method or Code Block in TestNG?*

To skip a specific test method or code, you can set the 'enabled' parameter in the test annotation to *false*.

          @Test(enabled=false)

## *47) Explain Briefly What the Below Code Snippet Indicates?*

      WebElement sample = driver.findElement(By.xpath("//[contains(text(), 'data')]"));

It defines a *sample* variable of type WebElement and uses an Xpath search to initialize it with a reference to an element containing the text value "data".
