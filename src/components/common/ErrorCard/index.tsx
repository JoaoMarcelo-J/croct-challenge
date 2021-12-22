import * as S from './styles'
import { BsExclamationCircleFill } from 'react-icons/bs'
import { IoClose } from 'react-icons/io5'

interface ErrorCardProps {
  setError: (error: boolean) => void
}

export function ErrorCard({ setError }: ErrorCardProps) {
  return (
    <S.Container>
      <S.ContentContainer>
        <S.ErrorImage>
          <BsExclamationCircleFill size="20px" />
        </S.ErrorImage>
        <S.ErrorContent>
          <S.ErrorMessage>Sorry, the upload failed.</S.ErrorMessage>
          <S.TryAgainButton onClick={() => setError(false)}>
            Try again
          </S.TryAgainButton>
        </S.ErrorContent>
      </S.ContentContainer>
      <S.CloseBox>
        <IoClose onClick={() => setError(false)} />
      </S.CloseBox>
    </S.Container>
  )
}
