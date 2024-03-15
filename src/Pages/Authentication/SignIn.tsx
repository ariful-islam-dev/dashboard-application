import React from 'react'
import Layout from '../../Layout'
import Breadcrumb from '../../components/Breadcrumb'
import { Link } from 'react-router-dom'
import logo from '../../assets/image/Logo/logo.svg'

const SignIn = () => {
    return (
        <Layout>
            <Breadcrumb pageName='Sign In' />
            <div className='rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
                <div>
                    <div>
                        <div>
                            <Link to="/">
                                <img src={logo} alt="Logo" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default SignIn