import BasicModal from "@/Components/Modals/BasicModal";
import InfoBanner from "@/Components/Utils/InfoBanner";

export default function DeleteModal({ }) {
    return (
        <BasicModal>
            <div className="s">
                <p className="my-4 text-center text-lg font-normal text-[#111927] dark:text-[#edf2e7]">
                    Are you sure want to delete?
                </p>
                <InfoBanner
                    text="All the related data for this user will also be deleted (i.e., permissions)."
                    canHide={false}
                />
                <div className="my-4 flex flex-col sm:flex-row gap-2">
                    <button
                        className={
                            'flex items-center justify-center w-full sm:w-1/2 px-6 py-3 rounded-xl text-white font-semibold bg-[#ff5630] hover:bg-[#b71d18] '
                            // + (processing ? 'opacity-75 ' : '')
                        }
                        type="submit"
                    // disabled={processing}
                    >
                        {/* {processing && <Spiner width="4" height="4" className="mr-2" />} */}
                        Delete
                    </button>
                    <button className="w-full sm:w-1/2 px-6 py-3 border dark:border-[#2F3746] text-[#111927] dark:text-[#edf2e7] font-semibold rounded-xl hover:bg-[#111927]/5 dark:hover:bg-[#edf2f7]/5">
                        Cancel
                    </button>
                </div>
            </div>
        </BasicModal>
    )
}