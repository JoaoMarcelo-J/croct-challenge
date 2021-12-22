import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: ${(props) => props.theme.colors.wrapper};
  color: ${(props) => props.theme.colors.textColor};
  width: 100%;
  height: 100%;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
