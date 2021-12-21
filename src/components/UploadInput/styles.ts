import styled, { css } from 'styled-components'

export const Content = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 3.5rem;
`

interface ContainerProps {
  isDashed: boolean
  isDragActive?: boolean
  isDragReject?: boolean
}

const isDragActive = css`
  border-color: lightgreen;
`
const isDragReject = css`
  border-color: red;
`

export const Container = styled.div<ContainerProps>`
  background-color: ${(props) => props.theme.colors.background};
  border: 2px var(--border) ${(props) => (props.isDashed ? 'dashed' : 'none')};
  width: min(55.3rem, 100%);
  margin-bottom: 3rem;
  height: 17.7rem;
  border-radius: 8px;

  ${(props) => props.isDragActive && isDragActive};
  ${(props) => props.isDragReject && isDragReject};
`

export const Input = styled.input``

export const ProfileImage = styled.div`
  width: 113px;
  height: 113px;
  border-radius: 50%;

  overflow: hidden;
  img {
    transform: scale(1);
    width: 113px;
    height: 113px;
    object-fit: cover;
  }
`

export const TextHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Title = styled.p`
  font-size: 1.4rem;
  margin-left: 1.2rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.textColor};
`

export const Subscription = styled.small`
  font-size: 1.4rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.subscription};
`
export const CloseBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  margin-right: 2.9rem;
  margin-top: 3.4rem;

  svg {
    width: 24px;
    height: 24px;
    &:hover {
      transform: scale(1.2);
      cursor: pointer;
    }
  }
`

export const ImageBox = styled.div`
  width: 113px;
  height: 113px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  z-index: 5;
  border: 0;
  border-radius: 50%;

  overflow: hidden;
  background: ${(props) => props.theme.colors.backgroundAvatar};

  img {
    flex-shrink: 0;
    object-fit: cover;
    border-radius: 8px;
  }
`
