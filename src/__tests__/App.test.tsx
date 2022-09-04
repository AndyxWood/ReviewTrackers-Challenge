import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import {App} from '../App';

test('app rendering and navigating', () => {
  render(<App />, {wrapper: BrowserRouter});

  // Verify Page Content for default route (reviews)
  expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
});

test('landing on a bad page', () => {
  const badRoute = '/fake/bad/route';

  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText(/Woops, this page doesn't exist/i)).toBeInTheDocument();
});
