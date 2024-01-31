import TextInputDefault from "@/Components/Form/TextInputDefault";
import InformationCircleMicroSolid from "@/Components/Icons/InformationCircleMicroSolid";
import PlusSolid from "@/Components/Icons/PlusSolid";
import XMarkMiniSolid from "@/Components/Icons/XMarkMiniSolid";
import BasicModal from "@/Components/Modals/BasicModal";
import Tooltip from "@/Components/Modals/Tooltip";

export default function CreateModal({ setShowCreateModal }) {
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
                    <div className="flex items-center gap-3">
                        <div className="w-1/2">
                            <TextInputDefault
                                label="Permission Name"
                            />
                        </div>
                        <div className="w-1/2">
                            <TextInputDefault
                                label="Permission slug"
                            />
                        </div>
                        <div className="pt-8">
                            <button
                                className="rounded-full hover:bg-[#111927]/10 dark:hover:bg-[#edf2f7]/10"
                            >
                                <PlusSolid />
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </BasicModal>
    )
}