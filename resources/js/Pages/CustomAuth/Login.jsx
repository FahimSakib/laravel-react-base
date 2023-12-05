import Checkbox from '@/Components/Form/Checkbox'
import TextInput from '@/Components/Form/TextInput'
import { Head } from '@inertiajs/react'
import React, { useEffect } from 'react'

const Login = () => {
    // useEffect(() => {
    //     document.documentElement.classList.add('dark')
    // }, [])

    return (
        <div className="flex bg-[#fffefe] dark:bg-[#0f1220] dark:text-[#edf2e7] w-full min-h-screen">
            <Head title="Login" />
            <div className="hidden md:block grow bg-[url('/assets/images/login-bg.jpg')] bg-cover">
            </div>
            <div className="w-full md:w-[600px] px-16 my-auto">
                <div>
                    <h4 className="text-xl font-bold">
                        Laravel React <span className="text-[#6366f1]">Base</span>
                    </h4>
                    <p className="text-2xl font-bold mt-4 mb-8">Log In</p>
                    <form className="space-y-5">
                        <div>
                            <TextInput
                                label="Email"
                                id="email"
                                name="email"
                                type="email"
                            />
                        </div>
                        <div>
                            <TextInput
                                label="Password"
                                id="password"
                                name="password"
                                type="password"
                            />
                        </div>
                        <div className="py-2">
                            <Checkbox
                                label="Remember me"
                                id="remember"
                                name="remember"
                            />
                        </div>
                        <div>
                            <button
                                className="w-full px-6 py-3 rounded-xl text-white font-semibold bg-[#6366f1] hover:bg-[#4338ca]"
                                type="submit"
                            >
                                Continue
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login