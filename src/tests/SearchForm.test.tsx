import { render, screen, fireEvent } from '@testing-library/react';
import SearchForm from '../components/SearchForm';

describe('SearchForm', () => {
  it('renders input and button', () => {
    render(<SearchForm onSearch={() => {}} />);
    expect(screen.getByPlaceholderText(/enter username/i)).toBeInTheDocument();
    expect(screen.getByTestId('btn-search')).toBeInTheDocument();
  });

  it('calls onSearch with trimmed input on submit', () => {
    const onSearch = vi.fn();
    render(<SearchForm onSearch={onSearch} />);

    const input = screen.getByTestId('search');
    const button = screen.getByTestId('btn-search');

    fireEvent.change(input, { target: { value: '  user123  ' } });
    fireEvent.click(button);

    expect(onSearch).toHaveBeenCalledWith('user123');
  });

  it('does not call onSearch if input is empty or whitespace', () => {
    const onSearch = vi.fn();
    render(<SearchForm onSearch={onSearch} />);

    const input = screen.getByTestId('search');
    const button = screen.getByTestId('btn-search');

    fireEvent.change(input, { target: { value: '   ' } });
    fireEvent.click(button);

    expect(onSearch).not.toHaveBeenCalled();
  });

  it('disables button and shows loading text when isLoading is true', () => {
    render(<SearchForm onSearch={() => {}} isLoading={true} />);
    const button = screen.getByTestId('btn-search');
    expect(button).toBeDisabled();
    expect(button).toHaveTextContent(/loading/i);
  });
});