import * as S from './styles'
import { BsCardImage } from 'react-icons/bs'
import { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { PreviewImage } from 'components/PreviewImage'
import { FileWithPath } from 'react-dropzone'

type Preview = {
  name: string
  imageURL: string
}

interface UploadInputProps {
  onUpload: (files: FileWithPath[]) => void
  preview: Preview | null | undefined
  setPreview: (preview: null | Preview) => void
}

export function UploadInput({
  onUpload,
  preview,
  setPreview
}: UploadInputProps) {
  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      accept: 'image/png, image/svg, image/jpg, image/jpeg',
      onDrop: onUpload
    })

  const [type, setType] = useState('dashed')

  useEffect(() => {
    if (preview) {
      setType('solid')
    } else {
      setType('dashed')
    }
  }, [preview])

  return (
    <S.Container
      {...getRootProps()}
      isDragActive={isDragActive}
      isDragReject={isDragReject}
      isDashed={type === 'dashed'}
    >
      {!preview ? (
        <S.Content>
          <S.Input {...getInputProps({ multiple: false })} />
          <S.TextHeader>
            <BsCardImage size="15px" />
            <S.Title>Organization Logo</S.Title>
          </S.TextHeader>
          <S.Subscription>
            Drop the image here or click to browse.
          </S.Subscription>
        </S.Content>
      ) : (
        <PreviewImage preview={preview} setPreview={setPreview} />
      )}
    </S.Container>
  )
}

export default UploadInput
