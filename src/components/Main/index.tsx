import * as S from './styles'
import UploadInput from 'components/UploadInput'
import { useState, useCallback } from 'react'
import { FileWithPath } from 'react-dropzone'

type Preview = {
  name: string
  imageURL: string
  zoom: number
}

export function Main() {
  const [preview, setPreview] = useState<Preview>()
  const [error, setError] = useState(false)

  const handleUpload = useCallback(async (files: FileWithPath[]) => {
    const file = files[0]

    const type = file.type.split('/')[1]

    // eslint-disable-next-line no-constant-condition
    if (type === 'png' || 'jpeg' || 'jpg' || 'svg')
      setPreview({
        name: file.name,
        imageURL: URL.createObjectURL(file),
        zoom: 100
      })
  }, [])

  return (
    <S.Wrapper>
      <UploadInput preview={preview} onUpload={handleUpload} />
    </S.Wrapper>
  )
}

export default Main
