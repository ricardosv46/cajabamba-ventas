import { IconMoon, IconSun } from '@icons'
import { classNames } from '@utils/classNames'
import { useState } from 'react'
import { useEffect } from 'react'

interface Props {
  className?: string
}

const ToggleTheme = ({ className }: Props) => {
  const [theme, setTheme] = useState(
    typeof window !== 'undefined' ? localStorage.theme : ''
  )

  const colorTheme = theme === 'dark' ? 'light' : 'dark'

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove(colorTheme)
    root.classList.add(theme)

    localStorage.setItem('theme', theme)
  }, [theme, colorTheme])

  const [darkSide, setDarkSide] = useState(
    colorTheme === 'light' ? true : false
  )

  const toogleDarkMode = (checked: boolean) => {
    setTheme(colorTheme)
    setDarkSide(checked)
  }

  return (
    <button
      className={classNames(['btn-icon btn-ghost-slate', className])}
      onClick={() => {
        toogleDarkMode(!darkSide)
      }}
    >
      <IconSun className="hidden dark:block" />
      <IconMoon className="block dark:hidden" />
    </button>
  )
}

export default ToggleTheme
