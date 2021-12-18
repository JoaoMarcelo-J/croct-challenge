import styled from 'styled-components'

interface BoxImageProps {
  zoom: number
}

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px;
  width: 100%;
`

export const ImageBox = styled.div<BoxImageProps>`
  width: 113px;
  height: 113px;
  margin-right: 3.1rem;
  flex-shrink: 0;
  border-radius: 50%;

  overflow: hidden;
  background: var(--background-avatar);
  img {
    transform: scale(${(props) => props.zoom});
    flex-shrink: 0;
  }
`

export const RangeBox = styled.div`
  width: 276px;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  button {
    width: 9.5rem;
    cursor: pointer;

    align-self: flex-end;

    margin-top: 1rem;
    padding: 0.8rem;

    border: 0;
    border-radius: 16px;

    background: var(--button);
    color: #fff;
  }

  p {
    align-self: flex-start;
    font-size: 1rem;
    color: var(--subscription);
  }
`

export const CloseBox = styled.div`
  display: flex;
  align-items: flex-start;

  svg {
    width: 24px;
    height: 24px;
    &:hover {
      transform: scale(1.2);
      cursor: pointer;
    }
  }
`
