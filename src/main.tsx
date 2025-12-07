import { hydrateRoot, createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();

const rootElement = document.getElementById('root')!;

const app = (
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);

// Check if content is prerendered
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  // Fallback for dev mode
  createRoot(rootElement).render(app);
}