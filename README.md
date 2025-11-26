# Project Relay

A modern, high-performance email inbox interface built with Next.js 16.

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** TailwindCSS + shadcn/ui
- **Auth:** BetterAuth
- **Database:** Neon Postgres
- **ORM:** Drizzle ORM

## 🛠️ Getting Started

### 1. Prerequisites
- Node.js 18+
- pnpm (recommended)
- A [Neon Postgres](https://neon.tech) account

### 2. Installation

```bash
# Clone the repo
git clone <repository-url>
cd project-relay

# Install dependencies
pnpm install
```

### 3. Environment Setup

Create a `.env` file in the root directory:

```env
# Database (Neon)
DATABASE_URL="postgresql://..."

# Authentication
BETTER_AUTH_SECRET="your_generated_secret"
NEXT_PUBLIC_BETTER_AUTH_URL="http://localhost:3000"
```

### 4. Database Setup

```bash
# Push schema to database
pnpm db:push
```

### 5. Run Development Server

```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

## 🗄️ Database Commands

```bash
pnpm db:push      # Push schema changes to DB
pnpm db:studio    # Open Drizzle Studio GUI
pnpm db:generate  # Generate migrations
```

## 📂 Project Structure

- `app/` - Next.js App Router pages and API
- `components/` - UI components (shadcn/ui)
- `db/` - Drizzle schema and config
- `lib/` - Utilities and auth config

## 🔒 Authentication

Powered by **BetterAuth**.
- **Public Routes:** `/`, `/login`, `/register`
- **Protected Routes:** All other routes (redirects to login)

## 📄 License

Private and proprietary.
