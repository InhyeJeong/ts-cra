import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders home', async () => {
  render(<App />);

  await waitFor(() => {
    const homeText = screen.getByText(/HOME!/i);
    expect(homeText).toBeInTheDocument();
  });
});
