# Aster Homes PG Platform

Production-ready full-stack web platform for Aster Homes PG in Ahmedabad.

## Stack

- Frontend: Next.js (App Router), Tailwind CSS, Material UI, Framer Motion
- Backend: Node.js, Express.js, Prisma ORM, JWT auth, Multer, Nodemailer
- Database: PostgreSQL (Neon recommended)

## Structure

- `frontend/` Next.js web app
- `backend/` Express API + Prisma schema

## Backend setup

1. `cd backend`
2. `npm install`
3. Copy `.env.example` to `.env` and set values.
4. Run Prisma setup:
   - `npm run prisma:generate`
   - `npm run prisma:migrate`
   - `npm run prisma:seed`
5. Start API:
   - `npm run dev`

## Frontend setup

1. `cd frontend`
2. `npm install`
3. Copy `.env.example` to `.env.local`
4. Start app:
   - `npm run dev`

## API Endpoints

- `POST /api/enquiries`
- `GET /api/enquiries` (admin)
- `DELETE /api/enquiries/:id` (admin)
- `GET /api/rooms`
- `GET /api/rooms/:id`
- `POST /api/rooms` (admin)
- `PUT /api/rooms/:id` (admin)
- `DELETE /api/rooms/:id` (admin)
- `GET /api/blogs`
- `GET /api/blogs/:slug`
- `POST /api/blogs` (admin)
- `PUT /api/blogs/:id` (admin)
- `DELETE /api/blogs/:id` (admin)
- `POST /api/contact`
- `GET /api/contact` (admin)
- `POST /api/auth/login`

## Deployment

- Frontend: Vercel (`frontend`)
- Backend: Render/Railway (`backend`)
- Database: Neon PostgreSQL

Set environment variables on each deployment target based on `.env.example`.
