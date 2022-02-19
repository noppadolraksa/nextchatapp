import { Modal } from 'antd'
import React, { useState } from 'react'

type Props = {
  pic: string
}

const ChatDetailPhotoModel = ({ pic }: Props) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(true)
  const handleOk = () => {
    setIsModalVisible(false)
  }
  const handleCancel = () => {
    setIsModalVisible(false)
  }
  return (
    <Modal
      title="Picture"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <img src={pic} className="h-96 w-96" />
    </Modal>
  )
}

export default ChatDetailPhotoModel
