import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { ImGoogle } from 'react-icons/im';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';


const notify = () => toast.success('Successfully registerd!');
const notifyError = (message) => toast.error(message);

const Signup = () => {

    const { createUser, googleLogin, updateUserProfile } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/'

    const googleProvider = new GoogleAuthProvider();

    const handleSubmit = event => {
        event.preventDefault();
        //get user info
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const role = form.role.value;
        const email = form.email.value;
        const password = form.password.value;

        const newUser = {
            userName: name,
            email: email,
            photoURL: photoURL,
            role: role
        }
        // console.log(name, photoURL, email, password, role);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                // form.reset();
                //post user info to server
                fetch('https://assignment-product-resale-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })

                handleUpdateUserProfile(name, photoURL);
                const jwtUser = {
                    email: user.email
                }
                //get jwt token
                fetch('https://assignment-product-resale-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(jwtUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        localStorage.setItem('Token', data.token);
                        notify();
                        navigate(from, { replace: true });
                    })
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                notifyError(errorMessage);
                console.log(errorMessage);
            })
    }

    //google signUp implementation
    const handleGoogle = () => {
        googleLogin(googleProvider)
            .then(result => {
                const user = result.user;
                const newUser = {
                    userName: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL,
                    role: 'Buyer'
                }
                //post user info to server
                fetch('https://assignment-product-resale-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);

                    })
                console.log(user);
                const jwtUser = {
                    email: user.email
                }

                //get jwt token
                fetch('https://assignment-product-resale-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(jwtUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        localStorage.setItem('Token', data.token);
                        notify();
                        navigate(from, { replace: true });
                    })

            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                notifyError(errorMessage);
                console.log(errorMessage);
            })
    }

    //update user profile
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        };
        updateUserProfile(profile)
            .then(() => { })
            .catch(err => console.log(err))
    }
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <Helmet>
                <title>Bibliophile - SignUp</title>
            </Helmet>
            <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10 ">
                <div className="self-center mb-6 text-xl font-bold text-gray-800 sm:text-2xl dark:text-white">
                    Sign Up
                </div>
                <div className="flex gap-4 item-center">
                    <button onClick={handleGoogle} type="button" className="py-2 px-4 flex justify-center items-center  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                        <ImGoogle className="mr-2" />
                        Google
                    </button>
                </div>
                <div className="mt-8">
                    <form onSubmit={handleSubmit} action="#" autoComplete="off">
                        <div>
                            <input name='name' type="text" id="name" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent mb-2" placeholder="Your name" required />
                            <input name='photoURL' type="text" id="photo" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent mb-2" placeholder="Your photoURL" required />
                            <select name='role' className="select select-primary w-full max-w-xs mb-2 ml-6">
                                <option defaultValue>Buyer</option>
                                <option>Seller</option>
                            </select>
                        </div>
                        <div className="flex flex-col mb-2">
                            <div className="flex relative ">
                                <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                    <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                                        </path>
                                    </svg>
                                </span>
                                <input name='email' type="email" id="sign-in-email" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" placeholder="Your email" required />

                            </div>
                        </div>
                        <div className="flex flex-col mb-6">
                            <div className="flex relative ">
                                <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                    <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z">
                                        </path>
                                    </svg>
                                </span>
                                <input name='password' type="password" id="password" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" placeholder="Your password" required />
                            </div>
                        </div>

                        <div className="flex w-full">
                            <button type="submit" className="py-2 px-4  bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
                <div className="flex items-center justify-center mt-6">
                    <p className="inline-flex items-center text-xs text-center text-gray-900 dark:text-gray-100 dark:hover:text-white">
                        <span className="ml-2">
                            Already have an account?
                        </span>
                        <Link className='font-semibold underline' to={'/login'}>Log In here.</Link>
                    </p>
                </div>
            </div>
        </div>

    );
};

export default Signup;