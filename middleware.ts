import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// Define all public routes, including pages accessible to signed-out users
const isPublicRoute = createRouteMatcher([
  '/sign-in(.*)',  // Sign-in page
  '/',             // Home page (example)
]);

export default clerkMiddleware(async (auth, request) => {
  if (!isPublicRoute(request)) {
    // Only protect private routes
    await auth.protect();
  }
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
