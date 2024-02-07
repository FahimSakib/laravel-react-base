import BasicModal from "@/Components/Modals/BasicModal";
import InfoBanner from "@/Components/Utils/InfoBanner";
import Spiner from "@/Components/Utils/Spiner";
import { router } from "@inertiajs/react";
import { useState } from "react";

export default function DeleteModal({ setShowDeleteModal, permissionToDelete, setPermissionToDelete }) {
    const [loading, setLoading] = useState(false)

    const deletePermission = () => {
        router.delete(route('permissions.destroy', permissionToDelete), {
            preserveScroll: true,
            onStart: () => {
                setLoading(true)
            },
            onSuccess: () => {
                setPermissionToDelete('')
                setLoading(false)
                setShowDeleteModal(false)
            },
            onFinish: () => {
                setLoading(false)
            }
        })
    }

    return (
        <BasicModal>
            <div className="">
                <p className="my-4 text-center text-lg font-normal text-[#111927] dark:text-[#edf2e7]">
                    Are you sure want to delete?
                </p>
                <InfoBanner
                    text="All the related data for this permission will also be deleted."
                    canHide={false}
                    className="mb-4"
                />
                <div className="my-4 flex flex-col gap-2">
                    <button
                        className="flex items-center justify-center w-full px-6 py-3 rounded-xl text-white font-semibold bg-[#ff5630] enabled:hover:bg-[#b71d18] disabled:opacity-30 disabled:cursor-not-allowed"
                        disabled={loading}
                        onClick={deletePermission}
                    >
                        {loading && <Spiner width="4" height="4" className="mr-2" />}
                        Delete
                    </button>
                    <button
                        className="w-full px-6 py-3 border dark:border-[#2F3746] text-[#111927] dark:text-[#edf2e7] font-semibold rounded-xl hover:bg-[#111927]/5 dark:hover:bg-[#edf2f7]/5"
                        onClick={() => { setShowDeleteModal(false); setPermissionToDelete('') }}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </BasicModal>
    )
}