# **White Box Testing**

Some of the key concepts defining white box testing are:

- Involves testing the internal mechanisms of an application; the tester must be familiar with the programming language used in the application being tested.

- Code is visible to testers.

- Identifies areas of a program that have not been exercised by a set of tests.

A technique where the internal structure, design, and code are tested to verify the input-output flow and improve design, usability, and security.

Here, the code is visible to testers, also referred to as Transparent Box Testing, Open Box Testing, Glass Box Testing, etc.

## Test Targets

Some of the main targets of white box testing are:

- Internal security vulnerabilities
- Broken or poorly structured paths in the coding process
- Flow of inputs specified by the code
- Expected output
- Functionality of conditional loops
- Testing of each statement, object, and function individually

## How to Perform White Box Testing?

Let's go through the step-by-step process of performing white box testing:

### 1. Understand the Code

The first thing a tester will typically do is learn and understand the application's source code.
Since White Box Testing involves testing the internal mechanisms of an application, the tester must be familiar with the programming language used in the application being tested.
Additionally, the tester must be aware of coding best practices.
Security is often a primary goal of software testing; the tester must locate security breaches and prevent attacks from hackers and users who can inject malicious code into the application.

### 2. Create Test Cases and Execute Them

The second basic step for white box testing involves testing the source code for proper flow and structure.

One way to do this is by writing additional code to test the source code.

The tester will develop small tests for each process or series of processes in the application; this method requires the tester to have an intimate knowledge of the code and is often done by the developer.

Other methods include manual testing, trial and error, and the use of testing tools.

#### Example of White Box Testing

Consider a simple code example for white box testing:

```c
void printme(int a, int b) {     // Printme is a function
  int result = a + b;

  if (result > 0)
    print("Positive", result)
  else
    print("Negative", result)
}                              // End of the source code
```

The goal of White Box Testing in software engineering is to verify all decision branches, loops, and statements in the code.

### White Box Testing Techniques

Most techniques involve Code Coverage analysis, which fills gaps in a Test Case.

This identifies areas of a program that have not been exercised by a set of tests.

Once gaps are identified, you create test cases to verify the untested parts of the code, enhancing the product's quality.

Automated tools are available to apply Code Coverage analysis.

### Forms of Test Coverage

Below are some code coverage analysis techniques a tester can use:

1. **Statement Coverage:** This technique requires that all possible code statements are tested at least once during the testing process.

2. **Branch Coverage:** This technique checks all possible paths (if/else and other conditional loops) in an application.

### Types of White Box Testing

Let's look at how white box tests are categorized:

#### **Unit Testing**

Often the first type of test applied to a program.

Unit testing is performed on each unit or block of the code during its development. It is essentially done by the developer, who develops a few lines of code, a single function, or an object and tests to ensure it works before moving forward.

This type helps identify most bugs in the early stages of software development, being cheaper and faster to fix.

#### **Memory Leak Testing**

Memory leaks are the main causes of slow applications. A QA specialist experienced in detecting them is essential for applications running slowly.

#### **Penetration Testing**

In this test, the tester/dev has complete information about the source code, network details, IP addresses involved, and all server information where the application runs.
The goal is to attack the code from various angles to expose security threats.

### White Box Testing Tools

Here are some white box testing tools:

- [EclEmma](https://www.eclemma.org/download.html)
- [NUnit](http://nunit.org/)
- [PyUnit](https://www.guru99.com/python-unit-testing-guide.html)
- [HTMLUnit](http://htmlunit.sourceforge.net/)
- [CppUnit](https://sourceforge.net/projects/cppunit/)
