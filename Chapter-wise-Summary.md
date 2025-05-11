
<p align="center"> <a href="https://www.istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/" title="Certified Tester Foundation Level (CTFL) v4.0"> <img src="https://www.istqb.org/wp-content/uploads/2024/10/istqb-ctfl-4-logo.jpg.avif" width="200" alt="ISTQB CTFL 4.0 Logo"/>


### Chapter Weightage Breakdown


| Chapter | Weight | Questions | Pages | Duration | Topics |
| ------ | ------ | ------ | ------ | ------ | ------ |
| 1 | 20 % | 8 |  14–22 | 3–4 days | Fundamentals of Testing |


# Chapter 1: Fundamentals of Testing
**1.1 What is Testing ?**

- Software testing is a set of activities to discover defects and evaluate software quality

- Testing involves both verification (meeting specified requirements) and validation (meeting user needs)

- Testing can be dynamic (executing software) or static (reviews, analysis without execution)

- Testing is a technical activity requiring specialized knowledge, analytical skills and critical thinking

**Test Objectives include:**

- Evaluating work products

- Finding defects and causing failures

- Ensuring required coverage

- Reducing quality risk

- Verifying requirements fulfillment

- Checking compliance with regulations

- Providing information to stakeholders

- Building confidence in product quality

- Validating that the product works as expected

  
  
**Testing vs Debugging**

- Testing identifies failures through dynamic testing or defects through static testing

- Debugging involves reproducing failures, diagnosing defects, fixing them, and verification through confirmation testing

- Regression testing verifies fixes don't cause problems elsewhere

**1.2 Why is Testing Necessary ?**
*Testing's Contributions to Success:*

- Provides cost-effective defect detection

- Evaluates software quality throughout development

- Represents users' needs throughout development

- Helps meet contractual and regulatory requirements


*Testing and Quality Assurance (QA):*

- Testing is product-oriented and corrective (quality control)

- QA is process-oriented and preventive

- QA focuses on implementing and improving processes

- Both use test results, but for different purposes

*Errors, Defects, Failures, and Root Causes:*

- Human errors produce defects, which may result in failures

- Defects can be found in documentation, code, or supporting work products

- Environmental conditions can also cause failures

- Root cause analysis identifies fundamental reasons for problems

**1.3 Testing Principles**

- Testing shows defect presence, not absence - Testing reduces likelihood of undiscovered defects but cannot prove correctness

- Exhaustive testing is impossible - Focus efforts using test techniques, prioritization, and risk-based approaches

- Early testing saves time and money - Finding defects early reduces cost of quality

- Defects cluster together - Most defects are in a small number of components (Pareto principle)

- Tests wear out - Repeated tests become less effective in finding new defects

- Testing is context dependent - No single universal approach works for all situations

- Absence-of-defects fallacy - A system free of defects can still fail to meet users' needs

**1.4 Test Activities, Testware and Test Roles**
*Test Activities include:*

- Test planning: Defining objectives and approach

- Test monitoring and control: Checking progress and taking necessary actions

- Test analysis: Identifying testable features and conditions

- Test design: Creating test cases and identifying coverage items

- Test implementation: Preparing testware needed for execution

- Test execution: Running tests and analyzing results

- Test completion: Creating reports and archiving testware

*Test Process in Context:*

Testing approach depends on contextual factors like:

- Stakeholders' needs

- Team skills and experience

- Business domain and criticality

- Technical factors and constraints

- Project constraints

- Organizational factors

- Development lifecycle

- Available tools

*Testware includes:*

- Planning work products (test plans, schedules)

- Monitoring work products (progress reports)

- Analysis work products (test conditions)

- Design work products (test cases, data requirements)

- Implementation work products (test procedures, scripts)

- Execution work products (test logs, defect reports)

- Completion work products (completion reports, lessons learned)

*Traceability:*

- Links test basis elements to testware and results

- Supports coverage evaluation and impact analysis

- Facilitates audits and governance requirements

- Makes reporting more understandable to stakeholders

*Roles in Testing:*

- Test management role: Responsible for planning, monitoring, control, completion

