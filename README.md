# BMS Academy - Supabase Edition

This is the BMS Academy application built with React, Vite, and Supabase as the backend.

## Features

- Course management system
- Student testimonials
- Contact form submissions
- Admin dashboard
- Authentication with Supabase Auth
- Real-time data with Supabase Database

## Setup Instructions

1. **Set up Supabase Project**
   - Create a new project at [supabase.com](https://supabase.com)
   - Copy your project URL and anon key
   - Run the migrations in the `supabase/migrations` folder

2. **Environment Variables**
   - Copy `.env.example` to `.env`
   - Fill in your Supabase credentials:
     ```
     VITE_SUPABASE_URL=your_supabase_project_url
     VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
     ```

3. **Install Dependencies**
   ```bash
   npm install
   ```

4. **Run Development Server**
   ```bash
   npm run dev
   ```

## Database Schema

The application uses the following main tables:
- `admins` - Admin user accounts
- `course_categories` - Course categories
- `courses` - Course information
- `testimonials` - Student testimonials
- `contact_messages` - Contact form submissions
- `enrollments` - Course enrollment records

## Authentication

The app uses Supabase Auth for admin authentication. Admin users can:
- Manage courses and categories
- View and respond to contact messages
- Manage testimonials
- View enrollment data

## Deployment

1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting provider
3. Make sure to set the environment variables in your hosting platform