
import { createBrowserRouter } from 'react-router-dom'
import Layout from '../Components/Common/Layout'
import HomeScreen from '../Pages/Home/HomeScreen'
import Register from '../Pages/Auth/Register'
import SignIn from '../Pages/Auth/SignIn'
import ResetPassword from '../Pages/Auth/ResetPassword'
import ForgetPassword from '../Pages/Auth/ForgetPassword'

export const MainRoute= createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children:[
            {
                path: "/home",
                element: <HomeScreen/>,
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
        path:"/forgot-password",
        element: <ForgetPassword/>,
    },

])