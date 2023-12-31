
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { useContext } from "react";

const Login = () => {
  const {signIn}=useContext(AuthContext);
    const handleLogin=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const  password=e.target.password.value;
        console.log(email,password)
        signIn(email,password)
        .then(result=>{
          console.log(result.user);
        })
        .catch(error=>{
          console.log(error);
        })
        
    }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
       
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h2 className="text-3xl mb-3">Login Now</h2>
            <form onSubmit={handleLogin}>
            
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p>New here?Please<Link to="/register"><button className="btn btn-active btn-link">Register</button></Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
