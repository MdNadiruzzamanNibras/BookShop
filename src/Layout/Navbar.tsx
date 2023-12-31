import { Link } from "react-router-dom";
import { setUser } from "../redux/user/userslice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
// import { useEffect } from "react";


const Navbar = () => {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const { books } = useAppSelector((state) => state.wish);
//  useEffect(() => {
//   localStorage.setItem('books', JSON.stringify(books));
// }, [books]);
  const Logout = () => {
    console.log('Logout');
    signOut(auth).then(() => {
     
      dispatch(setUser(null));
    });
  };

    return (
        <div className='mx-9'>
          <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <Link to='/'>
                <li className="mx-4">Home</li>
                  
                </Link> 
        <Link to='/allBook'>
                <li className="mx-4">All Book</li>
                  
                </Link> 
        <Link to='/AddBook'>
                <li className="mx-4">Add Book</li>
                  
                </Link> 
                <li className="mx-4">Wishlist{ books.length}</li>
              {!user.email && <Link to='/login'>
                <li>login</li>
              </Link>}
              {
                user.email &&  <li onClick={Logout}>logout</li>
              }
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">Bookshop</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu text-xl font-bold menu-horizontal px-1">
              <Link to='/'>
                <li className="mx-4">Home</li>
                  
                </Link> 
        <Link to='/allBook'>
                <li className="mx-4">All Book</li>
                  
              </Link> 
              <Link to='/wish'>
               <li className="mx-4">Wishlist <span className="ml-4">{ books.length}</span></li></Link>
        <Link to='/AddBook'>
                <li className="mx-4">Add Book</li>
                  
                </Link> 
               
              
              {!user.email &&
                <Link to='/login'>
                <li className="mx-4">login</li>
                </Link>
              }
              {!user.email &&
                <Link to='/signup'>
                <li className="mx-4">Sign UP</li>
                </Link>
              }
              {
                user.email &&  <li onClick={Logout}>logout</li>
              }
     
    </ul>
  </div>
  
</div>
       </div>
    );
};

export default Navbar;