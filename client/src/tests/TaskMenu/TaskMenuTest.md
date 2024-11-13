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
