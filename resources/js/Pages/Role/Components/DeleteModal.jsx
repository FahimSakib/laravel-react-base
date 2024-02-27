import TextInputDefault from "@/Components/Form/TextInputDefault";
import BasicModal from "@/Components/Modals/BasicModal";
import InfoBanner from "@/Components/Utils/InfoBanner";
import Spiner from "@/Components/Utils/Spiner";
import { router } from "@inertiajs/react";
import { useState } from "react";

export default function DeleteModal({ setShowDeleteModal, roleToDelete, setRoleToDelete }) {
    const [confirmValue, setConfirmValue] = useState('')
    const [loading, setLoading] = useState(false)

    const deleteRole = () => {
        router.delete(route('roles.destroy', roleToDelete.id), {
            preserveScroll: true,
            onStart: () => {
                setLoading(true)
            },
            onSuccess: () => {
                setRoleToDelete({})
                setShowDeleteModal(false)
                setLoading(false)
            },
            onFinish: () => {
                setLoading(false)
            }
        })
    }

    return (
        <BasicModal>
            <div>
                <p className="my-4 text-center text-lg font-normal text-[#111927] dark:text-[#edf2e7]">
                    Are you sure want to delete?
                </p>
                <InfoBanner
                    text="All the related data for this role will also be deleted."
                    canHide={false}
                    className="mb-4"
                />
                <div>
                    <p className="text-xs pl-1 pb-1 text-[#6c737f] dark:text-[#a0aec0]">
                        To confirm, type "<span className="font-bold ">{roleToDelete.name}</span>" in the box below
                    </p>
                    <TextInputDefault
                        value={confirmValue}
                        onChange={e => setConfirmValue(e.target.value)}
                    />
                </div>
                <div className="my-4 flex flex-col sm:flex-row gap-2">
                    <button
                        className="flex items-center justify-center w-full sm:w-1/2 px-6 py-3 rounded-xl text-white font-semibold bg-[#ff5630] enabled:hover:bg-[#b71d18] disabled:opacity-30 disabled:cursor-not-allowed"
                        disabled={(confirmValue !== roleToDelete.name) || loading}
                        onClick={deleteRole}
                    >
                        {loading && <Spiner width="4" height="4" className="mr-2" />}
                        Delete
                    </button>
                    <button
                        className="w-full sm:w-1/2 px-6 py-3 border dark:border-[#2F3746] text-[#111927] dark:text-[#edf2e7] font-semibold rounded-xl hover:bg-[#111927]/5 dark:hover:bg-[#edf2f7]/5"
                        onClick={() => { setShowDeleteModal(false); setRoleToDelete({}) }}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </BasicModal>
    )
}