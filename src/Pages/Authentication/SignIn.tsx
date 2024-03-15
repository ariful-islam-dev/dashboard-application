import React from 'react'
import Layout from '../../Layout'
import Breadcrumb from '../../components/Breadcrumb'
import { Link } from 'react-router-dom'
import logo from '../../assets/image/Logo/logo.svg'
import mobile from '../../assets/image/cell-phone.svg'

const SignIn = () => {
    return (
        <Layout>
            <Breadcrumb pageName='Sign In' />
            <div className=' m-12 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
                <div className='flex flex-wrap items-center'>
                    <div className='hidden w-full xl:block xl:w-1/2 border-md'>
                        <div className='py-17.5 px-26 text-center'>
                            <Link to="/" className='mb-5.5 inline-block'>
                                <div className='flex items-center justify-center'>
                                    <img className='hidden dark:block w-10 h-10' src={logo} alt="Logo" />
                                    <img className='dark:hidden w-10 h-10' src={logo} alt="Logo" />
                                    <h2 className='text-2xl font-bold text-black dark:text-white sm:text-title-xl2'>Dashboard</h2>
                                </div>
                            </Link>
                            <p className='2xl:px-20'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptates.
                            </p>
                            <span className='mt-15 inline-block'>
                                <img src={mobile} alt="Cell Phone" />
                            </span>
                        </div>
                    </div>
                    <div className='w-full border-l border-stroke border-l-2 dark:border-strokedark xl:w-1/2 xl: border-1-2'>
                        <div className='w-full p-4 sm:p-12.5 xl:p-17.5'>
                            <h2 className='mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2'>Sign In</h2>
                            <form>
                                <div className="mb-4">
                                    <label htmlFor="email" className='mb-2.5 block font-medium text-black dark:text-white'>Email</label>

                                    <div className='relative'>
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder='Enter your email'
                                            className='w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary'
                                        />
                                        <span className="absolute right-4 top-4">
                                            <svg className='fill-currentColor w-6 h-6 ' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" stroke-width="1.5" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="password" className='mb-2.5 block font-medium text-black dark:text-white'>Password</label>

                                    <div className='relative'>
                                        <input
                                            type="password"
                                            id="password"
                                            placeholder='6+ Characters, 1 Capital letter'
                                            className='w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary'
                                        />
                                        <span className="absolute right-4 top-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 fill-currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                                            </svg>

                                        </span>
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <input
                                        type="submit"
                                        value="Sign In"
                                        className='w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90'
                                    />
                                </div>
                                <button className='flex w-full items-center justify-center gap-3.5 rounded-lg border border-stroke bg-gray p-4 hover:bg-opacity-50 dark:border-strokedark dark:bg-gray-700 dark:hover-opacity-50'>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='w-6 h-6' viewBox="0 0 48 48">
                                            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                        </svg>
                                    </span>
                                    Sign in With Google
                                </button>
                                <div className="mt-6 text-center">
                                    <p>Don't have andy account?
                                        <Link to={"/auth/signup"} className='text-primary'> Sign Up</Link>
                                    </p>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default SignIn