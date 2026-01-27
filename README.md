# Gramix

A modern social media application built with Next.js 16, featuring real-time interactions, user authentication, and a responsive design.

## Features

- User authentication and authorization with Clerk
- Create, read, and interact with posts
- Like and comment on posts
- Follow/unfollow users
- Real-time notifications system
- User profiles with customizable information
- Image upload functionality with UploadThing
- Dark/Light theme support
- Responsive design for mobile and desktop
- PostgreSQL database with Prisma ORM

## Tech Stack

### Frontend

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Radix UI** - Accessible UI components
- **Lucide React** - Icons
- **React Hot Toast** - Notifications

### Backend

- **Next.js API Routes** - Serverless API endpoints
- **Prisma** - Database ORM
- **PostgreSQL** - Database
- **Clerk** - Authentication and user management
- **UploadThing** - File upload service

## Database Schema

The application uses the following data models:

- **User** - User profiles with bio, location, website, and social connections
- **Post** - User-generated content with images
- **Comment** - Comments on posts
- **Like** - Post likes
- **Follows** - User follow relationships
- **Notification** - System notifications for likes, comments, and follows

## Prerequisites

- Node.js 20 or higher
- PostgreSQL database
- Clerk account
- UploadThing account

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd gramix
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

Create a `.env` file in the root directory with the following variables:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
DATABASE_URL=your_postgresql_connection_string
UPLOADTHING_TOKEN=your_uploadthing_token
```

4. Set up the database:

```bash
npx prisma generate
npx prisma db push
```

## Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Project Structure

```
gramix/
├── prisma/
│   └── schema.prisma          # Database schema
├── public/                    # Static assets
├── src/
│   ├── actions/              # Server actions
│   ├── app/                  # Next.js app directory
│   │   ├── api/             # API routes
│   │   ├── notifications/   # Notifications page
│   │   ├── profile/         # User profile pages
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   ├── components/          # React components
│   ├── generated/           # Prisma generated client
│   └── lib/                 # Utility functions
├── .env                     # Environment variables
├── next.config.ts          # Next.js configuration
├── package.json            # Dependencies
└── tsconfig.json          # TypeScript configuration
```

## Key Features Implementation

### Authentication

User authentication is handled by Clerk, providing secure sign-up, sign-in, and session management.

### Posts and Interactions

Users can create posts with optional images, like posts, and add comments. All interactions trigger real-time notifications.

### Follow System

Users can follow and unfollow each other, with a "Who to Follow" recommendation system.

### Notifications

Real-time notification system for likes, comments, and new followers with read/unread status.

### Theme Support

Built-in dark and light theme support with system preference detection.

## Contributing

Contributions are welcome. Please follow the existing code style and conventions.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
