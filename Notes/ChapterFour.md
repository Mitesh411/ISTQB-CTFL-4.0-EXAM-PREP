## Chapter 4: Test Analysis and Design

### 4.1 Test Techniques Overview

Test techniques guide testers in analyzing what to test and designing how to test, creating sufficient test cases systematically. They are classified into three categories:

-   **Black-box Techniques**: Based on specified behavior without considering internal structure; test cases remain valid if behavior is unchanged despite implementation changes.
    
-   **White-box Techniques**: Based on internal structure and code; test cases depend on design/implementation and are created post-design.
    
-   **Experience-based Techniques**: Rely on tester knowledge and skills; complement black-box and white-box techniques by detecting defects that structured approaches may miss.
    

### 4.2 Black-box Test Techniques

These techniques derive test cases from specifications without code access.

-   **Equivalence Partitioning (EP)**:
    
    -   Divides data into partitions where the system processes all elements identically.
        
    -   Partitions can be valid (processed correctly) or invalid (rejected/ignored).
        
    -   Coverage: Test one value per partition (valid and invalid) for 100% coverage, measured as the percentage of partitions tested.
        
    -   Example: For an input range 1–100, partitions might be [1–100] (valid), [<1], and [>100] (invalid).
        
-   **Boundary Value Analysis (BVA)**:
    
    -   Tests boundaries of ordered equivalence partitions, where defects are likely.
        
    -   **2-value BVA**: Tests each boundary and its closest neighbor in the adjacent partition.
        
    -   **3-value BVA**: Tests each boundary and both neighbors (more rigorous).
        
    -   Coverage: Percentage of boundary values (and neighbors for 3-value) tested.
        
    -   Example: For a partition [1–100], 2-value BVA tests 0, 1, 100, 101; 3-value tests 0, 1, 2, 99, 100, 101.
        
-   **Decision Table Testing**:
    
    -   Models complex logic (e.g., business rules) with conditions and actions.
        
    -   Each column represents a decision rule (unique condition combination and actions).
        
    -   Coverage: Test all feasible columns for 100% coverage, measured as the percentage of columns tested.
        
    -   Simplification: Remove infeasible combinations or merge columns with irrelevant conditions.
        
-   **State Transition Testing**:
    
    -   Models system behavior via state diagrams or tables, showing states, events, transitions, and actions.
        
    -   Coverage Criteria:
        
        -   **All States**: Test all states (weakest).
            
        -   **Valid Transitions (0-switch)**: Test all valid transitions (most common).
            
        -   **All Transitions**: Test all valid and attempt invalid transitions (strongest, required for critical systems).
            
    -   Coverage: Percentage of states or transitions tested.
        

### 4.3 White-box Test Techniques

These techniques focus on code structure, particularly statement and branch coverage.

-   **Statement Testing**:
    
    -   Tests executable statements to achieve desired coverage.
        
    -   Coverage: Percentage of statements executed.
        
    -   100% coverage ensures all statements are tested but may miss data-dependent or decision logic defects.
        
-   **Branch Testing**:
    
    -   Tests branches (control transfers, conditional or unconditional) in the code’s control flow graph.
        
    -   Coverage: Percentage of branches executed.
        
    -   100% branch coverage includes all decision outcomes (e.g., true/false) and subsumes statement coverage.
        
-   **Value of White-box Testing**:
    
    -   Considers the entire implementation, detecting defects even with vague specifications.
        
    -   Measures actual code coverage objectively, guiding additional test creation.
        
    -   Useful in static testing (e.g., code dry runs) and for incomplete code.
        
    -   Weakness: May miss defects of omission (unimplemented requirements).
        

### 4.4 Experience-based Test Techniques

These rely on tester expertise and are effective for detecting defects missed by structured techniques.

-   **Error Guessing**:
    
    -   Anticipates defects based on tester experience with past application behavior, developer error patterns, or similar systems.
        
    -   Uses fault attack lists to design tests targeting likely errors (e.g., input validation, logic errors).
        
-   **Exploratory Testing**:
    
    -   Simultaneously designs, executes, and evaluates tests while learning about the system.
        
    -   Often session-based, using test charters and time-boxed sessions with debriefings.
        
    -   Effective for poor specifications, time constraints, or complementing formal techniques.
        
    -   Enhanced by tester skills (e.g., analytical, creative) and domain knowledge.
        
-   **Checklist-based Testing**:
    
    -   Uses checklists of test conditions based on experience, user needs, or failure patterns.
        
    -   Items are specific, testable questions (e.g., usability heuristics, functional checks).
        
    -   Requires regular updates to reflect new defects and avoid obsolescence.
        
    -   Provides guidelines for consistent testing with some variability for broader coverage.
        

### 4.5 Collaboration-based Test Approaches

These approaches emphasize defect avoidance through stakeholder collaboration.

-   **Collaborative User Story Writing**:
    
    -   User stories describe features valuable to users, following the “3 C’s”: Card (description), Conversation (usage details), Confirmation (acceptance criteria).
        
    -   Format: “As a [role], I want [goal], so that [value].”
        
    -   Collaboration (via brainstorming, mind mapping) ensures a shared vision across business, development, and testing perspectives.
        
    -   Good user stories are Independent, Negotiable, Valuable, Estimable, Small, and Testable (INVEST).
        
-   **Acceptance Criteria**:
    
    -   Define conditions for user story acceptance, acting as test conditions.
        
    -   Purposes: Scope definition, stakeholder consensus, positive/negative scenario coverage, and basis for acceptance testing.
        
    -   Formats: Scenario-oriented (e.g., Given/When/Then) or rule-oriented (e.g., bullet lists, tables).
        
-   **Acceptance Test-driven Development (ATDD)**:
    
    -   Test-first approach where test cases are created before implementation.
        
    -   Process: Specification workshop to refine user stories and acceptance criteria, followed by test case creation (positive, negative, non-functional).
        
    -   Test cases are based on acceptance criteria, use natural language, and cover the user story without redundancy.
        
    -   Supports automation when formatted for test frameworks, acting as executable requirements.
