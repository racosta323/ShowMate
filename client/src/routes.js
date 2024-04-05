import App from './components/App'
import Profile from './components/Profile'
import Search from './components/Search'

import { createBrowserRouter } from 'react-router-dom'

const routes = [
    {
        path:"/",
        element: <App/>,
        children: [
            {
                path: 'search',
                element: <Search/>
            },
            {
                path: 'profile/:id',
                element: <Profile/>
            }
        ]
    }
]

export const router = createBrowserRouter(routes)