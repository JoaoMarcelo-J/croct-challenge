/* eslint-disable no-constant-condition */
import * as S from './styles'
import UploadInput from 'components/common/UploadInput'
import { useState, useCallback } from 'react'
import { FileWithPath } from 'react-dropzone'
import { ErrorCard } from 'components/common/ErrorCard'
import { SwitchApp } from 'components/common/Switch'

type Preview = {
  name: string
  imageURL: string
}

export function Main() {
  const [preview, setPreview] = useState<null | Preview>()
  const [error, setError] = useState(false)

  const handleUpload = useCallback(async (files: FileWithPath[]) => {
    try {
      const file = files[0]

      const type = file.type.split('/')[1]

      if (type === 'png' || 'jpeg' || 'jpg' || 'svg')
        setPreview({
          name: file.name,
          imageURL: URL.createObjectURL(file)
        })
    } catch {
      setError(true)
    }
  }, [])

  return (
    <S.Wrapper>
      {!error ? (
        <UploadInput
          preview={preview}
          setPreview={setPreview}
          onUpload={handleUpload}
        />
      ) : (
        <ErrorCard setError={setError} />
      )}
      <SwitchApp />
    </S.Wrapper>
  )
}

export default Main
