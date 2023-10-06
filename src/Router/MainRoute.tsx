import { createBrowserRouter } from 'react-router-dom'
import Layout from '../Components/Common/Layout'
import Register from '../Pages/Auth/Register'
import SignIn from '../Pages/Auth/SignIn'
import ResetPassword from '../Pages/Auth/ResetPassword'
import HomeS from '../Pages/Home/HomeS'
import ChangePassword from '../Pages/Auth/ChangePassword'
import Lawpage from '../Pages/Home/Lawpage'

export const MainRoute= createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children:[
            {
                index: true,
                element: <HomeS/>,
            }
        ]
    },
    {
        path:"/register",
        element: <Register/>,
    },
    {
        path:"/sign-in",
        element: <SignIn/>,
    },
    {
        path:"/reset-password",
        element: <ResetPassword/>,
    },
    {
        path:"/change-password",
        element: <ChangePassword/>,
    },
    {
        path:"/law-page",
        element: <Lawpage/>,
    },

])