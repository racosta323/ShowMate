import App from './components/App'
import Artists from './components/Artists/Artists'
import Search from './components/Search/Search'
import ArtistReviews from './components/Artists/ArtistReviews'
import Home from './components/Home/Home'
import Reviews from './components/Reviews/Reviews'


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
                element: <ArtistReviews/>
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
            },
            {
                path: 'reviews',
                element: <Reviews/>
            }
        ]
    }
]

export const router = createBrowserRouter(routes)