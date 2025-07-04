import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renders search form', () => {
    render(<App />);
    expect(screen.getByPlaceholderText(/enter username/i)).toBeInTheDocument();
  });
});