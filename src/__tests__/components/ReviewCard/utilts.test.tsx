import { render, screen } from '@testing-library/react';
import { convertRating } from '../../../components/ReviewCard/utils';

test('convert rating utlity receiving bad data', () => {
  render(convertRating(0));

  expect(screen.getByTestId('0/5-stars')).toBeInTheDocument();
});
