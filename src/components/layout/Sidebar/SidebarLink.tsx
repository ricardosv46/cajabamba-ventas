import { IconChevronLeft, IconChevronUp } from '@icons'
import { SidebarLinkType } from '@interface/index'
import { useState } from 'react'
import { Link, useLocation, useMatch } from 'react-router-dom'
import styles from './sidebar.module.css'
import SubmenuLink from './SubmenuLink'

type Props = SidebarLinkType & { onClick?: () => void }

const SidebarLink = ({ icon: Icon, name, to, onClick, subMenu }: Props) => {
  const match = useMatch(to!)
  const [isOpen, setIsOpen] = useState(true)
  const location = useLocation()

  return (
    <div>
      <Link
        to={subMenu?.value ? location.pathname : to}
        className={`px-3 py-4 h-14  rounded-lg cursor-pointer text-center flex justify-between transition-all duration-300 ease-linear hover:bg-white hover:text-primary-500 ${
          !subMenu.value && match
            ? 'bg-white text-primary-500'
            : 'bg-transparent text-gray-400'
        } ${match ? 'dark:bg-gray-700' : 'dark:bg-transparent'}`}
        onClick={() => {
          if (subMenu.value === false && typeof onClick === 'function') {
            onClick()
          }
          setIsOpen(!isOpen)
        }}
      >
        <div className={`flex items-center gap-3 `}>
          <Icon className="w-4 h-4" />

          <p className={` text-base font-semibold  ${styles.oculto}`}>{name}</p>
        </div>
        {subMenu.value && (
          <div
            className={`transition-all duration-500 ease-in-out flex justify-center items-center  ${
              isOpen ? '' : 'rotate-180'
            }`}
          >
            <IconChevronUp />
          </div>
        )}
      </Link>

      {subMenu.value
        ? isOpen && (
            <div className="flex flex-col gap-2 py-2 ">
              {' '}
              {subMenu.paths
                .filter((path) => path.render)
                .map(({ icon, name, to, path }) => (
                  <SubmenuLink
                    key={path}
                    onClick={onClick}
                    {...{ icon, name, path, subMenu, to }}
                  />
                ))}
            </div>
          )
        : null}
    </div>
  )
}

export default SidebarLink
