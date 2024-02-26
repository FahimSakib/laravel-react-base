import InputError from '@/Components/Form/InputError'
import TextInput from '@/Components/Form/TextInput'
import Spiner from '@/Components/Utils/Spiner'
import Layout from '@/Shared/Layout'
import { useForm, usePage } from '@inertiajs/react'
import React, { useState } from 'react'
import PermissionsByModule from './Components/PermissionsByModule'

const Create = () => {
    const { permissionsByModule } = usePage().props
    const [selectedIdsByModule, setSelectedIdsByModules] = useState({})
    const { data, setData, post, processing, errors, reset } = useForm({
        role_name: '',
    })

    const submit = (e) => {
        e.preventDefault()

        post(route('users.store'), {
            preserveScroll: true,
            onSuccess: () => {
                reset()
            },
        })
    }

    return (
        <div className="max-w-7xl mx-auto mt-8 dark:text-[#edf2e7]">
            <h4 className="text-2xl md:text-3xl font-bold">Create a new rule</h4>
            <div className="mt-8 p-8 rounded-2xl shadow dark:bg-[#111927]">
                <form className="space-y-5" onSubmit={submit}>
                    <div>
                        <TextInput
                            label="Role Name"
                            id="role_name"
                            name="role_name"
                            value={data.role_name}
                            onChange={(e) => setData('role_name', e.target.value)}
                        />
                        <InputError message={errors.name} className="mt-2 ml-2" />
                    </div>
                </form>
                {Object.keys(permissionsByModule).map((key) => (
                    <PermissionsByModule
                        module={key}
                        permissions={permissionsByModule[key]}
                        setSelectedIdsByModules={setSelectedIdsByModules}
                        key={key}
                    />
                ))}
                <div className="flex justify-end mt-5">
                    <button
                        className={
                            'flex items-center px-5 py-2 rounded-xl text-white font-semibold bg-[#6366f1] hover:bg-[#4338ca] '
                            + (processing ? 'opacity-75 ' : '')
                        }
                        type="submit"
                        disabled={processing}
                    >
                        {processing && <Spiner width="4" height="4" className="mr-2" />}
                        Create
                    </button>
                </div>
            </div>
        </div>
    )
}

Create.layout = page => <Layout children={page} title="Create Rule" />
export default Create