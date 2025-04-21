## Chapter 3: Static Testing

### 3.1 Static Testing Basics

Static testing involves evaluating software work products without executing the code, unlike dynamic testing. It includes manual reviews and automated static analysis to improve quality, detect defects, and assess attributes like readability, completeness, and consistency. Static testing supports both verification and validation and is applied early in the Software Development Life Cycle (SDLC) to catch defects cost-effectively.

-   **Work Products for Static Testing**: Almost any readable work product can be statically tested, such as requirements, source code, test plans, test cases, product backlog items, and contracts. Static analysis requires structured work products (e.g., code, models). Third-party executable code is typically unsuitable due to legal constraints.
    
-   **Value of Static Testing**: Detects defects early, reducing project costs by identifying issues like unreachable code or non-executable work product defects that dynamic testing may miss. It improves stakeholder communication, ensures requirements align with needs, and enhances product quality.
    
-   **Static vs. Dynamic Testing**:
    
    -   **Similarities**: Both aim to detect defects and improve quality.
        
    -   **Differences**:
        
        -   Static testing finds defects directly; dynamic testing identifies defects through failures.
            
        -   Static testing can evaluate non-executable work products; dynamic testing requires executable code.
            
        -   Static testing excels at detecting defects in rarely executed code paths or non-code artifacts (e.g., requirement inconsistencies, design flaws, coding standard violations).
            
        -   Dynamic testing measures runtime characteristics like performance.
            
    -   **Typical Defects Found by Static Testing**: Requirement ambiguities, design inefficiencies, coding errors (e.g., undefined variables), security vulnerabilities, and gaps in test coverage.
        

### 3.2 Feedback and Review Process

Static testing relies heavily on reviews and stakeholder feedback to ensure quality and alignment with requirements.

-   **Benefits of Early and Frequent Feedback**: Prevents misunderstandings, reduces rework, ensures stakeholder needs are met, and focuses development on high-value features. Lack of feedback risks project failure due to misaligned deliverables.
    
-   **Review Process Activities** (based on ISO/IEC 20246):
    
    -   **Planning**: Define scope, purpose, work product, quality characteristics, focus areas, exit criteria, and resources.
        
    -   **Review Initiation**: Ensure participants are prepared with access to materials and clear roles.
        
    -   **Individual Review**: Reviewers assess the work product using techniques like checklist-based or scenario-based reviewing, logging anomalies, recommendations, and questions.
        
    -   **Communication and Analysis**: Discuss anomalies in a review meeting to determine their status, ownership, and actions. Assess product quality and plan follow-ups.
        
    -   **Fixing and Reporting**: Create defect reports, implement fixes, and report results once exit criteria are met.
        
-   **Roles and Responsibilities**:
    
    -   **Manager**: Allocates resources and decides what to review.
        
    -   **Author**: Creates and fixes the work product.
        
    -   **Moderator**: Facilitates review meetings, ensuring effective and safe discussions.
        
    -   **Scribe**: Records anomalies and decisions.
        
    -   **Reviewer**: Assesses the work product (can be project members, experts, or stakeholders).
        
    -   **Review Leader**: Organizes the review process and participants.
        
-   **Review Types**:
    
    -   **Informal Review**: No formal process or documented output; focuses on anomaly detection.
        
    -   **Walkthrough**: Author-led, aims to educate, gain consensus, generate ideas, and detect anomalies.
        
    -   **Technical Review**: Conducted by technical experts, focuses on consensus, quality evaluation, and anomaly detection.
        
    -   **Inspection**: Most formal, follows the full review process, aims to maximize anomaly detection, and collects metrics for SDLC improvement.
        
-   **Success Factors for Reviews**:
    
    -   Clear objectives and measurable exit criteria.
        
    -   Appropriate review type based on objectives, product type, and context.
        
    -   Reviewing small chunks to maintain focus.
        
    -   Providing constructive feedback to stakeholders and authors.
        
    -   Adequate preparation time, management support, and training.
        
    -   Embedding reviews in organizational culture and facilitating effective meetings.
