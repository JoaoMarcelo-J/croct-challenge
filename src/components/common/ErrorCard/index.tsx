import * as S from './styles'
import { BsExclamationCircleFill } from 'react-icons/bs'
import { IoClose } from 'react-icons/io5'
import { useCallback } from 'react'

interface ErrorCardProps {
  setError: (error: boolean) => void
}

export function ErrorCard({ setError }: ErrorCardProps) {
  const handleClose = useCallback(() => {
    setError(false)
  }, [setError])

  return (
    <S.Container>
      <S.ContentContainer>
        <S.ErrorImage>
          <BsExclamationCircleFill size="20px" />
        </S.ErrorImage>
        <S.ErrorContent>
          <S.ErrorMessage>Sorry, the upload failed.</S.ErrorMessage>
          <S.TryAgainButton onClick={handleClose}>Try again</S.TryAgainButton>
        </S.ErrorContent>
      </S.ContentContainer>
      <S.CloseBox>
        <IoClose onClick={handleClose} />
      </S.CloseBox>
    </S.Container>
  )
}
