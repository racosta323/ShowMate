import App from './components/App'
import Artists from './components/Artists/Artists'
import Search from './components/Search/Search'
import Reviews from './components/Artists/Reviews'
import Home from './components/Home/Home'


import { createBrowserRouter } from 'react-router-dom'
import UserProfile from './components/UserProfile/UserProfile'
import MyProfile from './components/MyUserProfile/MyProfile'

const routes = [
    {
        path:"/",
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: 'search',
                element: <Search/>
            },
            {
                path: 'artists/:id',
                element: <Artists/>
            },
            {
                path: 'artists/:id/reviews',
                element: <Reviews/>
            },
            {
                path: 'users/:id',
                element: <UserProfile/>
                // element: <MyProfile/>

            }
        ]
    }
]

export const router = createBrowserRouter(routes)