// Centralized API service - all backend calls go through here
// Everything is mocked for now

export interface User {
  id: string;
  username: string;
  email: string;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface SignupData {
  username: string;
  email: string;
  password: string;
}

export interface LeaderboardEntry {
  id: string;
  username: string;
  score: number;
  gameMode: 'pass-through' | 'walls';
  date: string;
}

export interface ActivePlayer {
  id: string;
  username: string;
  score: number;
  gameMode: 'pass-through' | 'walls';
  gameState: GameState;
}

export interface GameState {
  snake: Array<{ x: number; y: number }>;
  food: { x: number; y: number };
  direction: 'up' | 'down' | 'left' | 'right';
  score: number;
  gameOver: boolean;
}

// Mock storage for users (simulating a database)
const mockUsers: Array<User & { password: string }> = [
  { id: '1', username: 'player1', email: 'player1@example.com', password: 'password1' },
  { id: '2', username: 'player2', email: 'player2@example.com', password: 'password2' },
];

// Mock leaderboard data
const mockLeaderboard: LeaderboardEntry[] = [
  { id: '1', username: 'player1', score: 150, gameMode: 'pass-through', date: '2024-01-15' },
  { id: '2', username: 'player2', score: 120, gameMode: 'walls', date: '2024-01-14' },
  { id: '3', username: 'champion', score: 200, gameMode: 'pass-through', date: '2024-01-13' },
  { id: '4', username: 'player1', score: 100, gameMode: 'walls', date: '2024-01-12' },
  { id: '5', username: 'gamer', score: 90, gameMode: 'pass-through', date: '2024-01-11' },
];

class ApiService {
  private currentUser: User | null = null;

  // Authentication
  async login(credentials: LoginCredentials): Promise<User> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const user = mockUsers.find(
      u => u.username === credentials.username && u.password === credentials.password
    );
    
    if (!user) {
      throw new Error('Invalid username or password');
    }
    
    const { password, ...userWithoutPassword } = user;
    this.currentUser = userWithoutPassword;
    return userWithoutPassword;
  }

  async signup(data: SignupData): Promise<User> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    if (mockUsers.some(u => u.username === data.username)) {
      throw new Error('Username already exists');
    }
    
    if (mockUsers.some(u => u.email === data.email)) {
      throw new Error('Email already exists');
    }
    
    const newUser: User & { password: string } = {
      id: String(mockUsers.length + 1),
      username: data.username,
      email: data.email,
      password: data.password,
    };
    
    mockUsers.push(newUser);
    const { password, ...userWithoutPassword } = newUser;
    this.currentUser = userWithoutPassword;
    return userWithoutPassword;
  }

  async logout(): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 200));
    this.currentUser = null;
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }

  // Leaderboard
  async getLeaderboard(limit: number = 10): Promise<LeaderboardEntry[]> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return [...mockLeaderboard].sort((a, b) => b.score - a.score).slice(0, limit);
  }

  async submitScore(score: number, gameMode: 'pass-through' | 'walls'): Promise<LeaderboardEntry> {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    if (!this.currentUser) {
      throw new Error('Must be logged in to submit score');
    }
    
    const entry: LeaderboardEntry = {
      id: String(mockLeaderboard.length + 1),
      username: this.currentUser.username,
      score,
      gameMode,
      date: new Date().toISOString().split('T')[0],
    };
    
    mockLeaderboard.push(entry);
    return entry;
  }

  // Active players (for watching)
  async getActivePlayers(): Promise<ActivePlayer[]> {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Return mock active players - these will be updated by the watch component
    return [
      {
        id: 'active1',
        username: 'player1',
        score: 45,
        gameMode: 'pass-through',
        gameState: {
          snake: [{ x: 5, y: 5 }, { x: 4, y: 5 }, { x: 3, y: 5 }],
          food: { x: 10, y: 10 },
          direction: 'right',
          score: 45,
          gameOver: false,
        },
      },
      {
        id: 'active2',
        username: 'player2',
        score: 30,
        gameMode: 'walls',
        gameState: {
          snake: [{ x: 15, y: 15 }, { x: 14, y: 15 }, { x: 13, y: 15 }],
          food: { x: 20, y: 20 },
          direction: 'down',
          score: 30,
          gameOver: false,
        },
      },
    ];
  }
}

export const apiService = new ApiService();

