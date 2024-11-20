# MonthChangeButton Component Test Document
The MonthChangeButton component should display a central banner with the current month and year, with dropdown menus for the month and year below and an arrow button on each side of the banner. Clicking the left arrow button should switch the banner and page to the previous month and if needed, the previous year. Similarly, clicking the right arrow button should link to the page of the next month, and if needed the next year.


## Unit Tests

## Test Suite 1
### Test 1: Initial dropdown values is current month and current year
- Gets current month and year displayed in the dropdown menu
- Verifies month value is 10 displaying "November"
- Verifies year value to be 2024

### Test 2: rightbutton click increases display and dropdown value
- clicks right arrow button once
- checks month is now "December"
- checks that year remains 2024

### Test 3: leftbutton click decreases display and dropdown value
- clicks left arrow button once
- checks month is now "October"
- checks that year remains 2024

### Test 4: December month increase resets month and increases year
- Sets current date to "December 15, 2024"
- clicks right arrow button to cause rollover to next year
- checks month is now "January"
- checks that year is now 2024

### Test 5: January month decreases resets month and decreases year
- Sets current date to "January 15, 2024"
- clicks left arrow button to cause rollover to previous year
- checks month is now "January"
- checks that year is now 2023



