export default function Td({ children, type = '', className = '' }) {
    return (
        <td className={(type === 'checkbox' ? 'w-5 p-4 ' : 'px-6 py-4 ') + className}>
            {children}
        </td>
    )
}