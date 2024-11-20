## TaskMenu Component Tests

### Test Case: "renders all input fields and submit button"

**Purpose:** 
Verifies that all essential form elements are properly rendered in the TaskMenu component.

**Elements Tested:**
1. Task Name Input
   - Verifies presence in document
   - Confirms input type is 'text'
2. Start Time Input
   - Verifies presence in document
   - Confirms input type is 'time'
3. End Time Input
   - Verifies presence in document
   - Confirms input type is 'time'
4. Reminder Time Select
   - Verifies presence in document
   - Confirms element is a select dropdown
   - Validates presence of all options:
     - Default "Select time" option
     - 5 minutes before
     - 10 minutes before
     - 30 minutes before
5. Submit Button
   - Verifies presence in document
   - Confirms button type is 'submit'

### Test Case: "Create Task"

**Purpose:**
Verifies the successful creation and submission of a new task through the TaskMenu component.

**Elements Tested:**
1. Context Setup
   - Initializes TaskMenuContext with mock functions
   - Sets current date to November 11, 2024
   - Provides mock addTask function for verification

2. Form Input Interaction
   - Locates and fills task name input
   - Sets start time to 10:00 AM
   - Sets end time to 11:00 PM
   - Triggers form submission

3. Task Creation Validation
   - Verifies addTask function is called with:
     - Correct date object (November 11, 2024)
     - Expected task object containing:
       - Task ID
       - Task name ("New Task")
       - Start time ("10:00 AM")
       - End time ("11:00 PM")
