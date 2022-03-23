import { DeleteOutlined, PaperClipOutlined } from '@ant-design/icons'
import { ChangeEvent } from 'react'
import { TextSm } from './text'

type InputImageType = {
  file: File | undefined
  setFile: (val: File | undefined) => void
  // img: string
  imagePreviewUrl: any
  setImagePreviewUrl: (val: any) => void
}

export const InputImage = ({
  setImagePreviewUrl,
  setFile, // img,
}: InputImageType) => {
  const handleUploadImage = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const file = e.target.files?.[0]
    const reader = new FileReader()
    reader.onloadend = () => {
      setFile(file)
      setImagePreviewUrl(reader?.result)
    }
    if (file !== undefined) {
      reader?.readAsDataURL(file)
    }
  }

  return (
    <section className="relative ">
      <p className="m-auto flex h-9 w-9  items-center justify-center text-lg text-slate-900 dark:text-white ">
        <PaperClipOutlined />
      </p>

      <input
        className="absolute top-0 bottom-0 left-0 right-0 z-20 block h-9 w-9 cursor-pointer opacity-0"
        style={{ fontSize: '0px' }} //a bit weird but works!
        onChange={(e) => {
          handleUploadImage(e)
        }}
        type="file"
        name="file"
        accept="image/*"
        value={''} // to use delete button freely
      />
    </section>
  )
}

type ImagePreviewType = {
  file: File
  setFile: (val: File | undefined) => void
  setImagePreviewUrl: (val: any) => void
  imagePreviewUrl: string
}

export const ImagePreview = ({
  file,
  setFile,
  imagePreviewUrl,
  setImagePreviewUrl,
}: ImagePreviewType) => {
  const handleClearState = () => {
    setFile(undefined)
    setImagePreviewUrl(undefined)
  }

  return (
    <div className=" flex h-full  w-full items-center justify-start gap-2 border-2 border-indigo-200 bg-inherit  text-sm font-light text-gray-900 dark:text-gray-200">
      <img
        className=" m-0 h-6 w-6 p-0"
        alt="previewImage"
        src={imagePreviewUrl}
      ></img>
      <TextSm>{file?.name}</TextSm>
      <p
        className=" my-auto flex cursor-pointer items-center justify-center text-lg text-red-400 "
        onClick={() => {
          handleClearState()
        }}
      >
        <DeleteOutlined />
      </p>
    </div>
  )
}
