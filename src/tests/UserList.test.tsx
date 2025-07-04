import { screen, fireEvent } from "@testing-library/react";
import UserList from "../components/UserList";
import { vi } from "vitest";
import { renderWithClient } from "./testUtils";

const mockUsers = [{ login: "mockuser", id: 1, avatar_url: "" }];

// Mock the searchUsers API call
vi.mock("../api/userGithub", () => ({
  searchUsers: vi.fn(() =>
    Promise.resolve({
      data: { items: mockUsers },
      status: 200,
      statusText: "OK",
      headers: {},
      config: {},
    })
  ),
}));

// Mock Loading component
vi.mock("../components/Loading", () => ({
  default: () => <div data-testid="loading">Loading...</div>,
}));

// Mock EmptyData component
vi.mock("../components/EmptyData", () => ({
  default: () => <div data-testid="empty">No Data</div>,
}));

describe("UserList", () => {
  it("renders user after fetching", async () => {
    renderWithClient(<UserList username="mockuser" />);
    const userSpan = await screen.findByTestId("username-mockuser");
    expect(userSpan).toBeInTheDocument();
  });

  it('shows "Showing users for ..." message when no user expanded', async () => {
    renderWithClient(<UserList username="mockuser" />);
    // wait for user loaded
    await screen.findByTestId("username-mockuser");
    expect(
      screen.getByText(/showing users for "mockuser"/i)
    ).toBeInTheDocument();
  });

  it("toggles user card open/close when clicked", async () => {
    renderWithClient(<UserList username="mockuser" />);
    const button = await screen.findByTestId("card-1");

    // Initially the card content is closed
    expect(screen.queryByText(/No Data/i)).not.toBeInTheDocument();

    // Click to open the user card
    fireEvent.click(button);

    // After open, UserCard should render. Since UserCard uses the mocked EmptyData, "No Data" shows.
    expect(await screen.findByTestId("empty")).toBeInTheDocument();

    // Click to close the user card
    fireEvent.click(button);

    // Now "No Data" should be gone
    expect(screen.queryByTestId("empty")).not.toBeInTheDocument();
  });
});
