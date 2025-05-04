<p align="center"> <a href="https://www.istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/" title="Certified Tester Foundation Level (CTFL) v4.0"> <img src="https://www.istqb.org/wp-content/uploads/2024/10/istqb-ctfl-4-logo.jpg.avif" width="200" alt="ISTQB CTFL 4.0 Logo"/>



## Chapter 5: Managing the Test Activities

Chapter 5 of the ISTQB Certified Tester Foundation Level Syllabus focuses on the management of test activities, covering test planning, risk management, test monitoring and control, configuration management, and defect management. It spans 335 minutes and includes key concepts such as risk-based testing, test plans, and defect reports.

### 5.1 Test Planning

**Purpose and Content of a Test Plan (FL-5.1.1)**  
A test plan outlines the objectives, resources, and processes for a testing project. It serves as a communication tool with stakeholders, documents schedules, ensures adherence to test policies, and addresses challenges like risks and costs. Typical content includes test scope, objectives, assumptions, constraints, stakeholder roles, communication plans, risk registers, test approach, budget, and schedule. The ISO/IEC/IEEE 29119-3 standard provides detailed guidance on test plan content.

**Tester's Contribution to Iteration and Release Planning (FL-5.1.2)**  
In iterative Software Development Life Cycles (SDLCs), testers contribute to release planning by defining the product backlog, writing testable user stories, analyzing risks, estimating test effort, and planning the test approach. During iteration planning, testers assess user story testability, perform detailed risk analysis, break down tasks, estimate testing effort, and refine functional and non-functional aspects.

**Entry and Exit Criteria (FL-5.1.3)**  
Entry criteria are preconditions for starting a test activity (e.g., availability of resources, testware, or initial quality levels like passing smoke tests). Exit criteria define when a test activity is complete (e.g., coverage levels, defect density, or binary criteria like executing all planned tests). In Agile, these are often termed Definition of Ready (entry) and Definition of Done (exit). Testing may end due to time or budget constraints if stakeholders accept the associated risks.

**Estimation Techniques (FL-5.1.4)**  
Test effort estimation predicts the work needed to achieve test objectives, acknowledging assumptions and potential errors. Techniques include:

-   **Estimation based on ratios**: Uses historical project data to derive ratios (e.g., a 3:2 development-to-test effort ratio).
    
-   **Extrapolation**: Uses early project measurements to estimate remaining effort, suitable for iterative SDLCs.
    
-   **Wideband Delphi**: Experts estimate effort iteratively, refining estimates until consensus (e.g., Planning Poker in Agile).
    
-   **Three-point estimation**: Combines optimistic (a), most likely (m), and pessimistic (b) estimates using the formula ( E = (a + 4m + b)/6 ), with standard deviation ( SD = (b - a)/6 ).
    

**Test Case Prioritization (FL-5.1.5)**  
Test cases are prioritized to optimize execution order based on:

-   **Risk-based prioritization**: Tests addressing high-risk areas run first.
    
-   **Coverage-based prioritization**: Tests achieving the highest coverage (or additional coverage) run first.
    
-   **Requirements-based prioritization**: Tests linked to high-priority requirements run first.  
    Dependencies and resource availability (e.g., tools, environments) may adjust the execution order.
    

**Test Pyramid (FL-5.1.6)**  
The test pyramid model illustrates test granularity, guiding test automation and effort allocation. Lower layers (e.g., unit tests) are fast, isolated, and numerous, while higher layers (e.g., end-to-end tests) are slower, less isolated, and fewer. Layers may include unit, integration, and end-to-end tests, varying by model.

**Testing Quadrants (FL-5.1.7)**  
Testing quadrants categorize tests by purpose and focus:

-   **Q1 (Technology-facing, support team)**: Automated component and integration tests in CI pipelines.
    
-   **Q2 (Business-facing, support team)**: Functional tests, user story tests, and API testing, often manual or automated.
    
-   **Q3 (Business-facing, critique product)**: Manual exploratory, usability, and user acceptance testing.
    
-   **Q4 (Technology-facing, critique product)**: Automated smoke and non-functional tests (except usability).
    

### 5.2 Risk Management

**Risk Definition and Attributes (FL-5.2.1)**  
Risk is a potential event with adverse effects, characterized by likelihood (probability) and impact (consequences). The risk level, a product of these factors, determines the priority of risk treatment.

**Project and Product Risks (FL-5.2.2)**

-   **Project risks** affect project management (e.g., delays, skill shortages, scope creep, supplier issues), impacting schedule, budget, or scope.
    
-   **Product risks** relate to quality characteristics (e.g., functionality, performance, security), potentially causing user dissatisfaction, revenue loss, or safety issues.
    

**Product Risk Analysis (FL-5.2.3)**  
Product risk analysis identifies and assesses risks to focus testing efforts, minimizing residual risk. It involves:

-   **Risk identification**: Using techniques like brainstorming or cause-effect diagrams.
    
-   **Risk assessment**: Evaluating likelihood and impact to prioritize risks.  
    This analysis influences test thoroughness and scope, prioritizing high-risk areas.
    

**Risk Control Measures (FL-5.2.4)**  
Risk control includes mitigation (e.g., additional testing, design changes) and monitoring to manage identified risks, adjusting the test approach as needed.

### 5.3 Test Monitoring, Test Control, and Test Completion

**Metrics Used in Testing (FL-5.3.1)**  
Metrics track progress, quality, and effectiveness, including:

-   Project progress (e.g., task completion).
    
-   Test progress (e.g., test case execution, pass/fail rates).
    
-   Product quality (e.g., response time).
    
-   Defect metrics (e.g., defect density).
    
-   Risk and coverage metrics.
    
-   Cost metrics.
    

**Test Reports (FL-5.3.2)**

-   **Test progress reports**: Issued regularly (e.g., weekly), detailing testing period, progress, impediments, metrics, risks, and plans for the next period.
    
-   **Test completion reports**: Summarize completed activities, evaluate quality against objectives, note deviations, impediments, unmitigated risks, and lessons learned.  
    Reports vary by audience, with informal frequent reports for teams and formal templated reports for stakeholders, per ISO/IEC/IEEE 29119-3.
    

**Communicating Test Status (FL-5.3.3)**  
Methods include verbal communication, dashboards (e.g., CI/CD), electronic channels (e.g., email), online documentation, or formal reports, tailored to stakeholder needs and team structure.

### 5.4 Configuration Management

**Support for Testing (FL-5.4.1)**  
Configuration management (CM) identifies, controls, and tracks test-related items (e.g., test plans, cases, results) as configuration items. It ensures unique identification, version control, change tracking, and traceability, supporting test reproducibility and DevOps pipelines.

### 5.5 Defect Management

**Preparing a Defect Report (FL-5.5.1)**  
Defect management handles anomalies (defects, false positives, or change requests) through a workflow of logging, analysis, resolution, and closure. Defect reports include:

-   Unique identifier, title, and summary.
    
-   Date, author, organization, and role.
    
-   Test object, environment, and context (e.g., test case, technique).
    
-   Failure description, steps to reproduce, expected vs. actual results, logs, or screenshots.
    
-   Severity, priority, status, and references.  
    Reports support resolution, quality tracking, and process improvement, with templates in ISO/IEC/IEEE 29119-3.
