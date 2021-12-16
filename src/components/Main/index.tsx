import * as S from './styles'
import { BsCardImage } from 'react-icons/bs'

export function Main() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Content>
          <S.TextHeader>
            <BsCardImage size="15px" />
            <S.Text1>Organization Logo</S.Text1>
          </S.TextHeader>
          <S.Text2>Drop the image here or click to browse.</S.Text2>
        </S.Content>
      </S.Container>
    </S.Wrapper>
  )
}

export default Main
