# github-repositories-explorer

A React + TypeScript + Tailwind CSS application allowing users to search for up to 5 GitHub users by username and view all repositories of the selected user, using the GitHub REST API v3.

🚀 Live Demo: https://widiaseren.github.io/github-repositories-explorer/

📂 Repository: [link](https://github.com/widiaseren/github-repositories-explorer)

Features

✅ Search for GitHub users (max 5 results matching the entered value)
✅ Display repositories for the selected user (no limit on repo count)
✅ Responsive and accessible mobile-first UI
✅ Loading indicators during API fetches
✅ Error handling with user-friendly messages
✅ Keyboard events support (Enter for search, Esc to clear)
✅ Hosted on GitHub Pages
✅ Tested with Vitest and @testing-library/react for unit and integration tests
✅ State management using React Query
✅ Styling with Tailwind CSS

📚 Tech Stack
Library / Tool	and why it’s used
React	Core framework for building reusable UI components
TypeScript	Adds type safety for better maintainability and fewer bugs
React Router	Optional, for managing user/repo views
Axios	Simple promise-based HTTP client for API calls
Tailwind CSS	Utility-first CSS framework for fast, responsive styling
Vitest	Fast unit and integration testing for Vite projects
React Testing Library	Encourages testing components the way users interact with them
Vite	Fast dev server and build tool optimized for React + TypeScript
GitHub Pages	Free hosting for static sites

Setup Instructions

1️⃣ Clone the repository

git clone https://github.com/widiaseren/github-repositories-explorer.git
cd github-repositories-explorer

2️⃣ Install dependencies

pnpm install

3️⃣ Run locally

pnpm dev

Access the app at http://localhost:5173.

4️⃣ Run tests

pnpm test

5️⃣ Build for production

pnpm build


Project Structure

src/
 ├── api/             # API request functions
 ├── components/      # Reusable React components
 ├── hooks/           # Custom React Query hooks
 ├── tests/           # Unit and integration tests
 ├── App.tsx          # App entry point
 └── main.tsx         # Vite entry point

API References

GitHub REST API v3: https://developer.github.com/v3/

Search users: GET https://api.github.com/search/users?q={username}

List user repositories: GET https://api.github.com/users/{username}/repos

UX Details

✅ Input debouncing for reduced API calls during typing
✅ Enter key triggers search immediately
✅ Loading spinners during API fetches
✅ Displays errors when user not found or API fails
✅ Mobile-friendly, touch-optimized interface
✅ Collapsible repo lists for clean browsing on small screens
✅ Keyboard navigable and accessible components

Testing

Unit tests for:

API hooks

Component rendering and user interactions

Integration tests for:

Searching users

Selecting a user and displaying repositories

Error handling

Run:

pnpm test or 
pnpm test:ui or
pnpm test:coverage
