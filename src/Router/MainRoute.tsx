
import { createBrowserRouter } from 'react-router-dom'
import Layout from '../Components/Common/Layout'
import Register from '../Pages/Auth/Register'
import SignIn from '../Pages/Auth/SignIn'
import ResetPassword from '../Pages/Auth/ResetPassword'
import ForgetPassword from '../Pages/Auth/ForgetPassword'
import HomeS from '../Pages/Home/HomeS'

export const MainRoute= createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children:[
            {
                path: "/home",
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
        path:"/forget-password",
        element: <ForgetPassword/>,
    },

])