import React, { useContext, useState } from 'react';
import img from '../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaGoogle, FaLinkedin,FaFacebook } from "react-icons/fa";

const Login = () => {
    const {userSignin, googleSignin, facebookSignin} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    const [error, setError] = useState("");
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value
        const password = form.password.value
        event.target.reset();
        userSignin(email, password)
        .then(user => {
            // console.log(user.user)
            const currentUser = {
                email: user.user.email
            }
            // console.log(currentUser)
            fetch('https://genius-car-server-sooty-six.vercel.app/jwt', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                localStorage.setItem("geniusToken", data.token)
                navigate(from, {replace: true})
            })
        })
        .catch(error => {
            console.log(error)
            setError(error.message)
        })
    }
    const handleGoogleSignin = ()=>{
        googleSignin()
        .then(user => {
            // console.log(user.user)
            const currentUser = {
                email: user.user.email
            }
            // console.log(currentUser)
            fetch('https://genius-car-server-sooty-six.vercel.app/jwt', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                localStorage.setItem("geniusToken", data.token)
                navigate(from, {replace: true})
            })
        })
        .catch(error=>console.log(error))
    }
    const handlefacebookSignin = ()=>{
        facebookSignin()
        .then(res =>{
            console.log(res.user)
            navigate(from, {replace: true})

        })
        .catch(error=>console.log(error))
    }

    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={img} className='w-3/4' alt="" />
                </div>
                <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-5">
                    <h1 className="text-5xl font-bold text-center">Login</h1>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="text" placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" required/>
                            <p className='text-red-600 py-2'>{error}</p>
                            <label className="label p-0">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                       
                        <div className="form-control mt-2">
                            <input className="btn bg-orange-600 border-none" type="submit" value="Login" />
                        </div>
                        <div>
                            <p className='text-center'>Or Signin With</p>
                            <div className='flex justify-center gap-2 py-3'>
                            <FaGoogle onClick={handleGoogleSignin} className='cursor-pointer w-12 h-12 bg-base-300 p-3  rounded-full'/>
                <FaLinkedin className='cursor-pointer w-12 h-12 bg-base-300 p-3  rounded-full'/>
                <FaFacebook onClick={handlefacebookSignin} className='cursor-pointer w-12 h-12 bg-base-300 p-3  rounded-full'/>
                            </div>
                        </div>
                        <p className="text-center">New to Genius Car? <Link className='text-orange-600 font-bold' to='/signup'>Signup</Link></p>
                    </div>
                   
                </form>
         
            </div>
        </div>
    );
};

export default Login;