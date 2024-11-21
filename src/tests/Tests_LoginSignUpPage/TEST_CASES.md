
# Test Cases for Login and SignUp Components

This document describes the test cases for the `Login` and `SignUp` components in our app. Each test checks that these components are displaying the right elements and working as expected.

---

## Contents

- [Login Component](#login-component)
  - [Test 1: Login Form Display](#test-1-login-form-display)
  - [Test 2: Click to Sign Up](#test-2-click-to-sign-up)
- [SignUp Component](#signup-component)
  - [Test 1: Sign-Up Form Display](#test-1-sign-up-form-display)
  - [Test 2: Click to Log In](#test-2-click-to-log-in)

---

## Login Component

### Test 1: Login Form Display

- **Purpose**: Check that the `Login` component shows everything it should.
- **Elements to Check**:
  - "Log In" heading
  - Username and Password input fields
  - "Log In" button
  - "Sign Up" link
- **Code**:
  ```typescript
  test('renders the login form with username and password inputs', () => {
    render(<Login goToSignUp={() => {}} />);
    expect(screen.getByRole('heading', { name: 'Log In' })).toBeInTheDocument();
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Log In' })).toBeInTheDocument();
    expect(screen.getByText('Sign Up')).toBeInTheDocument();
  });
  ```
- **Expected Result**: The login form shows all the elements listed above.

### Test 2: Click to Sign Up

- **Purpose**: Check that clicking "Sign Up" calls the `goToSignUp` function so we can go to the sign-up page.
- **Code**:
  ```typescript
  test('calls goToSignUp when "Sign Up" link is clicked', () => {
    const goToSignUpMock = jest.fn();
    render(<Login goToSignUp={goToSignUpMock} />);
    fireEvent.click(screen.getByText('Sign Up'));
    expect(goToSignUpMock).toHaveBeenCalled();
  });
  ```
- **Expected Result**: The `goToSignUp` function is called when "Sign Up" is clicked.

---

## SignUp Component

### Test 1: Sign-Up Form Display

- **Purpose**: Check that the `SignUp` component shows everything it should.
- **Elements to Check**:
  - "Sign Up" heading
  - Create Username and Create Password input fields
  - "Create Account" button
  - "Back to Log In" link
- **Code**:
  ```typescript
  test('renders the sign-up form with username and password inputs', () => {
    render(<SignUp goToLogin={() => {}} />);
    expect(screen.getByRole('heading', { name: 'Sign Up' })).toBeInTheDocument();
    expect(screen.getByLabelText('Create Username')).toBeInTheDocument();
    expect(screen.getByLabelText('Create Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Create Account' })).toBeInTheDocument();
    expect(screen.getByText('Back to Log In')).toBeInTheDocument();
  });
  ```
- **Expected Result**: The sign-up form shows all the elements listed above.

### Test 2: Click to Log In

- **Purpose**: Check that clicking "Back to Log In" calls the `goToLogin` function so we can go back to the login page.
- **Code**:
  ```typescript
  test('calls goToLogin when "Back to Log In" link is clicked', () => {
    const goToLoginMock = jest.fn();
    render(<SignUp goToLogin={goToLoginMock} />);
    fireEvent.click(screen.getByText('Back to Log In'));
    expect(goToLoginMock).toHaveBeenCalled();
  });
  ```
- **Expected Result**: The `goToLogin` function is called when "Back to Log In" is clicked.

---

This document covers the basics of our test cases for the login and sign-up components, focusing on making sure everything displays properly and navigates correctly.
