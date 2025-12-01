# Snake Game Frontend

A modern, interactive Snake game frontend built with React, TypeScript, and Vite. Features two game modes, multiplayer leaderboard, and the ability to watch other players in real-time.

## Features

- 🎮 **Two Game Modes**:
  - **Pass-through**: Snake wraps around the edges
  - **Walls**: Game ends on wall collision

- 👤 **Authentication**:
  - Login and Signup functionality
  - User session management
  - Protected routes

- 🏆 **Leaderboard**:
  - View top scores
  - Filter by game mode
  - Automatic score submission

- 👀 **Watch Mode**:
  - View active players
  - Real-time game simulation
  - Multiple player selection

- ✅ **Fully Tested**:
  - Comprehensive test coverage
  - Unit tests for game logic
  - Component tests
  - API service tests

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:5173`

### Testing

Run tests:
```bash
npm test
```

Run tests with UI:
```bash
npm run test:ui
```

Run tests with coverage:
```bash
npm run test:coverage
```

### Build

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Login.tsx       # Login form
│   ├── Signup.tsx      # Signup form
│   ├── SnakeGame.tsx   # Main game component
│   ├── Leaderboard.tsx # Leaderboard display
│   ├── Watch.tsx       # Watch other players
│   └── Navbar.tsx      # Navigation bar
├── contexts/           # React contexts
│   └── AuthContext.tsx # Authentication context
├── services/           # API services
│   └── api.ts          # Centralized API (mocked)
├── utils/              # Utility functions
│   └── gameLogic.ts    # Game logic functions
├── types/              # TypeScript types
│   └── game.ts         # Game-related types
└── test/               # Test setup
    └── setup.ts        # Vitest configuration
```

## Mock Credentials

For testing, you can use these pre-configured accounts:

- Username: `player1`, Password: `password1`
- Username: `player2`, Password: `password2`

Or create a new account via the Signup page.

## API Service

All backend calls are centralized in `src/services/api.ts`. Currently, everything is mocked, but when you're ready to connect to a real backend, you only need to update this single file.

## Game Controls

- **Arrow Keys** or **WASD** to control the snake
- **Pause** button to pause/resume the game

## Technologies Used

- React 18
- TypeScript
- Vite
- React Router
- Vitest (testing)
- React Testing Library

## License

MIT

