import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import Checkout from "../../Pages/Checkout/Checkout";
import Orders from "../../Pages/Orders/Orders";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
{
    path: '/',
    element: <Main/>,
    children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/signup',
            element: <Signup/>
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/checkout/:id',
            element: <PrivateRoute><Checkout/></PrivateRoute>,
            loader: ({params})=> fetch(`https://genius-car-server-sooty-six.vercel.app/services/${params.id}`)
        },
        {
            path: '/orders',
            element: <PrivateRoute><Orders/></PrivateRoute>,
            loader: ()=> fetch(`https://genius-car-server-sooty-six.vercel.app/orders`)
        }
    ]
}
])
export default router