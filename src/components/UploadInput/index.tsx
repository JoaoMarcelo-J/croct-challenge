import * as S from './styles'
import { BsCardImage } from 'react-icons/bs'
import { useState } from 'react'
import { useDropzone } from 'react-dropzone'

export function UploadInput({ onUpload, preview }: any) {
  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      accept: 'image/png, image/svg, image/jpg, image/jpeg',
      onDrop: onUpload
    })

  const [type, setType] = useState('dashed')

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
            <S.Text1>Organization Logo</S.Text1>
          </S.TextHeader>
          <S.Text2>Drop the image here or click to browse.</S.Text2>
        </S.Content>
      ) : (
        <S.ProfileImage>
          <img src={preview.imageURL} alt={preview.name} />
        </S.ProfileImage>
      )}
    </S.Container>
  )
}

export default UploadInput
