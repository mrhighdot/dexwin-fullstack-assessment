Issue 1
- Location: frontend/src/api/client.ts
- Status: observed
- Evidence: Apart from the helper function, request which is defined as async functions, the rest are syncronous
- Impact: It blocks the main thread of the application and wil slow the application down
- Priority: high
- Proposed Solution: Update the functions to be async so they don't block the main thread
- Verification:
- Implementation Notes:  

Issue 2
- Location: frontend/src/App.tsx
- Status: observed
- Evidence: Global state isn't configured
- Impact: We'll have to resort to prop driling which isn't ideal
- Priority: high
- Proposed Solution:
- Verification:
- Implementation Notes: 

Issue 3
- Location: backend/src/java/com/dexwin/taskflow/entity/Task.java
- Status: observed
- Evidence: There are columns that are not supposed to be nullable but it seems that's the current case  (title, priority)
- Impact: the user can decide not to fill these parts and it will cause some parts of the frontend to break
- Priority: high
- Proposed Solution:
- Verification:
- Implementation Notes: 

Issue 4
- Location: backend/src/java/com/dexwin/taskflow/
- Status: observed
- Evidence: There is no payload validation (dto) configured yet
- Impact: It'll allow the unvalidated data be sent directly to the server for processing which is quite harmful
- Priority: high
- Proposed Solution:
- Verification:
- Implementation Notes: 

Issue 5
- Location: backend/src/java/com/dexwin/taskflow/
- Status: observed
- Evidence: the security layer isn't configured yet
- Impact: Same impact as Issue 4
- Priority: high
- Proposed Solution:
- Verification:
- Implementation Notes: 

Issue 6
- Location: frontend
- Status: observed
- Evidence: On clicking the button to update the task's state, the request is sent, but the necessary update on the frontend isn't done
- Impact: Multiple updates to one record 
- Priority: high
- Proposed Solution:
- Verification:
- Implementation Notes: 

Issue 7
- Location: frontend
- Status: observed
- Evidence: When we switch projects, the various tasks for that new project isn't fetched at all, which forces the user to refresh the page and select the project he wants to see the various tasks under it
- Impact: It affects the user experience
- Priority: high
- Proposed Solution:
- Verification:
- Implementation Notes: 

Issue 8
- Location: frontend
- Status: observed
- Evidence: Mobile responsiveness(app looks good on tablet and desktop but weird on mobile)
- Impact: It affects the user experience
- Proposed Solution:
- Verification:
- Implementation Notes: 
