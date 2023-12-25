import PlusSolid from '@/Components/Icons/PlusSolid'
import Table from '@/Components/Table/Table'
import TableCheckbox from '@/Components/Table/TableCheckbox'
import Tbody from '@/Components/Table/Tbody'
import Td from '@/Components/Table/Td'
import Th from '@/Components/Table/Th'
import Thead from '@/Components/Table/Thead'
import Tr from '@/Components/Table/Tr'
import Layout from '@/Shared/Layout'
import { Link, usePage } from '@inertiajs/react'
import React from 'react'
import UserAvatar from './Components/UserAvatar'
import MoreActions from '@/Components/Table/MoreActions'
import PencilMicroSolid from '@/Components/Icons/PencilSquareMicroSolid'
import TrashMicroSolid from '@/Components/Icons/TrashMicroSolid'

const Index = () => {
    const { users } = usePage().props

    return (
        <div className="max-w-7xl mx-auto mt-8 dark:text-[#edf2e7]">
            <div className="flex justify-between items-center">
                <h4 className="text-2xl md:text-3xl font-bold">Users</h4>
                <Link
                    href={route('users.create')}
                    className="flex items-center gap-1 px-5 py-2 rounded-xl text-white font-semibold text-sm bg-[#6366f1] hover:bg-[#4338ca]">
                    <PlusSolid /> Add
                </Link>
            </div>
            <div className="mt-8 rounded-2xl shadow dark:bg-[#111927]">
                <div className="min-h-[48px]">
                </div>
                <Table>
                    <Thead>
                        <Th type='checkbox'>
                            <TableCheckbox />
                        </Th>
                        <Th>
                            Name
                        </Th>
                        <Th>
                            Phone
                        </Th>
                        <Th>
                            Status
                        </Th>
                        <Th className="text-right">
                            Actions
                        </Th>
                    </Thead>
                    <Tbody>
                        {users.map(user => (
                            <Tr key={user.id}>
                                <Td type='checkbox'>
                                    <TableCheckbox />
                                </Td>
                                <Td className='flex gap-2 items-center'>
                                    <UserAvatar user={user} />
                                    <div>
                                        <p className="font-semibold">{user.name}</p>
                                        <p className="text-[#6c737f] dark:text-[#a0aec0]">{user.email}</p>
                                    </div>
                                </Td>
                                <Td>
                                    {user.phone}
                                </Td>
                                <Td>
                                    {user.status}
                                </Td>
                                <Td>
                                    <MoreActions id={user.id}>
                                        <div>
                                            <Link
                                                href=''
                                                className="flex w-full p-2 gap-2 rounded-md items-center hover:bg-[#111927]/5 dark:hover:bg-[#f3f4f6]/5"
                                            >
                                                <PencilMicroSolid /> Edit
                                            </Link>
                                            <Link
                                                href=''
                                                className="flex w-full p-2 gap-2 rounded-md items-center hover:bg-[#111927]/5 dark:hover:bg-[#f3f4f6]/5"
                                            >
                                                <TrashMicroSolid /> Delete
                                            </Link>
                                        </div>
                                    </MoreActions>
                                </Td>
                            </Tr>))}
                    </Tbody>
                </Table>
                <div className="min-h-[48px]">
                </div>
            </div>
        </div>
    )
}

Index.layout = page => <Layout children={page} title="User List" />
export default Index