
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { useContext } from "react";

const Navbar = () => {
  const {user,logOut}=useContext(AuthContext);
  const handleLogOut=()=>{
    logOut()
    .then(()=>console.log("user logged out sucessfully"));

  
  }

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/" className="text-xl">Home</Link>
            </li>
            <li tabIndex={0}>
                <Link to="/login" className="text-xl">Login</Link>
             
            </li>
            <li>
                <Link to="/register" className="text-xl">Register</Link>
             
            </li>
            <li>
                <Link to="/orders" className="text-xl">orders</Link>
             
            </li>
            
          </ul>
        </div>
        <div className="navbar-end">
          {
            user && <span>{user.email}</span>
          }
          <a onClick={handleLogOut} className="btn">SignOut</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
