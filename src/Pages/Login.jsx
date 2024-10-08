import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Navbar from "../Components/Navbar";


const Login = () => {
  const {signIn} = useContext(AuthContext)
  const location = useLocation()
  const navigate= useNavigate()
    const handleLogin=e=>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        signIn(email,password)
        .then(result=>{
          console.log(result);
          navigate(location?.state? location.state:'/')
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
             <h1 className="text-5xl font-bold">Login now!</h1>
             
           </div>
           <div className="card bg-base-100  shrink-0 shadow-2xl">
             <form onSubmit={handleLogin}>
             <div className="card-body w-96">
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
             <p className="px-3 pb-2 text-center">Don`t have an Account? Please <Link className="text-blue-600 font-semibold" to='/register'>Register</Link> </p>
           </div>
         </div>
       </div>
      </div>
       
    );
};

export default Login;