import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Selector from './index';

describe('Selector component', () => {
  test('displays the correct month and year', () => {
    render(<Selector month={1} year={2024} prevMonth={() => {}} nextMonth={() => {}} />);
    expect(screen.getByText('January 2024')).toBeInTheDocument();
  });

  test('calls prevMonth when previous button is clicked', () => {
    const prevMonth = jest.fn();
    render(<Selector month={1} year={2024} prevMonth={prevMonth} nextMonth={() => {}} />);

    fireEvent.click(screen.getByText('‹'));
    expect(prevMonth).toHaveBeenCalled();
  });

  test('calls nextMonth when next button is clicked', () => {
    const nextMonth = jest.fn();
    render(<Selector month={1} year={2024} prevMonth={() => {}} nextMonth={nextMonth} />);

    fireEvent.click(screen.getByText('›'));
    expect(nextMonth).toHaveBeenCalled();
  });
});
