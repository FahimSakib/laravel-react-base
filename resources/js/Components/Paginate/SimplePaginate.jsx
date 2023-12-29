import { Link } from "@inertiajs/react";
import ChevronLeftMiniSolid from "../Icons/ChevronLeftMiniSolid";
import ChevronRightMiniSolid from "../Icons/ChevronRightMiniSolid";

export default function SimplePaginate({ prevPageUrl, nextPageUrl }) {
    return (
        <div className="flex items-center gap-3">
            <Link
                href={prevPageUrl}
                className="text-[#111927] dark:text-[#edf2f7] disabled:text-[#6c737f] disabled:dark:text-[#9da4ae]"
                preserveScroll
                title="Go to previous page"
                as="button"
                disabled={!prevPageUrl}
            >
                <ChevronLeftMiniSolid />
            </Link>
            <Link
                href={nextPageUrl}
                className="text-[#111927] dark:text-[#edf2f7] disabled:text-[#6c737f] disabled:dark:text-[#9da4ae]"
                preserveScroll
                title="Go to next page"
                as="button"
                disabled={!nextPageUrl}
            >
                <ChevronRightMiniSolid />
            </Link>
        </div>
    )
}