# Next.js User Management System with Prisma and PostgreSQL

A modern web application that provides a streamlined user management interface built with Next.js, Prisma ORM, and PostgreSQL. The system offers real-time user creation and listing capabilities with a responsive design using Tailwind CSS.

This application demonstrates the integration of Next.js API routes with Prisma for database operations, featuring a clean architecture that separates concerns between the frontend components and backend API. The system implements a robust user management system with form validation, error handling, and real-time updates using React's latest features.

## Repository Structure

```
.
├── app/                          # Next.js application directory
│   ├── api/                     # API route handlers
│   │   └── users/              # User-related API endpoints
│   ├── components/             # Reusable React components
│   └── page.tsx               # Main application page
├── lib/                        # Shared utilities and configurations
│   └── prisma.ts              # Prisma client configuration
├── prisma/                    # Database schema and migrations
│   └── migrations/            # Database migration files
├── package.json               # Project dependencies and scripts
└── tsconfig.json             # TypeScript configuration
```

## Usage Instructions

### Prerequisites

- Node.js (v16.x or higher)
- PostgreSQL (v13 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/elllyers/prismaneon.git
cd prismaneon
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Set up the database:

```bash
# Create a .env file with your database connection string
echo "DATABASE_URL=postgresql://user:password@localhost:5432/dbname" > .env

# Run database migrations
npx prisma migrate dev
```

### Quick Start

1. Start the development server:

```bash
npm run dev
# or
yarn dev
```

2. Open your browser and navigate to `http://localhost:3000`

### More Detailed Examples

Creating a new user:

```typescript
// Using the API endpoint
const response = await fetch("/api/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "John Doe",
    email: "john@example.com",
    location: "New York",
    password: "securepassword",
  }),
});
```

### Troubleshooting

Common Issues:

1. Database Connection Errors

```
Error: P1001: Can't reach database server
```

- Verify PostgreSQL is running
- Check DATABASE_URL in .env file
- Ensure network connectivity to database

2. Prisma Client Issues

```bash
# Regenerate Prisma Client
npx prisma generate

# Reset database and apply migrations
npx prisma migrate reset
```

## Data Flow

The application follows a straightforward data flow where user requests are processed through Next.js API routes and persisted to PostgreSQL via Prisma ORM.

```ascii
Client Request → Next.js API Route → Prisma Client → PostgreSQL Database
     ↑                                                      |
     |                                                      |
     └──────────────── JSON Response ←────────────────────←─┘
```

Key Component Interactions:

- Frontend components make API calls to /api/users endpoint
- API routes validate incoming requests and handle data operations
- Prisma Client manages database connections and queries
- PostgreSQL stores user data persistently
- Real-time updates are reflected in the UI through React state management
