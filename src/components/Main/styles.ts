import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: #616161;
  color: var(--text-color);
  width: 100%;
  height: 100%;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  background-color: var(--background);
  border: 2px dashed var(--border);
  width: min(55.3rem, 100%);
  height: 17.7rem;
  border-radius: 8px;
`

export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const TextHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Text1 = styled.p`
  font-size: 1.4rem;
  margin-left: 1.2rem;
  font-weight: 500;
  color: var(--text-color);
`

export const Text2 = styled.small`
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--subscription);
`
