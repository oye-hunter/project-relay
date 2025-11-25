# This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).



A modern email inbox interface built with Next.js 16, featuring authentication and database integration.## Getting Started



## Tech StackFirst, run the development server:



- **Frontend**: Next.js 16.x (App Router)```bash

- **Styling**: TailwindCSS + shadcn/uinpm run dev

- **Authentication**: BetterAuth (email/password)# or

- **Database**: Neon Postgres (free tier)yarn dev

- **ORM**: Drizzle ORM# or

pnpm dev

## Prerequisites# or

bun dev

- Node.js 18+ or Bun```

- pnpm (recommended) or npm

- Neon Postgres accountOpen [http://localhost:3000](http://localhost:3000) with your browser to see the result.



## Environment VariablesYou can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.



Create a `.env` file in the root directory with the following variables:This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.



```env## Learn More

# Neon Postgres

DATABASE_URL="your_neon_postgres_connection_string"To learn more about Next.js, take a look at the following resources:



# BetterAuth Secrets- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

BETTER_AUTH_SECRET="your_secret_key_here"- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

BETTER_AUTH_URL="http://localhost:3000"

```You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!



### How to Get Environment Variables:## Deploy on Vercel



1. **DATABASE_URL**: The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

   - Sign up at [Neon](https://neon.tech)

   - Create a new projectCheck out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

   - Copy the connection string from the inbox

2. **BETTER_AUTH_SECRET**: 
   - Generate a secure random string (at least 32 characters)
   - You can use: `openssl rand -base64 32` or any password generator

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd project-relay
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env` (if available)
   - Or create `.env` with the variables listed above

4. Push database schema to Neon:
```bash
pnpm db:push
```

5. Run the development server:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Database Commands

```bash
# Push schema changes to database (for development)
pnpm db:push

# Generate migration files (for version control)
pnpm db:generate

# Open Drizzle Studio to view/edit database
pnpm db:studio
```

## Project Structure

```
project-relay/
├── app/                  # Next.js App Router
│   ├── api/             # API routes
│   │   └── auth/        # BetterAuth endpoints
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── db/                  # Database configuration
│   ├── index.ts         # Database client
│   ├── schema.ts        # Drizzle schema
│   └── drizzle.config.ts # Drizzle Kit config
├── lib/                 # Utility libraries
│   └── auth.ts          # BetterAuth configuration
├── proxy.ts             # Next.js 16 proxy for auth protection
└── .env                 # Environment variables (not in git)
```

## Authentication

This project uses BetterAuth for authentication with:
- Email/Password authentication
- Session management
- Protected routes via middleware

### Protected Routes
All routes except `/`, `/login`, `/register`, and `/api/auth/*` are protected and require authentication.

## Database Schema

The database includes the following tables:
- `user` - User accounts
- `session` - Active sessions
- `account` - OAuth accounts (extensible)
- `verification` - Email verification tokens

## Development

```bash
# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [BetterAuth Documentation](https://better-auth.com)
- [Drizzle ORM Documentation](https://orm.drizzle.team)
- [Neon Documentation](https://neon.tech/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)

## License

This project is private and proprietary.
