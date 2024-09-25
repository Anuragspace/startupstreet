import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Choose from './components/Choose'


const router=createBrowserRouter([
  {
    path:'/ss9/',
    element:<App/>,
    errorElement:<div>Not Found</div>
  },
  {
    path:'/ss9/register',
    element:<Choose/>,
    errorElement:<div>Not Found</div>
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
