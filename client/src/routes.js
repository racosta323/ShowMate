import App from './components/App'

import { createBrowserRouter } from 'react-router-dom'

const routes = [
    {
        path:"/",
        element: <App/>
    }
]

export const router = createBrowserRouter(routes)