import { useTheme } from '../../../hooks/useTheme'
import { ThemeContext } from 'styled-components'
import Switch from 'react-switch'
import { useContext } from 'react'

export function SwitchApp() {
  const { toggleTheme } = useTheme()
  const { title } = useContext(ThemeContext)

  return (
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
  )
}
