import TextInputDefault from "@/Components/Form/TextInputDefault";
import InformationCircleMicroSolid from "@/Components/Icons/InformationCircleMicroSolid";
import MinusSolidMini from "@/Components/Icons/MinusSolidMini";
import PlusSolid from "@/Components/Icons/PlusSolid";
import XMarkMiniSolid from "@/Components/Icons/XMarkMiniSolid";
import BasicModal from "@/Components/Modals/BasicModal";
import Tooltip from "@/Components/Modals/Tooltip";
import { useState } from "react";

export default function CreateModal({ setShowCreateModal }) {
    const uid = function () {
        return Date.now().toString(36) + Math.random().toString(36).slice(2);
    }

    const [fields, setFields] = useState([{ id: uid() }])
    const [permissionNamesSlugs, setPermissionNamesSlugs] = useState({})

    const permissionNameChange = (e, fieldId) => {
        const slugKey = `permission_slug_${fieldId}`
        const slug = e.target.value.replace(/\s/g, "-")
        setPermissionNamesSlugs(prev => ({ ...prev, [fieldId]: { [e.target.name]: e.target.value, [slugKey]: slug } }))
    }

    const addField = () => {
        setFields([...fields, { id: uid() }])
    }

    const deleteFiled = (fieldId) => {
        const updatedfields = permissionNamesSlugs
        delete updatedfields[fieldId]
        setPermissionNamesSlugs(updatedfields)
        setFields(fields.filter(field => field.id !== fieldId))
    }

    return (
        <BasicModal className="max-w-2xl w-full">
            <div className="flex items-center justify-between text-[#6c737f] dark:text-[#a0aec0]">
                <span className="font-medium text-lg">
                    Create Permission
                </span>
                <button
                    className="rounded-full hover:bg-[#111927]/10 dark:hover:bg-[#edf2f7]/10"
                    onClick={() => setShowCreateModal(false)}
                >
                    <XMarkMiniSolid />
                </button>
            </div>
            <div className="mt-5 px-3">
                <form className="space-y-5">
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
                        />
                    </div>
                    {fields.map((field, index) => (
                        <div className="flex items-center gap-3" key={field.id}>
                            <div className="w-1/2">
                                <TextInputDefault
                                    label="Permission Name"
                                    id={`permission_name_${field.id}`}
                                    name={`permission_name_${field.id}`}
                                    onChange={(e) => permissionNameChange(e, field.id)}
                                    value={permissionNamesSlugs[field.id]?.[`permission_name_${field.id}`] ?? ''}
                                />
                            </div>
                            <div className="w-1/2">
                                <TextInputDefault
                                    label="Permission slug"
                                    value={permissionNamesSlugs[field.id]?.[`permission_slug_${field.id}`] ?? ''}
                                    readOnly
                                />
                            </div>
                            <div className="pt-8">
                                {(fields.length > 1 && index !== 0) ? (<button
                                    className="rounded-full hover:bg-[#111927]/10 dark:hover:bg-[#edf2f7]/10"
                                    type="button"
                                    onClick={() => deleteFiled(field.id)}
                                >
                                    <MinusSolidMini />
                                </button>) : (<button
                                    className="rounded-full hover:bg-[#111927]/10 dark:hover:bg-[#edf2f7]/10"
                                    type="button"
                                    onClick={addField}
                                >
                                    <PlusSolid />
                                </button>)}
                            </div>
                        </div>))}
                    <div className="flex gap-2 justify-end">
                        <button
                            className="px-5 py-2 border dark:border-[#2F3746] text-[#111927] dark:text-[#edf2e7] font-semibold rounded-xl hover:bg-[#111927]/5 dark:hover:bg-[#edf2f7]/5"
                            type="button"
                            onClick={() => setShowCreateModal(false)}
                        >
                            Cancel
                        </button>
                        <button
                            className="flex items-center px-5 py-2 rounded-xl text-white font-semibold bg-[#6366f1] enabled:hover:bg-[#4338ca] disabled:opacity-75 disabled:cursor-not-allowed"
                            type="submit"
                        // disabled={confirmValue !== `delete ${selectedItems.ids.length} ${userOrUsers}`}
                        // onClick={deleteUsers}
                        // disabled
                        >
                            {/* {loading && <Spiner width="4" height="4" className="mr-2" />} */}
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </BasicModal>
    )
}