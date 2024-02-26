import TableCheckbox from "@/Components/Table/TableCheckbox";
import useMultiSelect from "@/Hooks/useMultiSelect";
import { memo, useEffect } from "react";

const PermissionsByModule = ({ module, permissions, setSelectedIdsByModules, selectedPermissionsByModule = '', type = '' }) => {
    const [selectedItems, setSelectedItems, selectSingleCheckbox, selectAllCheckbox, isAllChecked] = useMultiSelect();

    // console.log(selectedPermissionsByModule, type)

    useEffect(() => {
        if (type === 'edit' && selectedPermissionsByModule) {
            const selectedIds = selectedPermissionsByModule.map(selectedPermission => selectedPermission.id)
            setSelectedItems({ ids: selectedIds })
        }
    }, [])

    const handleSelectAll = (e) => {
        selectAllCheckbox(e, permissions.map(permission => permission.id))
    }

    useEffect(() => {
        setSelectedIdsByModules(prev => ({ ...prev, [module]: selectedItems.ids }))
    }, [selectedItems])

    return (
        <div className="mt-5">
            <div className="flex items-center gap-1">
                <TableCheckbox
                    onChange={handleSelectAll}
                    checked={isAllChecked(permissions.length)}
                />
                <span className="font-medium capitalize">{module}</span>
            </div>
            <div className="flex flex-wrap gap-3 mt-3 ml-5">
                {permissions.map((permission, index) => (
                    <div className="flex items-center gap-1" key={index}>
                        <TableCheckbox
                            onChange={(e) => selectSingleCheckbox(e, permission.id)}
                            checked={selectedItems.ids.includes(permission.id)}
                        />
                        <span className="text-sm">{permission.permission_name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default memo(PermissionsByModule)