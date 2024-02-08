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
import MoreActions from '@/Components/Table/MoreActions'
import TrashMicroSolid from '@/Components/Icons/TrashMicroSolid'
import MoreActionsLink from '@/Components/Table/MoreActionsLink'
import PencilSquareMicroSolid from '@/Components/Icons/PencilSquareMicroSolid'
import MoreActionsButton from '@/Components/Table/MoreActionsButton'
import SimplePaginate from '@/Components/Paginate/SimplePaginate'
import useMultiSelect from '@/Hooks/useMultiSelect'
import CreateModal from './Components/CreateModal'
import EditModal from './Components/EditModal'
import DeleteModal from './Components/DeleteModal'

const Index = () => {
    const { permissions } = usePage().props
    const [showCreateModal, setShowCreateModal] = useState(false)
    const [showEditModal, setShowEditModal] = useState(false)
    const [permissionToEdit, setPermissionToEdit] = useState({})
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [permissionToDelete, setPermissionToDelete] = useState({})
    const [selectedItems, setSelectedItems, selectSingleCheckbox, selectAllCheckbox, isAllChecked] = useMultiSelect();

    const handleSelectAll = (e) => {
        selectAllCheckbox(e, permissions.data.map(user => user.id))
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
                            onClick={() => { setPermissionToDelete({ ids: selectedItems, type: 'bulk' }); setShowDeleteModal(true) }}
                        >
                            <TrashMicroSolid />
                            Delete Selected ({selectedItems.ids.length})
                        </button>
                    }
                </div>
                <Table>
                    <Thead>
                        <Th type='checkbox'>
                            <TableCheckbox
                                onChange={handleSelectAll}
                                checked={isAllChecked(permissions.data.length)}
                            />
                        </Th>
                        <Th>
                            Module Name
                        </Th>
                        <Th>
                            Permission Name
                        </Th>
                        <Th>
                            Permission Slug
                        </Th>
                        <Th className="text-right">
                            Actions
                        </Th>
                    </Thead>
                    <Tbody>
                        {permissions.data.map(permission => (
                            <Tr key={permission.id}>
                                <Td type='checkbox'>
                                    <TableCheckbox
                                        onChange={(e) => selectSingleCheckbox(e, permission.id)}
                                        checked={selectedItems.ids.includes(permission.id)}
                                    />
                                </Td>
                                <Td className="capitalize">
                                    {permission.module_name}
                                </Td>
                                <Td>
                                    {permission.permission_name}
                                </Td>
                                <Td>
                                    {permission.permission_slug}
                                </Td>
                                <Td>
                                    <MoreActions id={permission.id}>
                                        <div>
                                            <MoreActionsButton
                                                label="Edit"
                                                icon={<PencilSquareMicroSolid />}
                                                onClick={() => { setPermissionToEdit(permission); setShowEditModal(true) }}
                                            />
                                            <MoreActionsButton
                                                label="Delete"
                                                icon={<TrashMicroSolid />}
                                                className="text-[#ff5630]"
                                                onClick={() => { setPermissionToDelete({ id: permission.id, type: 'single' }); setShowDeleteModal(true) }}
                                            />
                                        </div>
                                    </MoreActions>
                                </Td>
                            </Tr>))}
                    </Tbody>
                </Table>
                <div className="flex items-center justify-end min-h-[48px] px-6">
                    <SimplePaginate
                        prevPageUrl={permissions.prev_page_url}
                        nextPageUrl={permissions.next_page_url}
                    />
                </div>
            </div>
            {showCreateModal &&
                <CreateModal
                    setShowCreateModal={setShowCreateModal}
                />
            }
            {showEditModal &&
                <EditModal
                    permissionToEdit={permissionToEdit}
                    setPermissionToEdit={setPermissionToEdit}
                    setShowEditModal={setShowEditModal}
                />
            }
            {showDeleteModal &&
                <DeleteModal
                    setShowDeleteModal={setShowDeleteModal}
                    permissionToDelete={permissionToDelete}
                    setPermissionToDelete={setPermissionToDelete}
                    setSelectedItems={setSelectedItems}
                />
            }
        </div>
    )
}

Index.layout = page => <Layout children={page} title="Permission List" />
export default Index