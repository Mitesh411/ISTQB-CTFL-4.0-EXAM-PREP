
## Chapter 4: Test Analysis and Design

### Question 1

Which test technique is based on the internal structure of the test object and requires knowledge of the code?

A. Black-box testing  
B. White-box testing  
C. Experience-based testing  
D. Equivalence partitioning

**Correct Answer**: B  
**Explanation**: White-box testing relies on the internal structure and code of the test object, unlike black-box or experience-based techniques.

### Question 2

In equivalence partitioning, what is the coverage criterion for achieving 100% coverage?

A. Test all possible combinations of partitions.  
B. Test one value from each partition, including valid and invalid partitions.  
C. Test only the boundary values of each partition.  
D. Test all states in the system.

**Correct Answer**: B  
**Explanation**: For 100% coverage in equivalence partitioning, one test case per partition (valid and invalid) is sufficient, as all values in a partition are expected to behave similarly.

### Question 3

What is the main focus of Boundary Value Analysis (BVA)?

A. Testing all possible combinations of conditions.  
B. Testing the boundaries of equivalence partitions.  
C. Testing the internal logic of the code.  
D. Testing based on tester experience.

**Correct Answer**: B  
**Explanation**: BVA focuses on testing the boundary values of equivalence partitions, where defects are more likely to occur.

### Question 4

In decision table testing, what does a column represent?

A. A single state in the system.  
B. A unique combination of conditions and associated actions.  
C. A single test case covering all conditions.  
D. A boundary value for an input.

**Correct Answer**: B  
**Explanation**: Each column in a decision table represents a decision rule, defining a unique combination of conditions and the resulting actions.

### Question 5

Which coverage criterion in state transition testing ensures that both valid and invalid transitions are tested?

A. All states coverage  
B. Valid transitions coverage  
C. All transitions coverage  
D. 0-switch coverage

**Correct Answer**: C  
**Explanation**: All transitions coverage requires testing all valid transitions and attempting invalid transitions, making it the most comprehensive criterion.

### Question 6

What does 100% branch coverage guarantee in white-box testing?

A. All defects in the code are detected.  
B. All statements and branches are exercised.  
C. All possible paths through the code are tested.  
D. All requirements are implemented.

**Correct Answer**: B  
**Explanation**: 100% branch coverage ensures all branches (conditional and unconditional) are exercised, which also guarantees 100% statement coverage.

### Question 7

Which experience-based test technique involves simultaneously designing, executing, and evaluating tests while learning about the system?

A. Error guessing  
B. Exploratory testing  
C. Checklist-based testing  
D. Boundary value analysis

**Correct Answer**: B  
**Explanation**: Exploratory testing involves designing, executing, and evaluating tests concurrently while exploring the system, often using session-based approaches.

### Question 8

What is a key characteristic of a good user story according to the INVEST criteria?

A. It should be large and complex.  
B. It should be testable.  
C. It should depend on other user stories.  
D. It should avoid stakeholder collaboration.

**Correct Answer**: B  
**Explanation**: According to INVEST, good user stories should be Independent, Negotiable, Valuable, Estimable, Small, and Testable.

### Question 9

In Acceptance Test-driven Development (ATDD), when are test cases created?

A. After the user story is implemented.  
B. Before the user story is implemented.  
C. During the execution of the user story.  
D. Only after defects are found.

**Correct Answer**: B  
**Explanation**: ATDD is a test-first approach where test cases are created before implementing the user story, based on its acceptance criteria.

### Question 10

Which format is commonly used for writing scenario-oriented acceptance criteria?

A. Bullet point verification list  
B. Given/When/Then format  
C. Tabulated input-output mapping  
D. Free-form text

**Correct Answer**: B  
**Explanation**: The Given/When/Then format is commonly used for scenario-oriented acceptance criteria, particularly in Behavior-Driven Development (BDD).
