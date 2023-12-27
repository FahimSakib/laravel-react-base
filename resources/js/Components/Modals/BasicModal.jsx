export default function BasicModal({ children }) {
    return (
        <div className="flex items-center justify-center h-full w-full fixed inset-0 bg-[#0f1220]/50 backdrop-blur-sm">
            <div className="p-4 m-4 max-w-md w-full max-h-screen overflow-x-hidden overflow-y-auto bg-[#fffefe] dark:bg-[#1c2536] shadow-md dark:shadow-lg rounded-lg">
                {children}
            </div>
        </div>
    )
}