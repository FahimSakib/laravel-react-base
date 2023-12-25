import { useState } from "react";
import EllipsisVertical from "../Icons/EllipsisVerticalSolid";
import MoreActionsDiv from "./MoreActionsDiv";

export default function MoreActions({ children, id }) {
    const [showMoreActions, setShowMoreActions] = useState(false)

    return (
        <div className={'flex items-center justify-end ' + (showMoreActions ? 'relative ' : '') + 'table-more-actions-' + id}>
            <button onClick={() => setShowMoreActions(prev => !prev)}>
                <EllipsisVertical />
            </button>
            {showMoreActions &&
                <MoreActionsDiv setShowMoreActions={setShowMoreActions} id={id}>
                    {children}
                </MoreActionsDiv>
            }
        </div>
    )
}