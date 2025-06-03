# Yummy UI

A modern e-commerce application built with Next.js, React, and PostgreSQL.

## Overview

Yummy UI is an e-commerce platform that allows users to browse products, view product details, and add items to their cart. The application is built using the T3 stack with Next.js, React, TypeScript, and PostgreSQL with Drizzle ORM.

## Features

- Product listing with images and prices
- Product detail pages
- Modal product views
- Add to cart functionality
- Authentication using Clerk

## Technologies Used

- **Frontend**:
  - Next.js 15.x (App Router)
  - React 19.x
  - TypeScript
  - Tailwind CSS

- **Backend**:
  - Next.js API Routes
  - Drizzle ORM
  - PostgreSQL (via NeonDB serverless)

- **Authentication**:
  - Clerk

- **Development Tools**:
  - ESLint
  - Prettier
  - TypeScript
  - Docker/Podman (for local database)

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 10.x or higher
- Docker or Podman (for local database)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd yummy_ui
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:
   ```
   DATABASE_URL=postgres://postgres:password@localhost:5432/yummy_ui
   # Add Clerk authentication keys if needed
   ```

4. Start the local development database:
   ```bash
   ./start-database.sh
   ```

5. Run database migrations:
   ```bash
   npm run db:push
   ```

6. Start the development server:
   ```bash
   npm run dev
   ```

7. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `src/app/` - Next.js App Router pages and layouts
  - `@modal/` - Intercepting routes for modal components
  - `_components/` - Shared components for the app
  - `layout.tsx` - Root layout component
  - `page.tsx` - Home page component

- `src/server/` - Server-side code
  - `db/` - Database configuration and schema
  - `queries.ts` - Database query functions

- `public/` - Static assets

## Available Scripts

- `npm run dev` - Start the development server with Turbo
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run preview` - Build and start the production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Run ESLint with auto-fix
- `npm run format:check` - Check code formatting with Prettier
- `npm run format:write` - Fix code formatting with Prettier
- `npm run typecheck` - Run TypeScript type checking
- `npm run check` - Run linting and type checking
- `npm run db:generate` - Generate Drizzle migrations
- `npm run db:migrate` - Run Drizzle migrations
- `npm run db:push` - Push schema changes to the database
- `npm run db:studio` - Open Drizzle Studio to manage the database

## Database Management

The project uses Drizzle ORM with PostgreSQL. The database schema is defined in `src/server/db/schema.ts`.

To start a local development database, run:
```bash
./start-database.sh
```

This script will create a Docker/Podman container with PostgreSQL configured for the application.

## Workflow

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
