import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Navbar from "../Components/Navbar";

const Register = () => {
 const {createUser,logOut}= useContext(AuthContext)
    const handleRegister=e=>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        createUser(email,password)
        .then(result=>{
          console.log(result);
        })
        .catch(error=>{
          console.error(error);
        })
    }
    return (
      <div>
        <Navbar></Navbar>
        <div className="hero mt-64 ">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Register now!</h1>
            
          </div>
          <div className="card bg-base-100  shrink-0 shadow-2xl">
            <form onSubmit={handleRegister}>
            <div className="card-body w-96">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </div>
            </form>
            <p className="px-3 pb-2 text-center">Already have an Account? Please <Link className="text-blue-600 font-semibold" to='/login'>Login</Link> </p>
          </div>
        </div>
      </div>
      </div>
       
    );
};

export default Register;