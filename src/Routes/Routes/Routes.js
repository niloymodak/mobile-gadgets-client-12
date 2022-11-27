import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Contact from "../../Pages/Contact/Contact";
import AddedMobile from "../../Pages/Dashboard/AddedMobile/AddedMobile";
import AddMobile from "../../Pages/Dashboard/AddMobile/AddMobile";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import BookedMobile from "../../Pages/Dashboard/BookedMobile/BookedMobile";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Payment from "../../Pages/Payment/Payment";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import SignUp from "../../Pages/SignUp/SignUp";
import ViewMobile from "../../Pages/ViewMobile/ViewMobile";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/viewmobile/:id',
                element: <PrivateRoute><ViewMobile></ViewMobile></PrivateRoute>,
                // loader: ({ params }) => fetch(`http://localhost:5000/categories/${params._id}`)
            },
            {
                path: '/addmobile',
                element: <AddMobile></AddMobile>
            },
            {
                path: '/addedmobiles',
                element: <AddedMobile></AddedMobile>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/myorders',
                element: <BookedMobile></BookedMobile>
            },
            {
                path: '/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`)
            },
        ]
    },
    {
        path: '/dashboard/allusers',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },

        ]
    },
    {
        path: '*',
        element: <Contact></Contact>
    }
])

export default router;