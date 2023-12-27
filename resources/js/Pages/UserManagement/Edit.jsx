import InputError from '@/Components/Form/InputError'
import TextInput from '@/Components/Form/TextInput'
import ArrowUpTrayMini from '@/Components/Icons/ArrowUpTrayMini'
import ToggleButton from '@/Components/ToggleButton'
import Spiner from '@/Components/Utils/Spiner'
import Layout from '@/Shared/Layout'
import { useForm, usePage } from '@inertiajs/react'
import React, { useState } from 'react'
import UpdatePassword from './Components/UpdatePassword'
import InfoBanner from '@/Components/Utils/InfoBanner'

const Edit = () => {
    const { user } = usePage().props
    const [avatarUrl, setAvatarUrl] = useState('')
    const { data, setData, post, processing, errors, reset } = useForm({
        name: user.name,
        email: user.email,
        phone: user.phone,
        avatar: '',
        status: user.status,
        _method: 'put',
    })

    console.log(user)

    const handleAvatarChange = (e) => {
        const file = e.target.files[0]
        setData('avatar', file)

        if (file) {
            setAvatarUrl(URL.createObjectURL(file))
        } else {
            setAvatarUrl('')
        }
    }

    const submit = (e) => {
        e.preventDefault()

        post(route('users.update', user.id), {
            preserveScroll: true,
            onSuccess: () => {
                reset('avatar')
                setAvatarUrl('')
            },
        })
    }

    return (
        <div className="max-w-7xl mx-auto mt-8 dark:text-[#edf2e7]">
            <h4 className="text-2xl md:text-3xl font-bold">Edit user</h4>
            <div className="flex flex-col md:flex-row mt-8 gap-6">
                <div className="w-full md:w-1/3 p-8 h-fit rounded-2xl shadow dark:bg-[#111927]">
                    <div className="space-y-5 md:mt-10">
                        <div className="flex items-center justify-center">
                            <label htmlFor="avatar" className="w-28 h-28 cursor-pointer ring-1 p-1 rounded-full">
                                {/* avatarUrl ? <img src={avatarUrl} alt="avatar preview" className="w-full h-full rounded-full object-cover" /> : */}
                                {avatarUrl ?
                                    <img src={avatarUrl} alt="avatar preview" className="w-full h-full rounded-full object-cover" /> :
                                    (user.avatar ? <img src={`/storage/avatars/${user.avatar}`} alt="avatar preview" className="w-full h-full rounded-full object-cover" /> :
                                        <div className="w-full h-full rounded-full flex flex-col gap-2 items-center justify-center bg-[#e5e7eb] dark:bg-[#d2d6db] text-black">
                                            <ArrowUpTrayMini />
                                            <p className="text-xs font-semibold text-center">Upload Photo</p>
                                        </div>)
                                }
                                <input
                                    id="avatar"
                                    type="file"
                                    className="hidden"
                                    onChange={handleAvatarChange}
                                />
                            </label>
                        </div>
                        <p className={'text-xs text-center ' + (errors.avatar ? 'text-red-500' : 'text-[#6c737f] dark:text-[#a0aec0] ')}>
                            Allowed *.jpeg, *.jpg, *.png (REC: 120X120 px) <br />
                            max size of 2 MB
                        </p>
                    </div>
                    <div className="flex justify-between items-center mt-10 md:mt-14">
                        <p className="font-medium">Active</p>
                        <ToggleButton
                            size="small"
                            checked={data.status === 'active'}
                            handleOnChange={(e) => setData('status', e.target.checked ? 'active' : 'inactive')}
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-6 w-full md:w-2/3">
                    <div className="w-full p-8 rounded-2xl shadow dark:bg-[#111927]">
                        <form className="space-y-5" onSubmit={submit}>
                            <div>
                                <TextInput
                                    label="Name"
                                    id="name"
                                    name="name"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                />
                                <InputError message={errors.name} className="mt-2 ml-2" />
                            </div>
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
                                    label="Phone"
                                    id="phone"
                                    name="phone"
                                    value={data.phone !== null ? data.phone : ''}
                                    onChange={(e) => setData('phone', e.target.value)}
                                />
                                <InputError message={errors.phone} className="mt-2 ml-2" />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    className={
                                        'flex items-center px-5 py-2 rounded-xl text-white font-semibold bg-[#6366f1] hover:bg-[#4338ca] '
                                        + (processing ? 'opacity-75 ' : '')
                                    }
                                    type="submit"
                                    disabled={processing}
                                >
                                    {processing && <Spiner width="4" height="4" className="mr-2" />}
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="w-full p-8 rounded-2xl shadow dark:bg-[#111927]">
                        {(user.default_password == true) && <InfoBanner
                            text="Please update your password since the one you now use is the default."
                            canHide={false}
                        />}
                        <UpdatePassword id={user.id} />
                    </div>
                </div>
            </div>
        </div>
    )
}

Edit.layout = page => <Layout children={page} title="Edit User" />
export default Edit