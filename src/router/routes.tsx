import { createBrowserRouter,} from "react-router-dom";
import App from "../App";
import Home from "../Home/Home";
import Detail from "../DetailPage/Detail";
import AllBooks from "../AllBookPage/AllBooks";
import Login from "../Login/Login";
import Registration from "../Login/Registration";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element:<Home/>
      },
      {
        path: "/book/:id",
        element:<Detail/>
      },
      {
        path: "/allBook",
        element:<AllBooks/>
      },
    ]
  },
  {
    path: "/login",
    element:<Login/>
  },
  {
    path: "/signup",
    element:<Registration/>
  },
  {
    path:"*"
  }
]);
