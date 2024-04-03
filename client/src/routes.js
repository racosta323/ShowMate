import App from './components/App'
import Profile from './components/Profile'

import { createBrowserRouter } from 'react-router-dom'

const routes = [
    {
        path:"/",
        element: <App/>,
        children: [
            {
                path: 'profile',
                element: <Profile/>
            }
        ]
    }
]

export const router = createBrowserRouter(routes)