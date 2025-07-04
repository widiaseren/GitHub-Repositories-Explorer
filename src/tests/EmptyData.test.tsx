import { render, screen } from '@testing-library/react';
import EmptyData from '../components/EmptyData';

describe('EmptyData', () => {
  it('renders no data message', () => {
    render(<EmptyData />);
    expect(screen.getByText(/no data/i)).toBeInTheDocument();
  });
});