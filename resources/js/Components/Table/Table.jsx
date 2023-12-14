export default function Table({ children, className = '' }) {
    return (
        <div className="overflow-x-auto">
            <table className={'w-full text-sm text-left rtl:text-right ' + className}>
                {children}
            </table>
        </div>
    )
}