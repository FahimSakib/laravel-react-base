import InputError from "@/Components/Form/InputError";
import TextInputDefault from "@/Components/Form/TextInputDefault";
import InformationCircleMicroSolid from "@/Components/Icons/InformationCircleMicroSolid";
import XMarkMiniSolid from "@/Components/Icons/XMarkMiniSolid";
import BasicModal from "@/Components/Modals/BasicModal";
import Tooltip from "@/Components/Modals/Tooltip";
import Spiner from "@/Components/Utils/Spiner";
import { useForm } from "@inertiajs/react";
import { useEffect } from "react";

export default function EditModal({ permissionToEdit, setPermissionToEdit, setShowEditModal }) {
    const { data, setData, patch, processing, errors, reset } = useForm({
        module_name: permissionToEdit.module_name,
        permission_name: permissionToEdit.permission_name,
        permission_slug: permissionToEdit.permission_slug
    })

    useEffect(() => {
        const slug = data.permission_name.replace(/\s/g, "-").toLowerCase()
        setData('permission_slug', slug)
    }, [data.permission_name])


    const submit = (e) => {
        e.preventDefault()

        patch(route('permissions.update', permissionToEdit.id), {
            preserveScroll: true,
            onSuccess: () => {
                reset()
                setPermissionToEdit({})
                setShowEditModal(false)
            },
        })
    }

    return (
        <BasicModal className="max-w-2xl w-full">
            <div className="flex items-center justify-between text-[#6c737f] dark:text-[#a0aec0]">
                <span className="font-medium text-lg">
                    Update Permission
                </span>
                <button
                    className="rounded-full hover:bg-[#111927]/10 dark:hover:bg-[#edf2f7]/10"
                    onClick={() => { setShowEditModal(false); setPermissionToEdit({}) }}
                >
                    <XMarkMiniSolid />
                </button>
            </div>
            <div className="mt-5 px-3">
                <form className="space-y-5" onSubmit={submit}>
                    <div>
                        <div className="flex items-center gap-1 mb-2">
                            <label htmlFor="module_name" className="block text-sm font-medium">Module Name</label>
                            <div className="flex-grow">
                                <Tooltip
                                    label={<InformationCircleMicroSolid />}
                                    TooltipText="This is a demo tooltip"
                                />
                            </div>
                        </div>
                        <TextInputDefault
                            id="module_name"
                            value={data.module_name}
                            onChange={(e) => setData('module_name', e.target.value)}
                        />
                        <InputError message={errors.module_name} className="mt-2 ml-2" />
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-1/2">
                            <TextInputDefault
                                label="Permission Name"
                                id="permission_name"
                                name="permission_name"
                                onChange={(e) => setData('permission_name', e.target.value)}
                                value={data.permission_name}
                            />
                            <InputError message={errors.permission_name} className="mt-2 ml-2" />
                        </div>
                        <div className="w-1/2">
                            <TextInputDefault
                                label="Permission slug"
                                value={data.permission_slug}
                                readOnly
                                disabled
                                className="disabled:cursor-not-allowed"
                            />
                            <InputError message={errors.permission_slug} className="mt-2 ml-2" />
                        </div>
                    </div>
                    <div className="flex gap-2 justify-end">
                        <button
                            className="px-5 py-2 border dark:border-[#2F3746] text-[#111927] dark:text-[#edf2e7] font-semibold rounded-xl hover:bg-[#111927]/5 dark:hover:bg-[#edf2f7]/5"
                            type="button"
                            onClick={() => { setShowEditModal(false); setPermissionToEdit({}) }}
                        >
                            Cancel
                        </button>
                        <button
                            className="flex items-center px-5 py-2 rounded-xl text-white font-semibold bg-[#6366f1] enabled:hover:bg-[#4338ca] disabled:opacity-75 disabled:cursor-not-allowed"
                            type="submit"
                            disabled={processing}
                        >
                            {processing && <Spiner width="4" height="4" className="mr-2" />}
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </BasicModal>
    )
}