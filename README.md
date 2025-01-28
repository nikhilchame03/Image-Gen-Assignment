# AI Image Gallery  

An AI-generated image gallery built with Next.js and Tailwind CSS, featuring filtering, tags, and authentication using Clerk. 

**Deployed Link:** https://image-gen-assignment-7d4w.vercel.app/

## Features  
- **Image Display**:  
  Browse a collection of AI-generated images with details like:  
  - Title  
  - AI model (e.g., Stable Diffusion, DALL-E)  
  - Generation date  
  - Tags  

- **Dynamic Filtering**:  
  Filter images by AI model with real-time updates.  

- **Tag Sidebar**:  
  View all unique tags extracted from images. Tags are displayed as clickable badges (future enhancement: filter by tags).  

- **Authentication**:  
  User login, signup, and logout powered by **Clerk**.  

- **Responsive Design**:  
  Modern, responsive UI styled with **Tailwind CSS** and **Shadcn UI components**.  

## Tech Stack  
- **Frontend**:  
  - [Next.js](https://nextjs.org)  
  - [React](https://reactjs.org)  
  - [Tailwind CSS](https://tailwindcss.com)  

- **Authentication**:  
  - [Clerk](https://clerk.dev)  

- **Styling**:  
  - [Shadcn UI](https://ui.shadcn.dev)  

- **Data**:  
  - Mock data from `images.json` (can be replaced with an API).  

## Setup  

### Prerequisites  
- [Node.js](https://nodejs.org) (v18 or higher)  
- npm or yarn  
- Clerk account for authentication  

### Steps  

1. **Clone the Repository**:  
   ```bash  
   git clone https://github.com/your-username/ai-image-gallery.git  
   cd ai-image-gallery

2. **Install Dependencies:**:
   ```bash
   npm install  
    # or  
    yarn install

3. **Set Up Environment Variables:**:
   ```bash
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key  
    CLERK_SECRET_KEY=your-clerk-secret-key

4. **Run the Development Server:**
 ```bash
npm run dev  
# or  
yarn dev  




  
