// ReminderPopup.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ReminderPopup from '../../Components/ReminderPopup/ReminderPopup';

describe('ReminderPopup Component', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  test('renders the popup when not muted', () => {
    render(<ReminderPopup />);
    expect(screen.getByText(/Reminder!/i)).toBeInTheDocument();
    expect(screen.getByText(/Mute/i)).toBeInTheDocument();
  });

  test('does not render the popup when muted', () => {
    // Set 'reminderMuted' to 'true' in localStorage
    localStorage.setItem('reminderMuted', 'true');
    render(<ReminderPopup />);
    expect(screen.queryByText(/Reminder!/i)).not.toBeInTheDocument();
  });

  test('clicking mute button hides the popup and sets muted in localStorage', () => {
    render(<ReminderPopup />);
    const muteButton = screen.getByText(/Mute/i);
    fireEvent.click(muteButton);

    // The popup should be removed from the DOM
    expect(screen.queryByText(/Reminder!/i)).not.toBeInTheDocument();

    // 'reminderMuted' should be set to 'true' in localStorage
    expect(localStorage.getItem('reminderMuted')).toBe('true');
  });

  test('clicking close button hides the popup temporarily', () => {
    render(<ReminderPopup />);
    const closeButton = screen.getByRole('button', { name: /×/i });
    fireEvent.click(closeButton);

    // The popup should be removed from the DOM
    expect(screen.queryByText(/Reminder!/i)).not.toBeInTheDocument();

    // 'reminderMuted' should not be set in localStorage
    expect(localStorage.getItem('reminderMuted')).not.toBe('true');
  });

  test('popup reappears when unmute event is dispatched', () => {
    // Set 'reminderMuted' to 'true' in localStorage
    localStorage.setItem('reminderMuted', 'true');
    render(<ReminderPopup />);

    // The popup should not be visible initially
    expect(screen.queryByText(/Reminder!/i)).not.toBeInTheDocument();

    // Dispatch the 'unmute' event
    const event = new Event('unmute');
    window.dispatchEvent(event);

    // The popup should reappear
    expect(screen.getByText(/Reminder!/i)).toBeInTheDocument();
  });
});
