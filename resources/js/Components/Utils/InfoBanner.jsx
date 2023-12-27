import { useState } from "react";
import InformationCircleMiniSolid from "../Icons/InformationCircleMiniSolid";
import XMarkMiniSolid from "../Icons/XMarkMiniSolid";

export default function InfoBanner({ text = '', canHide = true }) {
    const [show, setShow] = useState(true)

    if (!show) {
        return (<></>)
    }

    return (
        <div className="flex items-center justify-between p-4 mb-6 bg-[#6366f1]/5 text-[#6c737f] dark:text-[#a0aec0] rounded-lg">
            <div className="flex items-center">
                <span>
                    <InformationCircleMiniSolid />
                </span>
                <span className="text-sm px-2">
                    {text}
                </span>
            </div>
            {canHide && <button onClick={() => setShow(false)}>
                <XMarkMiniSolid />
            </button>}
        </div>
    )
}