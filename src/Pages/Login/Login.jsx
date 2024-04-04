import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
    const { signInUser } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get("email");
        const password = form.get("password")

        signInUser(email, password)
            .then(result => {
                navigate(location?.state ? location.state : '/')
                console.log(result.user)
            })
            .catch(err => console.log(err))
        e.target.reset()
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="">
                <h2 className="text-3xl text-center my-10">Please Login</h2>
                <div className="card mx-auto shrink-0 w-full max-w-md shadow-2xl  bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="Email" name="email" placeholder="email" className="input input-bordered" required />
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
                        <p className="text-center">Do not have an account? <Link className="link text-purple-600 font-bold" to='/register'>Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;