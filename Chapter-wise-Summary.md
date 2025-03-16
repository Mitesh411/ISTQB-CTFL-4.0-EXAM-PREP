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
