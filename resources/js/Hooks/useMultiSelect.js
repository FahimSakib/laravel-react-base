import { useState } from 'react'

export default function useMultiSelect() {
  const [selectedItems, setSelectedItems] = useState({ ids: [] })

  const selectSingleCheckbox = (event, id) => {
    if (event.target.checked) {
      setSelectedItems((prev) => ({
        ids: [...prev.ids, id],
      }))
      return
    }

    const selectedId = selectedItems.ids.filter((itemId) => itemId !== id)
    setSelectedItems({ ids: selectedId })
  }

  const selectAllCheckbox = (event, ids) => {
    if (event.target.checked) {
      setSelectedItems({ ids })
      return
    }

    setSelectedItems({ ids: [] })
  }

  const isAllChecked = (dataLength) => {
    if (dataLength === 0) {
      return false
    }

    if (dataLength === selectedItems.ids.length) {
      return true
    }
    return false
  }

  return [selectedItems, setSelectedItems, selectSingleCheckbox, selectAllCheckbox, isAllChecked]
}
