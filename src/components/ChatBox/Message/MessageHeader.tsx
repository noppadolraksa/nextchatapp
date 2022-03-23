import moment from 'moment'
import React from 'react'
import { AuthContextDefaultValues } from '../../../context/AuthContext'
import { useSelect } from '../../../context/SelectContext'

const MessageHeader = () => {
  const { select } = useSelect()
  return (
    <div className="my-4 flex h-10 flex-col items-center">
      <h4 className="mb-px text-2xl font-bold text-gray-600 dark:text-white">
        {select !== AuthContextDefaultValues ? select.displayName : <div></div>}
      </h4>
      <p className="text-xs text-gray-700 dark:text-gray-400">
        {select !== AuthContextDefaultValues &&
          `last active ${moment(select.lastSeen?.seconds * 1000).format(
            'lll'
          )}`}
      </p>
    </div>
  )
}

export default MessageHeader
