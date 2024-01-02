import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement:<div>Error404</div>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
        ]
    }
])