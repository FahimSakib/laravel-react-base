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
import React, { useState } from 'react'
// import UserAvatar from './Components/UserAvatar'
import MoreActions from '@/Components/Table/MoreActions'
import TrashMicroSolid from '@/Components/Icons/TrashMicroSolid'
import MoreActionsLink from '@/Components/Table/MoreActionsLink'
import PencilSquareMicroSolid from '@/Components/Icons/PencilSquareMicroSolid'
// import DeleteModal from './Components/DeleteModal'
import MoreActionsButton from '@/Components/Table/MoreActionsButton'
import SimplePaginate from '@/Components/Paginate/SimplePaginate'
import useMultiSelect from '@/Hooks/useMultiSelect'
import CreateModal from './Components/CreateModal'
// import BulkDeleteModal from './Components/BulkDeleteModal'
// import Status from './Components/Status'

const Index = () => {
    const { users } = usePage().props
    const [showCreateModal, setShowCreateModal] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [userToDelete, setUserToDelete] = useState({})
    const [showBulkDeleteModal, setShowBulkDeleteModal] = useState(false)
    const [selectedItems, setSelectedItems, selectSingleCheckbox, selectAllCheckbox, isAllChecked] = useMultiSelect();

    // const deleteUser = (user) => {
    //     setUserToDelete({ id: user.id, name: user.name })
    //     setShowDeleteModal(true)
    // }

    const handleSelectAll = (e) => {
        selectAllCheckbox(e, users.data.map(user => user.id))
    }

    return (
        <div className="max-w-7xl mx-auto mt-8 dark:text-[#edf2e7]">
            <div className="flex justify-between items-center">
                <h4 className="text-2xl md:text-3xl font-bold">Permissions</h4>
                <button
                    onClick={() => setShowCreateModal(true)}
                    className="flex items-center gap-1 px-5 py-2 rounded-xl text-white font-semibold text-sm bg-[#6366f1] hover:bg-[#4338ca]">
                    <PlusSolid /> Add
                </button>
            </div>
            <div className="mt-8 rounded-2xl shadow dark:bg-[#111927]">
                <div className="flex items-center min-h-[48px] pl-3">
                    {(selectedItems.ids.length > 0) &&
                        <button
                            className="flex px-1 py-1.5 gap-1 text-sm text-[#ff5630] rounded-md hover:bg-[#111927]/5 dark:hover:bg-[#edf2f7]/5"
                            onClick={() => setShowBulkDeleteModal(true)}
                        >
                            <TrashMicroSolid />
                            Delete Selected ({selectedItems.ids.length})
                        </button>
                    }
                </div>
                <Table>
                    <Thead>
                        <Th type='checkbox'>
                            {/* <TableCheckbox
                                onChange={handleSelectAll}
                                checked={isAllChecked(users.data.length)}
                            /> */}
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
                        {/* {users.data.map(user => (
                            <Tr key={user.id}>
                                <Td type='checkbox'>
                                    <TableCheckbox
                                        onChange={(e) => selectSingleCheckbox(e, user.id)}
                                        checked={selectedItems.ids.includes(user.id)}
                                    />
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
                                    <Status status={user.status} />
                                </Td>
                                <Td>
                                    <MoreActions id={user.id}>
                                        <div>
                                            <MoreActionsLink
                                                label="Edit"
                                                href={route('users.edit', user.id)}
                                                icon={<PencilSquareMicroSolid />}
                                            />
                                            <MoreActionsButton
                                                label="Delete"
                                                icon={<TrashMicroSolid />}
                                                className="text-[#ff5630]"
                                                onClick={() => deleteUser(user)}
                                            />
                                        </div>
                                    </MoreActions>
                                </Td>
                            </Tr>))} */}
                    </Tbody>
                </Table>
                <div className="flex items-center justify-end min-h-[48px] px-6">
                    {/* <SimplePaginate
                        prevPageUrl={users.prev_page_url}
                        nextPageUrl={users.next_page_url}
                    /> */}
                </div>
            </div>
            {showCreateModal &&
                <CreateModal
                    setShowCreateModal={setShowCreateModal}
                />
            }
        </div>
    )
}

Index.layout = page => <Layout children={page} title="Permission List" />
export default Index