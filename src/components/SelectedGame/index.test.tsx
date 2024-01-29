import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { mockImages } from 'assets/test-mocks'
import SelectedGame from './index';

const mockGame = {
  id: "7060050195c6b3a514f7358",
  launchDate: "2023-06-20T14:36:38.034Z",
  title: 'Test Game: The Adventure',
  summary: 'This is a test game summary.',
  imageFilenameThumb: "fall-guys__1x1",
  imageFilenameFull: "fall-guys__16x9",
  learnMoreLink: "https://www.playstation.com/en-us/games/fall-guys-ultimate-knockout/",
  purchaseLink: "https://www.playstation.com/en-us/games/fall-guys-ultimate-knockout/#buy-now",
  dom: 15,
};

describe('SelectedGame component', () => {
  test('displays game details correctly', () => {
    render(<SelectedGame game={mockGame} images={mockImages} />);
    
    expect(screen.getByText('TEST GAME: The Adventure This is a test game summary.')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Learn More' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Pre Order Now' })).toBeInTheDocument();
  });

  test('opens learn more link when Learn More button is clicked', () => {
    const originalOpen = window.open;
    window.open = jest.fn();

    render(<SelectedGame game={mockGame} images={mockImages} />);
    fireEvent.click(screen.getByRole('button', { name: 'Learn More' }));

    expect(window.open).toHaveBeenCalledWith(mockGame.learnMoreLink, '_blank');

    window.open = originalOpen;
  });
});
