import { screen, fireEvent } from '@testing-library/react';
import UserCard from '../components/UserCard';
import * as hook from '../hooks/useGithubUserRepos';
import { vi } from 'vitest';
import { renderWithClient } from './testUtils';

const mockRepos = [
  {
    id: 1,
    name: 'mock-repo',
    description: 'Test repo',
    forks_count: 3,
    html_url: 'https://github.com/mock-repo',
  },
];

describe('UserCard', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders loading spinner when loading', () => {
    vi.spyOn(hook, 'useGithubUserRepos').mockReturnValue({
      data: undefined,
      isLoading: true,
      error: null,
    } as any);

    renderWithClient(<UserCard username="mockuser" />);
    expect(screen.getByRole('status', { name: /loading/i })).toBeInTheDocument();
  });

  it('renders empty data message when no repos', () => {
    vi.spyOn(hook, 'useGithubUserRepos').mockReturnValue({
      data: [],
      isLoading: false,
      error: null,
    } as any);

    renderWithClient(<UserCard username="mockuser" />);
    expect(screen.getByText(/no data/i)).toBeInTheDocument();
  });

  it('renders repository list after fetching', async () => {
    vi.spyOn(hook, 'useGithubUserRepos').mockReturnValue({
      data: mockRepos,
      isLoading: false,
      error: null,
    } as any);

    renderWithClient(<UserCard username="mockuser" />);
    const repoItem = await screen.findByText(/mock-repo/i);
    expect(repoItem).toBeInTheDocument();
    expect(screen.getByText(/test repo/i)).toBeInTheDocument();
  });

  it('opens repo link in new tab when repo item clicked', async () => {
    vi.spyOn(hook, 'useGithubUserRepos').mockReturnValue({
      data: mockRepos,
      isLoading: false,
      error: null,
    } as any);

    const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null);

    renderWithClient(<UserCard username="mockuser" />);
    const repoItem = await screen.findByText(/mock-repo/i);

    fireEvent.click(repoItem.closest('div')!);
    expect(openSpy).toHaveBeenCalledWith('https://github.com/mock-repo', '_blank');

    openSpy.mockRestore();
  });
});