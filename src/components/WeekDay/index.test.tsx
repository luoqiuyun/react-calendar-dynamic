import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import { mockImages, mockGames} from '../../assets/test-mocks'
import WeekDay from './index';

describe('WeekDay component', () => {
  test('renders with a game event', () => {
    const setWeekSelected = jest.fn();
    const setGameSelected = jest.fn();

    render(
      <WeekDay
        game={mockGames[0]}
        week={1}
        setWeekSelected={setWeekSelected}
        setGameSelected={setGameSelected}
        images={mockImages}
      />
    );

    const weekDayElement = screen.getByRole('button');
    expect(weekDayElement).toHaveClass('card game-event');
    expect(weekDayElement).toHaveStyle(`background-image: url(/static/media/metal-gear-solid__1x1.1fdbe8960a033161646a.jpeg)`);
    
    fireEvent.click(weekDayElement);
    expect(setWeekSelected).toHaveBeenCalledWith(1);
    expect(setGameSelected).toHaveBeenCalledWith(mockGames[0]);
  });

  test('renders without a game event', () => {
    const setWeekSelected = jest.fn();
    const setGameSelected = jest.fn();

    render(
      <WeekDay
        week={1}
        setWeekSelected={setWeekSelected}
        setGameSelected={setGameSelected}
        images={mockImages}
      />
    );

    const weekDayElement = screen.getByRole('button');
    expect(weekDayElement).toHaveClass('card');
    expect(weekDayElement).not.toHaveClass('game-event');
    expect(weekDayElement).toHaveStyle(`background-image: url('')`);

    fireEvent.click(weekDayElement);
    expect(setWeekSelected).not.toHaveBeenCalled();
    expect(setGameSelected).not.toHaveBeenCalled();
  });
});
