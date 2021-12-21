import * as S from './styles'
import UploadInput from 'components/UploadInput'
import { useState, useCallback } from 'react'
import { FileWithPath } from 'react-dropzone'
import { ErrorCard } from 'components/ErrorCard'
import { useTheme } from '../../hooks/useTheme'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import Switch from 'react-switch'

type Preview = {
  name: string
  imageURL: string
}

export function Main() {
  const [preview, setPreview] = useState<null | Preview>()
  const [error, setError] = useState(false)
  const { toggleTheme } = useTheme()

  const { title } = useContext(ThemeContext)

  const handleUpload = useCallback(async (files: FileWithPath[]) => {
    try {
      const file = files[0]

      const type = file.type.split('/')[1]

      // eslint-disable-next-line no-constant-condition
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
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor="#90ee90"
        onColor="#00173D"
      />
    </S.Wrapper>
  )
}

export default Main
