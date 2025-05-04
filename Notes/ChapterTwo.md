<p align="center"> <a href="https://www.istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/" title="Certified Tester Foundation Level (CTFL) v4.0"> <img src="https://www.istqb.org/wp-content/uploads/2024/10/istqb-ctfl-4-logo.jpg.avif" width="200" alt="ISTQB CTFL 4.0 Logo"/>



# Chapter 2: Testing Throughout the Software Development Lifecycle

### 2.1 Testing in the Context of a Software Development Lifecycle (SDLC)

SDLC models (e.g., waterfall, V-model, spiral, Agile) define development phases and activities, impacting testing scope, timing, documentation, techniques, automation, and tester roles.

**Impact of SDLC on Testing**:

-   **Sequential Models**: Testers focus on reviews and design early, with dynamic testing later.
    
-   **Iterative/Incremental Models**: Each iteration includes static and dynamic testing, requiring fast feedback and regression testing.
    
-   **Agile**: Emphasizes lightweight documentation, extensive automation, and experience-based testing due to frequent changes.
    

**Good Testing Practices**:

-   Align test activities with development activities.
    
-   Define distinct test levels with specific objectives to ensure comprehensive, non-redundant testing.
    

**Test-First Approaches**:

-   Examples include Test-Driven Development (TDD), Acceptance Test-Driven Development (ATDD), and Behavior-Driven Development (BDD), where tests are written before code to guide development.
    

**DevOps Impact**:

-   Promotes CI/CD, stable test environments, and automated regression testing.
    
-   Increases visibility of non-functional characteristics (e.g., performance, reliability).
    
-   Challenges include establishing pipelines, maintaining tools, and resource needs.
    
-   Manual testing remains essential for user perspectives.
    

**Shift Left**:

-   Perform testing earlier in the SDLC (e.g., reviewing specifications, writing tests before coding, using CI/CD).
    
-   Saves effort and costs later but requires stakeholder buy-in and early investment.
    

**Retrospectives and Process Improvement**:

-   Held at milestones to review successes, issues, and improvements.
    
-   Benefits include enhanced test effectiveness, better testware, team learning, and improved collaboration.
    

### 2.2 Test Levels and Test Types

**Test Levels**:

-   **Component Testing**: Tests isolated components, often by developers using test harnesses.
    
-   **Component Integration Testing**: Tests component interfaces and interactions, guided by integration strategies (e.g., bottom-up).
    
-   **System Testing**: Tests the entire system’s behavior, including functional and non-functional aspects, often by independent testers.
    
-   **System Integration Testing**: Tests system interfaces with external systems, requiring realistic environments.
    
-   **Acceptance Testing**: Validates readiness for deployment, ideally by users, in forms like UAT, operational, contractual, or alpha/beta testing. Levels differ by test object, objectives, basis, defects, and responsibilities.
    

**Test Types**:

-   **Functional Testing**: Verifies what the system does (completeness, correctness, appropriateness).
    
-   **Non-Functional Testing**: Tests how well the system performs (e.g., performance, usability, security per ISO/IEC 25010).
    
-   **Black-Box Testing**: Tests based on specifications, ignoring internal structure.
    
-   **White-Box Testing**: Tests based on internal structure (e.g., code coverage). All types apply across levels, with varying focus.
    

**Confirmation vs. Regression Testing**:

-   **Confirmation Testing**: Verifies defect fixes by re-running failed tests or adding new ones.
    
-   **Regression Testing**: Ensures changes (fixes or enhancements) do not introduce new issues, often automated due to growing test suites.
    

### 2.3 Maintenance Testing

Maintenance testing evaluates changes to operational systems, including enhancements, fixes, environmental upgrades, or system retirement. Scope depends on change risk, system size, and change size.

**Triggers**:

-   **Modifications**: Planned enhancements, corrective fixes, or hot fixes.
    
-   **Upgrades/Migrations**: New platforms or data conversions.
    
-   **Retirement**: Data archiving and retrieval testing.
    

**Approach**:

-   Includes testing the change and regression testing unchanged parts.
    
-   Impact analysis guides testing scope to assess risks and affected areas.
