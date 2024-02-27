import InputError from '@/Components/Form/InputError'
import TextInput from '@/Components/Form/TextInput'
import Spiner from '@/Components/Utils/Spiner'
import Layout from '@/Shared/Layout'
import { useForm, usePage } from '@inertiajs/react'
import React, { useState } from 'react'
import PermissionsByModule from './Components/PermissionsByModule'
import { router } from '@inertiajs/react'

const Create = () => {
    const { permissionsByModule } = usePage().props
    const [selectedIdsByModule, setSelectedIdsByModules] = useState({})
    const [loading, setLoading] = useState(false)
    const { data, setData, errors, setError, clearErrors, reset } = useForm({
        name: '',
    })

    const submit = (e) => {
        e.preventDefault()

        const permission_ids = [].concat(...Object.values(selectedIdsByModule))

        clearErrors()

        if (!data.name) {
            setError({ name: 'The role name field is required.' })
        }

        if (!permission_ids.length) {
            setError({ permission_ids: 'Please select at least one permission.' })
        }

        if (!data.name || !permission_ids.length) {
            return
        }

        router.post(route('roles.store'), { name: data.name, permission_ids }, {
            preserveScroll: true,
            onStart: () => {
                setLoading(true)
            },
            onSuccess: () => {
                setLoading(false)
                clearErrors()
                reset()
            },
            onFinish: () => {
                setLoading(false)
            }
        })
    }

    return (
        <div className="max-w-7xl mx-auto mt-8 dark:text-[#edf2e7]">
            <h4 className="text-2xl md:text-3xl font-bold">Create a new rule</h4>
            <div className="mt-8 p-8 rounded-2xl shadow dark:bg-[#111927]">
                <form className="space-y-5">
                    <div>
                        <TextInput
                            label="Role Name"
                            id="name"
                            name="name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                        />
                        <InputError message={errors.name} className="mt-2 ml-2" />
                    </div>
                </form>
                {(permissionsByModule.length === 0) &&
                    <p className="mt-5 text-sm text-[#6c737f] dark:text-[#a0aec0]">
                        Please create permissions first to create a role
                    </p>
                }
                {Object.keys(permissionsByModule).map((key) => (
                    <PermissionsByModule
                        module={key}
                        permissions={permissionsByModule[key]}
                        setSelectedIdsByModules={setSelectedIdsByModules}
                        key={key}
                    />
                ))}
                <InputError message={errors.permission_ids} className="mt-2 ml-2" />
                <div className="flex justify-end mt-5">
                    <button
                        className="flex items-center px-5 py-2 rounded-xl text-white font-semibold bg-[#6366f1] enabled:hover:bg-[#4338ca] disabled:opacity-75 disabled:cursor-not-allowed"
                        onClick={submit}
                        disabled={loading || (permissionsByModule.length === 0)}
                    >
                        {loading && <Spiner width="4" height="4" className="mr-2" />}
                        Create
                    </button>
                </div>
            </div>
        </div>
    )
}

Create.layout = page => <Layout children={page} title="Create Rule" />
export default Create