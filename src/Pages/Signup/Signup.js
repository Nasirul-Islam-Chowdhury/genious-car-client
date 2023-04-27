import React, { useContext, useState } from 'react';
import img from '../../assets/images/login/login.svg'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaGoogle, FaLinkedin,FaFacebook } from "react-icons/fa";
import { setToken } from '../../api/auth';

const Signup = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const {createUser, googleSignin, facebookSignin} = useContext(AuthContext)
    const handleGoogleSignin = ()=>{
        googleSignin()
        .then(res =>{
            setToken(res)
            console.log(res.user)
            navigate('/')
        })
        .catch(error=>console.log(error))
    }
    const handlefacebookSignin = ()=>{
        facebookSignin()
        .then(res =>{
            console.log(res.user)
            navigate('/')
        })
        .catch(error=>console.log(error))
    }
    const handleSignup = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value
        const password = form.password.value
        createUser(email, password)
        .then(user => {
            console.log(user.user)
            setToken(user)
            event.target.reset();
            navigate('/')
        })
        .catch(error => setError(error.message))
    }

    return (
        <div className="hero w-full my-20">
        <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
            <div className="text-center lg:text-left">
                <img src={img} className='w-3/4' alt="" />
            </div>
            <form onSubmit={handleSignup} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-5">
                <h1 className="text-5xl font-bold text-center">Signup</h1>
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" placeholder="email" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="text" placeholder="password" className="input input-bordered" required />
                    <p className='text-red-600'>{error}</p>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn bg-orange-600 border-none" type="submit" value="Signup" />
                    </div>
                    <div>
                            <p className='text-center'>Or Signup With</p>
                            <div className='flex justify-center gap-2 py-3'>
                <FaGoogle onClick={handleGoogleSignin} className='cursor-pointer w-12 h-12 bg-base-300 p-3  rounded-full'/>
                <FaLinkedin className='cursor-pointer w-12 h-12 bg-base-300 p-3  rounded-full'/>
                <FaFacebook onClick={handlefacebookSignin} className='cursor-pointer w-12 h-12 bg-base-300 p-3  rounded-full'/>
                            </div>
                        </div>
                        <p className="text-center">Already Have an Account? <Link className='text-orange-600 font-bold' to='/login'>Login</Link></p>
                </div>
                
            </form>
        </div>
    </div>
    );
};

export default Signup;