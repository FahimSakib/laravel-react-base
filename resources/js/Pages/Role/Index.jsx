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
import DeleteModal from './Components/DeleteModal'
import MoreActionsButton from '@/Components/Table/MoreActionsButton'
import SimplePaginate from '@/Components/Paginate/SimplePaginate'
import useMultiSelect from '@/Hooks/useMultiSelect'
import BulkDeleteModal from './Components/BulkDeleteModal'

const Index = () => {
    const { roles } = usePage().props
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [roleToDelete, setRoleToDelete] = useState({})
    const [showBulkDeleteModal, setShowBulkDeleteModal] = useState(false)
    const [selectedItems, setSelectedItems, selectSingleCheckbox, selectAllCheckbox, isAllChecked] = useMultiSelect();

    const deleteRole = (role) => {
        setRoleToDelete({ id: role.id, name: role.name })
        setShowDeleteModal(true)
    }

    const handleSelectAll = (e) => {
        selectAllCheckbox(e, roles.data.map(role => role.id))
    }

    return (
        <div className="max-w-7xl mx-auto mt-8 dark:text-[#edf2e7]">
            <div className="flex justify-between items-center">
                <h4 className="text-2xl md:text-3xl font-bold">Roles</h4>
                <Link
                    href={route('roles.create')}
                    className="flex items-center gap-1 px-5 py-2 rounded-xl text-white font-semibold text-sm bg-[#6366f1] hover:bg-[#4338ca]">
                    <PlusSolid /> Add
                </Link>
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
                            <TableCheckbox
                                onChange={handleSelectAll}
                                checked={isAllChecked(roles.data.length)}
                            />
                        </Th>
                        <Th>
                            Name
                        </Th>
                        <Th>
                            Permissions
                        </Th>
                        <Th>
                            Created By
                        </Th>
                        <Th className="text-right">
                            Actions
                        </Th>
                    </Thead>
                    <Tbody>
                        {roles.data.map(role => (
                            <Tr key={role.id}>
                                <Td type='checkbox'>
                                    <TableCheckbox
                                        onChange={(e) => selectSingleCheckbox(e, role.id)}
                                        checked={selectedItems.ids.includes(role.id)}
                                    />
                                </Td>
                                <Td>
                                    {role.name}
                                </Td>
                                <Td>
                                    {role.permissions.length} Permission{role.permissions.length > 1 ? 's' : ''}
                                </Td>
                                <Td>
                                    {role.user.name}
                                </Td>
                                <Td>
                                    <MoreActions id={role.id}>
                                        <div>
                                            <MoreActionsLink
                                                label="Edit"
                                                href={route('roles.edit', role.id)}
                                                icon={<PencilSquareMicroSolid />}
                                            />
                                            <MoreActionsButton
                                                label="Delete"
                                                icon={<TrashMicroSolid />}
                                                className="text-[#ff5630]"
                                                onClick={() => deleteRole(role)}
                                            />
                                        </div>
                                    </MoreActions>
                                </Td>
                            </Tr>))}
                    </Tbody>
                </Table>
                <div className="flex items-center justify-end min-h-[48px] px-6">
                    <SimplePaginate
                        prevPageUrl={roles.prev_page_url}
                        nextPageUrl={roles.next_page_url}
                    />
                </div>
            </div>
            {showDeleteModal &&
                <DeleteModal
                    setShowDeleteModal={setShowDeleteModal}
                    roleToDelete={roleToDelete}
                    setRoleToDelete={setRoleToDelete}
                />
            }
            {showBulkDeleteModal &&
                <BulkDeleteModal
                    setShowBulkDeleteModal={setShowBulkDeleteModal}
                    selectedItems={selectedItems}
                    setSelectedItems={setSelectedItems}
                />
            }
        </div>
    )
}

Index.layout = page => <Layout children={page} title="Role List" />
export default Index