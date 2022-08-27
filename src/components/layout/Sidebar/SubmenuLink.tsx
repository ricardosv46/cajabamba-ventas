import { Link, useMatch } from 'react-router-dom'
import { SidebarLinkType } from '../../../interface'
type Props = SidebarLinkType & { onClick?: () => void }

const SubmenuLink = ({ icon: Icon, name, to, onClick }: Props) => {
  const match = useMatch(to!)

  return (
    <Link
      to={to}
      className={`px-8  py-4 rounded-lg cursor-pointer text-center flex gap-3 items-center transition-all duration-300 ease-linear hover:bg-white hover:text-primary-500 ${
        match ? 'bg-white text-primary-500' : 'bg-transparent text-gray-400'
      } ${match ? 'dark:bg-gray-700' : 'dark:bg-transparent'}`}
      onClick={onClick}
    >
      <Icon className="w-4 h-4" />

      <p className=" font-semibold">{name}</p>
    </Link>
  )
}

export default SubmenuLink
