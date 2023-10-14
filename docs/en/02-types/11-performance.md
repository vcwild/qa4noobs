# Performance Testing

Performance testing is a subset of Performance Engineering, a process that evaluates the behavior of a system under various extreme conditions.

The main goal is to monitor and improve key performance indicators such as response time, throughput, memory usage, CPU utilization, and more.

The three objectives are:

- **Speed:** Response time to requests;
- **Scalability:** Maximum user load the application can handle;
- **Stability:** Determines if the API remains stable under various loads.

## Why Perform Performance Testing?

Features and functionalities supported by a software are not the only concerns. API performance, including response time, reliability, resource usage, and scalability, is also crucial.

The goal is not to find bugs but to eliminate performance bottlenecks.

Performance testing is applied to provide investors with insights about their applications regarding performance factors. More importantly, it reveals what needs improvement before the product goes to market.

Without this testing, software would likely suffer from issues such as poor performance under stress, inconsistencies across different operating systems, and low usability.

The test determines if the software meets performance parameters under predicted workloads. Applications released to the market with low performance metrics due to non-existent or inadequate testing will likely gain a bad reputation and fail to meet sales objectives.

Moreover, critical applications such as space launch programs and medical equipment must undergo performance testing to ensure full functionality.

### Types of Performance Testing

1. **Load Testing:** Checks the application's ability to perform under **predictable** user loads to identify bottlenecks before the application is deployed.
2. **Stress Testing:** Involves testing the application under **extreme** loads to assess how the system handles traffic and data processing. The goal is to identify the breaking point of the application.
3. **Spike Testing:** Tests the software's reaction to a sudden spike in user-generated load.
4. **Endurance Testing:** Ensures that the software can handle the expected load over a long period of time.
5. **Volume Testing:** Large amounts of data are inserted into the database, and the overall system behavior is monitored. The goal is to check performance at different database volume levels.
6. **Scalability Testing:** Determines the effectiveness of the software under increasing loads to accommodate a growing number of users. This helps plan capacity improvements for the system.
7. **Capacity Testing:**

## Common Performance Issues

Most performance problems revolve around speed, response time, load time, and poor scalability. Speed is one of the most crucial attributes; a slow application will lose potential users. Performance testing ensures that an application runs fast enough to maintain a user's attention and interest. In the following list, we examine how speed is a constant concern.

- **High Load Time:** Load time is typically the period an application takes to start; it should generally be as short as possible. While some applications cannot be started in less than a minute, the loading time should ideally be under a few seconds, if possible.
- **Inadequate Response Time:** This refers to the time taken between user input and the application's output for that input. It should generally be very fast; if the wait is too long, the user loses interest.
- **Poor Scalability:** A software product suffers from poor scalability when it does not support the expected number of users or when it does not accommodate a satisfactory range of users.
- **Bottleneck:** These are obstructions in a system that degrade overall performance. They occur when code or hardware errors cause a decrease in throughput under certain loads. The key to locating a bottleneck is finding the section of code causing the slowdown and fixing it. Bottlenecks are commonly resolved by fixing the lines of code or adding hardware. Some common bottlenecks include:
  - CPU Usage;
  - Memory Usage;
  - Network Usage;
  - Operating System Limitations;
  - Disk Usage;

## How to Perform Performance Testing

The methodologies for performance testing can vary, but the goal remains consistent.

Generic flowchart of performance testing:

![Performance Testing Process](https://www.guru99.com/images/performance_testing_process.png)

1. **Identify the Test Environment:**
   Understand the physical testing environment, production, and available testing tools. Understand details of the hardware, software, and network configurations used during testing before starting it. This process promotes greater efficiency.
2. **Identify Performance Acceptance Criteria:**
   This includes throughput objectives and constraints, response times, and resource allocation. It is also necessary to identify project success criteria beyond these objectives and constraints. Testers should also be empowered to define performance criteria and goals since project specifications usually will not include a wide enough variety of benchmarks for performance. If possible, finding a similar application for comparison purposes can help in defining performance goals.
3. **Planning and Design of Performance Tests:**
   Determine how usability will vary among end users to identify key test scenarios for all possible use cases. It is necessary to simulate a variety of end users, plan data for performance testing, and limit the metrics to be collected.
4. **Test Environment Setup:**
   Prepare the testing environment before its execution; also, organize tools and other resources.
5. **Implement Test Design:**
   Create performance tests according to the original design.
6. **Execute the Tests**
7. **Analyze, Tune, and Retest:**
   Consolidate, analyze, and share test results. Then, tune specifically and retest to observe improvements or declines in performance. Since improvements generally decrease with each test, stop when the bottleneck is caused by the CPU. Then consider the option of increasing the CPU power.

## Performance Testing Metrics: Monitored Parameters

- CPU Usage: The amount of time a processor spends executing active threads.
- Memory Usage: Physical space available in memory for processes on the computer.
- Disk Time: The period during which the disk is occupied to execute a read or write request.
- Private Bytes: Number of bytes a process has allocated that cannot be shared among other processes. These are used to measure memory leaks and memory usage.
- Dedicated Memory: Amount of virtual memory used.
- Memory Pages per Second: Number of pages written or read from the disk to resolve serious page faults. Serious faults are identified when code not currently under test group receives a call from somewhere else and is fetched from a disk.
- Page Faults per Second: The overall rate at which faults are processed by the processor. Again, these occur when a process requires code from outside the group under test.
- CPU Interrupts per Second: Average number of hardware interrupts a processor is receiving and processing every second.
- Disk Queue Length: Average number of requests for read and writes in the queue for the selected disk during a sampling time.
- Network Output Queue Length: Queue length of output packets. Anything above 2 means a delay, and the bottleneck needs to be resolved.
- Total Bytes on the Network per Second: Rate at which bytes are sent and received on the interface, including framing characters.
- Response Time: Time between user request and receipt of the first character of the response.
- Throughput: Rate at which a computer or network receives requests per second.
- Connection Pool Count: Number of user requests handled by a connection pool. The more requests handled by connections in the pool, the better the performance.
- Maximum Active Sessions;
- Hit Rates: Involves the number of SQL statements processed by data in the cache instead of expensive I/O operations. This is a good starting point for bottleneck solutions.
- **Hits per Second:** The number of successful hits a web server receives during each second of a load test;
- **Undo Segment:** Amount of data that can be rolled back at any given time;
- **Database Locks:** Locking of tables and databases needs to be monitored and adjusted carefully;
- **Longest Waits:** Monitored to determine which wait times can be reduced when dealing with how quickly data is fetched into memory;
- **Thread Count:** The health of an application can be measured by the number of threads that are active and running;
- **Waste Collection:** Refers to the return of unused memory back to the system. Waste collection needs to be monitored for efficiency.

## Examples of Test Cases

1. Verify that the response time is not more than 4 seconds when 1000 users access the site simultaneously;
2. Check if the application's response time under load is within acceptable parameters when network connectivity is low;
3. Determine the maximum number of users the application can handle before crashing;
4. Verify the database runtime when 500 records are read/written simultaneously;
5. Verify the CPU and memory usage of the application and database under peak load conditions;
6. Validate the application's response time under low, normal, moderate, and excessive load conditions.

## Performance Testing Tools

Some of the most popular tools for performance testing are:

- [LoadNinja](https://bit.ly/3knoPpQ)
- [HeadSpin](https://bit.ly/3D8p93N)
- [BlazeMeter](https://guru99.live/vVYFyu)
- [HPLoadRunner](https://www.guru99.com/loadrunner-v12-tutorials.html)
- [JMeter](https://www.guru99.com/jmeter-tutorials.html)

