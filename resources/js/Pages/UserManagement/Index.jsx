import PlusSolid from '@/Components/Icons/PlusSolid'
import Table from '@/Components/Table/Table'
import TableCheckbox from '@/Components/Table/TableCheckbox'
import Tbody from '@/Components/Table/Tbody'
import Td from '@/Components/Table/Td'
import Th from '@/Components/Table/Th'
import Thead from '@/Components/Table/Thead'
import Tr from '@/Components/Table/Tr'
import Layout from '@/Shared/Layout'
import { Link } from '@inertiajs/react'
import React from 'react'

const Index = () => {
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
                            Hello2
                        </Th>
                        <Th>
                            Hello3
                        </Th>
                        <Th>
                            Hello4
                        </Th>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td type='checkbox'>
                                <TableCheckbox />
                            </Td>
                            <Td>
                                but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Td>
                            <Td>
                                but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Td>
                            <Td>
                                Four
                            </Td>
                        </Tr>
                        <Tr>
                            <Td type='checkbox'>
                                <TableCheckbox />
                            </Td>
                            <Td>
                                Two <br />
                                helo
                            </Td>
                            <Td>
                                Three
                            </Td>
                            <Td>
                                Four
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                O
                            </Td>
                            <Td>
                                Two
                            </Td>
                            <Td>
                                Three
                            </Td>
                            <Td>
                                Four
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                O
                            </Td>
                            <Td>
                                Two
                            </Td>
                            <Td>
                                Three
                            </Td>
                            <Td>
                                Four
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                O
                            </Td>
                            <Td>
                                Two
                            </Td>
                            <Td>
                                Three
                            </Td>
                            <Td>
                                Four
                            </Td>
                        </Tr>
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