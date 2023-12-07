import Checkbox from '@/Components/Form/Checkbox'
import InputError from '@/Components/Form/InputError'
import TextInput from '@/Components/Form/TextInput'
import Spiner from '@/Components/Utils/Spiner'
import { Head, useForm } from '@inertiajs/react'
import React, { useEffect } from 'react'

const Login = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

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
                    <form className="space-y-5" onSubmit={submit}>
                        <div>
                            <TextInput
                                label="Email"
                                id="email"
                                name="email"
                                type="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                            />
                            <InputError message={errors.email} className="mt-2 ml-2" />
                        </div>
                        <div>
                            <TextInput
                                label="Password"
                                id="password"
                                name="password"
                                type="password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                            />
                            <InputError message={errors.password} className="mt-2 ml-2" />
                        </div>
                        <div className="py-2">
                            <Checkbox
                                label="Remember me"
                                id="remember"
                                name="remember"
                                checked={data.remember}
                                onChange={(e) => setData('remember', e.target.checked)}
                            />
                        </div>
                        <div>
                            <button
                                className={
                                    'flex items-center justify-center w-full px-6 py-3 rounded-xl text-white font-semibold bg-[#6366f1] hover:bg-[#4338ca] '
                                    + (processing ? 'opacity-75 ' : '')
                                }
                                type="submit"
                                disabled={processing}
                            >
                                {processing && <Spiner width="4" height="4" className="mr-2" />}
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