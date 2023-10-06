import { createBrowserRouter } from 'react-router-dom'
import Layout from '../Components/Common/Layout'
import Register from '../Pages/Auth/Register'
import SignIn from '../Pages/Auth/SignIn'
import ResetPassword from '../Pages/Auth/ResetPassword'
import HomeS from '../Pages/Home/HomeS'
import ChangePassword from '../Pages/Auth/ChangePassword'
import Lawpage from '../Pages/Home/Lawpage'
import LawyerRegister from '../Pages/Auth/LawyerRegister'
import CreateLaw from '../Pages/Home/CreateLaw'

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
        path:"/lawyer-register",
        element: <LawyerRegister/>,
    },
    {
        path:"/sign-in",
        element: <SignIn/>,
    },
    {
        path:"/:token/sign-in",
        element: <SignIn/>,
    },
    {
        path:"/reset-password",
        element: <ResetPassword/>,
    },
    {
        path:"/:token/change-password",
        element: <ChangePassword/>,
    },
    {
        path:"/law-page",
        element: <Lawpage/>,
    },
    {
        path:"/create-law",
        element: <CreateLaw/>,
    },

])