import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--background);
  border: 2px var(--border) none;
  margin-bottom: 3rem;
  width: min(55.3rem, 100%);
  height: 17.7rem;
  border-radius: 8px;
`

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ErrorImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 113px;
  height: 113px;
  margin: 3.1rem;
  flex-shrink: 0;
  border-radius: 50%;

  overflow: hidden;
  background: var(--background-avatar);

  svg {
    color: #fff;

    border-radius: 50%;
    width: 25px;
    height: 25px;
  }
`

export const ErrorContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const ErrorMessage = styled.p`
  color: var(--Error);
  font-weight: 400;
  font-size: 1.6rem;
  margin-bottom: 0.6rem;
`

export const TryAgainButton = styled.p`
  display: flex;
  width: 68px;
  cursor: pointer;
  color: var(--button);
  font-weight: 500;
  font-size: 1.6rem;
  border-bottom: solid 2px var(--button);

  &:hover {
    opacity: 0.7;

    transition: opacity 0.2s ease-in-out;
  }
`

export const CloseBox = styled.div`
  display: flex;
  align-self: flex-start;
  margin: 1.25rem;

  svg {
    width: 24px;
    height: 24px;
    &:hover {
      transform: scale(1.2);
      cursor: pointer;
    }
  }
`
