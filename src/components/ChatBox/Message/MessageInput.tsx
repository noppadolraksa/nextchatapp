import React, { useEffect, useState } from 'react'
import { SendOutlined } from '@ant-design/icons'
import { AuthContextDefaultValues, useAuth } from '../../../context/AuthContext'
import { app } from '../../../../config/firebase'
import { useSelect } from '../../../context/SelectContext'
import { useChat } from '../../../context/ChatContext'
import { sendMessage } from '../../../utils/firebaseApi/ChatApi'
import { ImagePreview, InputImage } from '../../../utils/form/inputImage'
import { useRouter } from 'next/router'
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from '@firebase/storage'

const MessageInput = () => {
  const [message, setMessage] = useState<string>('')
  const currentUser = useAuth()
  const { select } = useSelect()
  const { chatIdContext } = useChat()
  const [file, setFile] = useState<File>()
  const [imagePreviewUrl, setImagePreviewUrl] = useState<any>(undefined)
  const router = useRouter()

  const handleSendMassage = (
    e: React.FormEvent<HTMLFormElement> | React.FormEvent<HTMLButtonElement>
  ) => {
    e.preventDefault()
    setMessage('')

    if (file) {
      const formData = new FormData()
      formData.append('image', file, file.name)
      const storage = getStorage(app)
      const fileName = new Date().getTime() + file?.name
      const storageRef = ref(storage, fileName)
      const uploadTask = uploadBytesResumable(storageRef, file)

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          console.log('Upload is ' + progress + '% done')
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused')
              break
            case 'running':
              console.log('Upload is running')
              break
            default:
          }
        },
        (error) => {
          console.error('upload failure..')
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then(async (downloadURL) => {
              const messageType = 'image'
              const message = downloadURL
              setFile(undefined)
              setImagePreviewUrl(undefined)
              sendMessage({
                currentUser,
                chatId: chatIdContext,
                message,
                messageType,
              }).then(() => {})
            })
            .catch((err) => {
              console.error(err)
            })
        }
      )
    } else {
      const messageType = 'text'
      sendMessage({
        currentUser,
        chatId: chatIdContext,
        message,
        messageType,
      }).then(() => {})
    }
  }

  useEffect(() => {
    const handleComplete = () => {
      //set state = null every route changes
      setFile(undefined)
      setImagePreviewUrl(undefined)
    }
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  }, [router])

  return (
    <div className="mb-1 flex h-12 justify-between">
      {select !== AuthContextDefaultValues ? (
        <>
          <form
            className="w-5/6"
            onSubmit={(e) => {
              handleSendMassage(e)
            }}
          >
            {imagePreviewUrl ? (
              <ImagePreview
                file={file!}
                setFile={setFile}
                setImagePreviewUrl={setImagePreviewUrl}
                imagePreviewUrl={imagePreviewUrl}
              />
            ) : (
              <input
                type="text"
                placeholder="Message here.."
                className="h-full w-full bg-inherit p-2 text-gray-600 dark:text-white"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            )}
          </form>
          <div className=" flex items-center justify-center gap-1">
            <InputImage
              file={file}
              imagePreviewUrl={imagePreviewUrl}
              setImagePreviewUrl={setImagePreviewUrl}
              setFile={setFile}
            />
            <div className=" mr-2 flex h-9 w-9 items-center justify-center rounded-full bg-indigo-500">
              <button
                type="submit"
                onClick={(e) => {
                  handleSendMassage(e)
                }}
              >
                <SendOutlined
                  style={{
                    color: 'white',
                    fontSize: '16px',
                    marginLeft: '3px',
                    marginBottom: '4px',
                    cursor: 'pointer',
                  }}
                />
              </button>
            </div>
          </div>
        </>
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default MessageInput
