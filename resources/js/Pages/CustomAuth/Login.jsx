import TextInput from '@/Components/Form/TextInput'
import { Head } from '@inertiajs/react'
import React, { useEffect } from 'react'

const Login = () => {
    useEffect(() => {
        document.documentElement.classList.add('dark')
    }, [])
    return (
        <div className="bg-[#fffefe] dark:bg-[#0f1220] dark:text-[#edf2e7] w-full min-h-screen">
            <Head title="Login" />
            <div className="container mx-auto pt-10">
                <TextInput
                    label="Login"
                    id="login"
                    name="login"
                    type="email"

                />
            </div>
        </div>
    )
}

export default Login