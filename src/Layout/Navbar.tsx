import avater from "../images/avater.png"

const Navbar = () => {
    return (
        <div className='mx-9'>
           <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={avater} />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
          </a>
        </li>
          
        <li><a>All Books</a></li>
        <li><a>Signin</a></li>
        <li><a>Signup</a></li>
        <li><a>Signout</a></li>
        
      </ul>
    </div>
  </div>
</div>
       </div>
    );
};

export default Navbar;