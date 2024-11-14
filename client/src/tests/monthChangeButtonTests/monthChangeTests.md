# MonthChangeButton Component Test Document
The MonthChangeButton component should display a central banner with the current month and year, with dropdown menus for the month and year below and an arrow button on each side of the banner. Clicking the left arrow button should switch the banner and page to the previous month and if needed, the previous year. Similarly, clicking the right arrow button should link to the page of the next month, and if needed the next year.


## Unit Tests

## Test Suite 1
### Test 1: leftButton decreases month
- Verifies default month and year to be "November" and 2024
- clicks left arrow button once
- checks month is now "October"
- checks that year remains 2024

### Test 2: rightButton increases month
- Verifies default month and year to be "November" and 2024
- clicks right arrow button once
- checks month is now "December"
- checks that year remains 2024

### Test 3: leftButton decreases year
- Verifies default month and year to be "November" and 2024
- clicks left arrow button 11 times to cause rollover to previous year
- checks month is now "December"
- checks that year is now 2023

### Test 4: rightButton increases year
- Verifies default month and year to be "November" and 2024
- clicks left arrow button 11 times to cause rollover to previous year
- checks month is now "January"
- checks that year is now 2025