- Testing role: Responsible for analysis, design, implementation, execution

- Roles may be performed by different people at different times

**1.5 Essential Skills and Good Practices**
*Generic Skills Required for Testing:*

- Testing knowledge

- Thoroughness and attention to detail

- Good communication skills

- Analytical and critical thinking

- Technical and domain knowledge

*Whole Team Approach:*

- Any team member with necessary skills can perform any task

- Team members share responsibility for quality

- Co-location facilitates communication

- Testers work closely with developers and business representatives

- May not be appropriate in all contexts (e.g., safety-critical systems)

*Independence of Testing:*

- Independence makes testers more effective at finding defects

- Different levels of independence: no independence (self-testing), peer testing, independent test team, external testers

- Benefits include recognizing different kinds of failures, challenging assumptions

- Drawbacks include potential isolation, communication problems, reduced developer responsibility

**[⬆ Back to Top](#Chapter1:FundamentalsofTesting)**


### Chapter Weightage Breakdown


| Chapter | Weight | Questions | Pages | Duration | Topics |
| ------ | ------ | ------ | ------ | ------ | ------ |
| 2 | 16 % | 6 | 23–30 | 2–3 days | Testing in SDLC |

# Chapter 2: Testing Throughout the Software Development Lifecycle

**2.1 Testing in the Context of a Software Development Lifecycle (SDLC)**

*Impact of SDLC on Testing:*

- SDLC choice affects scope, timing, documentation, techniques, automation, and tester roles

- Sequential models (waterfall) limit early dynamic testing

- Iterative/incremental models allow both static and dynamic testing in each iteration

- Agile approaches favor lightweight documentation and automation

*Good Testing Practices across SDLCs:*

- Every development activity has a corresponding test activity

- Different test levels have specific objectives to avoid redundancy

- Test analysis/design begins during corresponding development phase

- Testers review work products as soon as drafts are available

*Test-Driven Development Approaches:*

- Test-Driven Development (TDD): Tests written before code, code implemented to pass tests

- Acceptance Test-Driven Development (ATDD): Tests derived from acceptance criteria

- Behavior-Driven Development (BDD): Expresses behavior in natural language (Given/When/Then)

*DevOps and Testing:*

- DevOps creates synergy between development and operations

- Benefits include fast feedback, shift left, stable test environments, increased focus on non-functional testing

- Challenges include establishing delivery pipeline and maintaining automation tools

*Shift Left:*

- Performing testing activities earlier in the SDLC
- Practices include specification reviews, writing tests before code, CI/CD, early static analysis
- May require more effort early but saves costs later

*Retrospectives for Process Improvement:*

- Meetings to discuss successes, challenges, and improvements
- Results typically included in test completion reports
- Benefits include increased effectiveness, improved testware, team learning, better cooperation

**2.2 Test Levels and Test Types**

*Test Levels:*

- Component testing: Testing isolated components, often by developers

- Component integration testing: Testing interfaces between components

- System testing: Testing complete system behavior and capabilities

- System integration testing: Testing interfaces between systems

- Acceptance testing: Validating readiness for deployment (user, operational, contractual, regulatory)

*Test Types:*

- Functional testing: Evaluates what the system should do

- Non-functional testing: Evaluates how well the system behaves (performance, compatibility, usability, reliability, security, etc.)

- Black-box testing: Derives tests from specifications without knowledge of internal structure

- White-box testing: Derives tests from system implementation or internal structure

*Confirmation and Regression Testing:*

- Confirmation testing: Verifies that defects have been fixed

- Regression testing: Ensures changes haven't caused adverse effects elsewhere

-Both are needed at all test levels when changes are made

- Regression testing is a good candidate for automation

**2.3 Maintenance Testing**

- Can involve planned releases or unplanned hotfixes

- Scope depends on risk level, system size, and change size

- Triggers include modifications, environment upgrades/migrations, and system retirement

- May require data archiving tests for retiring systems

# Chapter 3: Static Testing

**3.1 Static Testing Basics**

Static testing involves evaluating software work products without executing the code. It includes manual examination (reviews) and tool-assisted evaluation (static analysis) of various work products like code, specifications, and documentation.

*Key points:*

- Unlike dynamic testing, static testing doesn't require software execution

- Can be performed early in the SDLC

- Applies to both verification and validation

- Used by testers, business representatives, and developers in collaborative activities

*Work Products Examinable by Static Testing:*

- Requirements specifications

- Source code

- Test plans and test cases

- Product backlog items

- Test charters

- Project documentation

- Contracts and models

*Value of Static Testing:*

- Allows defect detection in early SDLC phases

- Can identify defects not detectable by dynamic testing (e.g., unreachable code)

- Builds confidence in work products

- Improves communication between stakeholders

- Reduces overall project costs despite initial investment

- More efficient for detecting certain code defects

*Differences Between Static and Dynamic Testing:*

- Static testing finds defects directly; dynamic testing causes failures that require analysis

- Static testing can identify defects in rarely executed code paths

- Static testing applies to non-executable work products

- Static testing measures quality characteristics independent of code execution

*Defects Easier to Find Through Static Testing:*

- Requirements inconsistencies and ambiguities

- Design defects (inefficient structures, poor modularization)

- Coding defects (undefined variables, unreachable code)

- Standards deviations

- Interface specification issues

- Security vulnerabilities

- Test coverage gaps

**3.2 Feedback and Review Process**
*Benefits of Early and Frequent Stakeholder Feedback:*

- Allows early communication of quality problems

- Prevents misunderstandings about requirements

- Helps development teams understand what they're building

- Focuses development on valuable features

**Review Process Activities:**

*Planning:* Define scope, purpose, work product, quality characteristics, areas to focus on, exit criteria, and timeframes

*Review Initiation:* Ensure participants have access to work products and understand responsibilities

*Individual Review:* Reviewers assess quality and identify anomalies using review techniques

*Communication and Analysis:* Discuss anomalies and decide on their status, ownership, and required actions

*Fixing and Reporting:* Create defect reports and follow up on corrective actions

**Roles and Responsibilities in Reviews:**

*Manager:* Decides what to review and provides resources

*Author:* Creates and fixes the work product under review

*Moderator/Facilitator:* Ensures effective review meetings

*Scribe/Recorder:* Collects anomalies and records review information

*Reviewer:* Performs the reviews

*Review Leader:* Takes overall responsibility for the review

**Review Types:**

*Informal Review:* No defined process or formal outputs; focuses on detecting anomalies

*Walkthrough:* Led by the author; aims to evaluate quality, educate reviewers, gain consensus, and detect anomalies

*Technical Review:* Led by a moderator with technically qualified reviewers; aims to reach consensus, make decisions, detect anomalies, and evaluate quality

*Inspection:* Most formal review type; follows complete generic process; aims to find maximum anomalies

*Success Factors for Reviews:*

- Clear objectives and measurable exit criteria

- Appropriate review type selection

- Reviews performed on small chunks of material

- Adequate feedback to stakeholders

- Sufficient preparation time

- Management support

- Reviews as part of organizational culture

- Adequate training for participants

- Effective meeting facilitation

# Chapter 4: Test Analysis and Design

**4.1 Test Techniques Overview**

Test techniques support testers in determining what to test (analysis) and how to test (design) by helping develop sufficient test cases systematically.

*Three main categories of test techniques:*

*Black-box techniques:* Based on analysis of specified behavior without reference to internal structure

*White-box techniques:* Based on analysis of the test object's internal structure and processing

*Experience-based techniques:* Utilize testers' knowledge and experience for test design and implementation 

**4.2 Black-box Test Techniques**
*4.2.1 Equivalence Partitioning (EP)*

- Divides data into partitions (equivalence partitions) where elements are processed similarly

- Assumes one test per partition is sufficient to detect defects

- Partitions include valid (should be processed) and invalid (should be rejected) values

- Coverage measured as percentage of partitions exercised

- For multiple parameter inputs, "Each Choice coverage" requires testing each partition at least once

*4.2.2 Boundary Value Analysis (BVA)*

- Focuses on testing boundaries of ordered equivalence partitions

- Based on the principle that developers often make errors at boundary values

*Two versions covered:*

2-value BVA: Tests boundary value and closest neighbor in adjacent partition*

*3-value BVA: Tests boundary value and both neighbors (more rigorous)*

- Coverage measured as percentage of boundary values (and neighbors) exercised

*4.2.3 Decision Table Testing*


- Used for testing combinations of conditions that result in different outcomes

- Each column represents a decision rule with unique combinations of conditions

- Notation includes T (true), F (false), - (irrelevant), N/A (infeasible)

- Coverage items are columns with feasible combinations

- Useful for identifying overlooked combinations of conditions

*4.2.4 State Transition Testing*

- Models system behavior through states and transitions

- Transitions triggered by events, possibly with guard conditions

*Three coverage criteria discussed:*


- All states coverage: Exercise all states

- Valid transitions coverage: Exercise all valid transitions

- All transitions coverage: Exercise all valid transitions and attempt invalid ones

- Full all transitions coverage is recommended for mission and safety-critical software

**4.3 White-box Test Techniques**

*4.3.1 Statement Testing*

- Coverage items are executable statements in code

- Measures percentage of statements exercised by test cases

- 100% coverage ensures all executable statements executed at least once

- May not detect all defects (e.g., data-dependent defects)

*4.3.2 Branch Testing*

- Coverage items are branches in code's control flow

- Measures percentage of branches exercised by test cases

- 100% coverage ensures all conditional and unconditional branches exercised

- Branch coverage subsumes statement coverage

*4.3.3 Value of White-box Testing*

- Considers entire software implementation

- Can detect defects even with vague/incomplete specifications

- Can be used in static testing before code execution

- Provides objective measurement of coverage

- Weakness: may not detect omission of requirements

**4.4 Experience-based Test Techniques**

*4.4.1 Error Guessing*


- Anticipates errors based on tester's knowledge of:


- Past application behavior

- Typical developer mistakes

- Failures in similar applications

- Fault attacks implement error guessing by creating lists of possible errors and designing tests to expose them

*4.4.2 Exploratory Testing*


- Tests are simultaneously designed, executed, and evaluated

- Often performed using session-based testing within defined time boxes

- Guided by test charters containing objectives

- Useful when specifications are inadequate or time pressure exists

- Effectiveness depends on tester's experience and skills

*4.4.3 Checklist-based Testing*

- Tests cover conditions from a checklist

- Checklists built from experience and understanding of system failures

- Items typically phrased as questions

- Checklists should be regularly updated based on defect analysis

- Provides guidelines and consistency without detailed test cases

**4.5 Collaboration-based Test Approaches**

*4.5.1 Collaborative User Story Writing*

- User stories represent valuable features for users/purchasers

*Three critical aspects (3 C's):*


- Card: Medium describing the story

- Conversation: Explains usage

- Confirmation: Acceptance criteria


Good user stories follow INVEST principles: Independent, Negotiable, Valuable, Estimable, Small, Testable

*4.5.2 Acceptance Criteria*

- Conditions implementation must meet to be accepted

- Used to define scope, reach consensus, describe scenarios, and serve as testing basis

*Common formats:*


- Scenario-oriented (Given/When/Then format)

- Rule-oriented (verification lists or input-output mapping)



*4.5.3 Acceptance Test-driven Development (ATDD)*

- Test-first approach where test cases are created before implementation

- Involves specification workshops to analyze and clarify user stories

- Tests based on acceptance criteria serve as examples of software functionality

- Should cover both positive paths and negative scenarios

- Test cases can be automated by developers during implementation

### Chapter Weightage Breakdown


| Chapter | Weight | Questions | Pages | Duration | Topics |
| ------ | ------ | ------ | ------ | ------ | ------ |
| 5 | 23 % | 9 | 46–56 | 4–5 days | Test Management |

# Chapter 5: Managing the Test Activities

**5.1 Test Planning**

*Purpose and Content of a Test Plan:*

- Documents test objectives, resources, and processes. Serves as a communication tool for team members and stakeholders. Typical content includes context of testing, assumptions and constraints, stakeholders, communication protocols, risk register, test approach, budget, and schedule.

*Tester's Contribution to Iteration and Release Planning:*

- In iterative SDLCs, testers participate in both release planning (defining product backlog, refining user stories) and iteration planning (detailed risk analysis, determining testability of user stories).

*Entry and Exit Criteria:*

- Entry criteria define preconditions for starting test activities, while exit criteria define conditions for declaring testing complete. Examples of entry criteria include resource availability and testware readiness. 

- Exit criteria may include coverage measures, defect metrics, or time/budget constraints.

*Estimation Techniques: Four methods are highlighted:*

- Estimation based on ratios (using historical data)

- Extrapolation (using current project measurements)

- Wideband Delphi (iterative expert-based estimation)

- Three-point estimation (optimistic, most likely, and pessimistic estimates)


*Test Case Prioritization:* 


- Strategies include risk-based, coverage-based, and requirements-based prioritization. Test execution order must consider dependencies and resource availability.

*Test Pyramid:* 


- A model showing different granularity levels of tests. Lower layers represent small, isolated, fast tests while higher layers represent complex, end-to-end tests.

*Testing Quadrants:*

Groups test types into four categories:


- Q1 (Technology-facing, supporting team): Component and integration tests

- Q2 (Business-facing, supporting team): Functional tests, user story tests

- Q3 (Business-facing, critiquing product): Exploratory and usability testing

- Q4 (Technology-facing, critiquing product): Non-functional tests

**5.2 Risk Management**

*Risk Definition:*

- A potential event causing adverse effects, characterized by likelihood and impact.

*Project vs Product Risks:* 

- Project risks relate to management issues (organizational, people, technical, supplier). Product risks relate to quality characteristics (functionality, performance, security).

*Product Risk Analysis:* 

- Consists of risk identification and assessment to focus testing efforts. Influences test thoroughness, scope, and techniques.

*Product Risk Control:* 

- Includes risk mitigation and monitoring. Mitigation actions include selecting appropriate testers, independence levels, test techniques, and test types.

**5.3 Test Monitoring, Test Control and Test Completion**

*Test Monitoring:* 

- Gathering information to assess progress and evaluate exit criteria.

*Test Control:* 

- Using monitoring information to provide guidance and corrective actions.

*Test Completion:* 

- Collecting data from completed activities to consolidate experience.

*Metrics Used in Testing:*

- Various metrics track progress, quality, defects, risk, coverage, and costs.

*Test Reports:* 

- Progress reports support ongoing control; completion reports summarize test activities.

*Communicating Test Status:* 

- This can be done through verbal communication, dashboards, electronic channels, online documentation, or formal reports.

**5.4 Configuration Management**

- Provides discipline for identifying, controlling, and tracking test work products.

- Records relationships and versions of configuration items.

- Ensures configuration items are uniquely identified and version controlled.

- Supports continuous integration, delivery, and deployment in DevOps pipelines.

**5.5 Defect Management***

- Establishes a workflow for handling anomalies from discovery to closure.

A defect report typically includes:

- Unique identifier and summary

- Date, author, and environment information

- Steps to reproduce and expected vs. actual results

- Severity, priority, and status

- References to related test cases

### Chapter Weightage Breakdown


| Chapter | Weight | Questions | Pages | Duration | Topics |
| ------ | ------ | ------ | ------ | ------ | ------ |
| 6  | 5 % | 2 | 57–59 | 1 day | Tool Support |

# Chapter 6: Test Tools

**6.1 Tool Support for Testing**

Various tools support different testing activities:


- Test management tools

- Static testing tools

- Test design and implementation tools

- Test execution and coverage tools

- Non-functional testing tools

- DevOps tools

- Collaboration tools

- Tools supporting scalability and deployment



**6.2 Benefits and Risks of Test Automation**

*Benefits:*


- Time savings through reduced manual work

- Prevention of human errors

- More objective assessment

- Easier access to testing information

- Reduced execution times

- More time for test design


*Risks:*


- Unrealistic expectations

- Inaccurate estimations

- Using tools inappropriately

- Over-reliance on tools

- Vendor dependency

- Open-source software abandonment

- Compatibility issues

- Regulatory compliance concerns






