import React from 'react'
import { Button } from '../ui/button'
import CardWrapper from './cardWrapper'

const LoginForm = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-24">
            <CardWrapper
            headLabel='Welcome Back'
            backButtonLabel="Don't have an account"
            backButtonhref="/auth/register"
            showSocial
            >
            LoginForm
            </CardWrapper>
        </div>
    )
}

export default LoginForm