import { createBrowserRouter } from "react-router-dom";
import Category from "../../Category/Category";
import Home from "../../Home/Home/Home";
import Main from "../../Layout/Main";
import News from "../../News/News";
import TermsAndConditions from "../../others/TermsAndConditions";
import Login from "../../Shared/Login/Login/Login";
import Register from "../../Shared/Login/Login/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://dragon-news-server-ten-steel.vercel.app/news')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://dragon-news-server-ten-steel.vercel.app/categories/${params.id}`)
            },

            {
                path: '/news/:id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({ params }) => fetch(`https://dragon-news-server-ten-steel.vercel.app/news/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <TermsAndConditions></TermsAndConditions>
            }
        ]
    }

])