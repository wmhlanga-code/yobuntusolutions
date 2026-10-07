import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the full site, not the coming soon screen', () => {
  render(<App />);
  expect(screen.getByRole('navigation')).toBeInTheDocument();
  expect(screen.queryByText(/coming soon/i)).not.toBeInTheDocument();
});
