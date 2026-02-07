import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRouter, RouterProvider, createRoute, createRootRoute } from '@tanstack/react-router';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/sonner';

const queryClient = new QueryClient();

// Root route with no layout (each page handles its own layout)
const rootRoute = createRootRoute({
  component: () => <RouterProvider router={router} />
});

// Home route
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage
});

// Admin route
const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin',
  component: AdminPage
});

// Create router
const routeTree = rootRoute.addChildren([indexRoute, adminRoute]);
const router = createRouter({ routeTree });

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Toaster />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
