import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AllNews from '../pages/AllNews';
import Dashboard from '../pages/Dashboard/Dashboard';
import AdminHom from '../pages/Dashboard/Admin/AdminHom';


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        // errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/news',
                element: <AllNews />
            },
            {
                path: '/blog',
                element: <Blog />
            },

        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            // admin roots
            {
                path: 'admin-home',
                element: <AdminHom />
            },

            // Survey role


        ]
    },
])

export default routes;
