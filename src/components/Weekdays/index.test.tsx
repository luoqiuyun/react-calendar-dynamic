import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Weekdays from './index'; // Adjust the import path as necessary

describe('Weekdays component', () => {
  test('renders all days of the week', () => {
    render(<Weekdays />);
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    daysOfWeek.forEach(day => {
      const dayElement = screen.getByText(day);
      expect(dayElement).toBeInTheDocument();
      expect(dayElement).toHaveClass('week-day');
    });
  });
});
