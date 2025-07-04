import { render, screen } from '@testing-library/react';
import Loading from '../components/Loading';

describe('Loading', () => {
  it('renders loading spinner', () => {
    render(<Loading />);
    const loading = screen.getByRole('status');
    expect(loading).toBeInTheDocument();
  });
});