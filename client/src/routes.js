import App from './components/App'
import Artists from './components/Artists/Artists'
import Search from './components/Search/Search'
import Reviews from './components/Artists/Reviews'
import Home from './components/Home/Home'


import { createBrowserRouter } from 'react-router-dom'
import UserProfile from './components/UserProfile/UserProfile'
import EditUserReview from './components/EditReview/EditUserReview'

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
                path: 'users',
                children: [
                    {
                        path: ':id',
                        element: <UserProfile/>
                    },
                    {
                        path: ':id/edit/:reviewId',
                        element: <EditUserReview/>
                    }
                ]
                // element: <MyProfile/>

            }
        ]
    }
]

export const router = createBrowserRouter(routes)