import { createBrowserRouter,} from "react-router-dom";
import App from "../App";
import Home from "../Home/Home";
import Detail from "../DetailPage/Detail";
import AllBooks from "../AllBookPage/AllBooks";
import Login from "../Login/Login";
import Registration from "../Login/Registration";
import AddBook from "../AddNewBook.tsx/AddBook";
import WishList from "../wishlist/WishList";
import EditBook from "../Editbook.tsx/EditBook";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


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
      {
        path: "/AddBook",
        element:<PrivateRoute><AddBook/> </PrivateRoute> 
      },
      {
        path: "/wish",
        element: <PrivateRoute><WishList/></PrivateRoute>
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
    path: "/edit/:id",
    element:<EditBook/>
  },
    ]
  },
  
  {
    path:"*"
  }
]);
