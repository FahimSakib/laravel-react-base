export default function Th({ children, type = '', className = '' }) {
    return (
        <th scope="col" className={(type === 'checkbox' ? 'p-4 ' : 'px-6 py-3 ') + className}>
            {children}
        </th>
    )
}