# Stress Testing

Stress testing is a type of testing that assesses the stability and reliability of an application. Its objective is to measure the robustness and error-handling capability of a software under extreme load conditions, ensuring that the application does not crash under stress situations. Here, testing goes beyond usual operational points.

In software engineering, stress testing is also known as resistance testing or overwhelming the system for a short period to validate its working capacity.

The most prominent use of this technique is to determine the threshold beyond which software or a system breaks, also checking if the system demonstrates proper error handling under extreme conditions.

## Importance of Stress Testing

Consider the real-life scenarios below to understand the need for Stress Testing:

- During an event, an online shopping site may experience a sudden spike in traffic or when it advertises a promotion.
- When a blog is mentioned in a famous newspaper, it observes a sudden increase in accesses.

It is imperative that stress testing be applied to accommodate these abnormal traffic situations; failure to accommodate can result in loss of revenue and reputation.

This technique is also extremely important for the following reasons:

1. Verify if the system functions under abnormal conditions.
2. Display an appropriate error message when the system is under stress.
3. System failure under extreme conditions can result in significant lost profits.
4. It is better to be prepared for abnormal traffic situations.

## Objectives of Stress Testing

Analyzing the system's behavior after a failure, for successful recovery, the system must display an error message consistent with extreme usage conditions.

To conduct stress testing, sometimes enormous sets of data can be used and lost during testing. Testers must not lose this confidential data during the process.

The primary purpose is to ensure that the system recovers after a failure, which is called recoverability.

## Types of Stress Testing

Stress tests can be classified into:

### Distributed Stress Testing

In this mode, the test is performed through all the server's clients.

The stress server's function is to distribute a set of stress tests to all clients and track each one's status. After the client contacts the server, it will add the client's name and send test data.

Meanwhile, client machines send signals indicating they are connected to the server. If the server does not receive any signals from the machines, it needs to be checked for further debugging processes.

![Distributed Stress Testing](https://www.guru99.com/images/s4.png)

As shown in the image, the test can be specific to certain users or general across all connected clients.

Nightly integrations are the best option for executing these scenarios. Large server groups need a more efficient method to determine which computers had stress failures that need verification.

### Application Stress Testing

Here, we focus on locating defects related to data locks and blocks, network issues, and performance bottlenecks in an application.

### Transactional Stress Testing

It applies the test to one or more transactions between two or more applications. It is used for system tuning and optimization. It is important to note that a transaction is significantly more complex than a request.

### Systemic Stress Testing

It is integrated stress testing that can be applied to multiple systems running on the same server, used to locate defects where one application generates data blocking in another.

### Exploratory Stress Testing

Applied to verify the system in unusual parameters or conditions unlikely to occur in a real scenario.
Used to find unexpected defects such as:

- A large number of users logged in simultaneously.
- If virus scans are initiated on all machines simultaneously.
- If the database went offline when accessed from a site.
- When a vast volume of data is inserted into the database at once.

## How to Conduct Stress Testing

1. **Stress Testing Planning:** Collect data, analyze the system, and define objectives.
2. **Automation Script Creation:** In this phase, automation scripts are created, and test data is generated for stress scenario.
3. **Script Execution and Result Storage:**
4. **Result Analysis:**
5. **Adjustments and Optimization:** In this stage, final adjustments are made in the system; settings are changed, and code is optimized to achieve the desired benchmark.

Finally, reapply the adjusted cycle to verify if it has produced the desired results. For example, it is not uncommon to apply 3 or 4 cycles of stress testing to achieve the desired performance.

## Metrics for Stress Testing

- **Measuring Scalability and Performance:**
  - **Pages/s:** Measures how many pages had request/s.
  - **Throughput Rate:** Basic metric, data volume in Response/s.
  - **Scenarios:** Number of planned test scenarios vs the number of times a client was executed.
- **Application Response:**
  - **Number of Hits:** Average time to fetch an image or page.
  - **Time to First Byte:** Time spent for the return of the first byte of data or information.
  - **Page Load Time:** Time taken to retrieve all information on the page.
- **Failures:**
  - **Connection Failures:** Number of failed connections rejected by the client (weak signal).
  - **Scenario Failures:** Number of scenarios that failed.
  - **Hit Failures:** Number of failed attempts made by a system (broken connections or images not viewed).
