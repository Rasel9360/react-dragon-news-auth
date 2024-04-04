import { useContext } from "react";
import Navbar from "../shared/Navbar/Navbar";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
    const {createUser} = useContext(AuthContext)


    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const name = form.get('name') ;
        const email = form.get("email");
        const password = form.get("password")
        const photo = form.get('photo')
        const terms = form.get('terms')
        console.log(name, email, password, photo, terms)

        createUser(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(err => console.error(err))
        e.target.reset();
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="">
                <h2 className="text-3xl text-center my-10">Please Register</h2>
                <div className="card mx-auto shrink-0 w-full max-w-md shadow-2xl  bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phot URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Enter Your Phot url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Enter Your Password" className="input input-bordered" required />
                            <div className="flex items-center gap-2 mt-5">
                                <input type="checkbox" name="terms" id="terms" />
                                <label htmlFor="terms">Accept Term & Conditions</label>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;