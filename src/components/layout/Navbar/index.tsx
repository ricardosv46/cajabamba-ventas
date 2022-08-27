import ToggleTheme from '@components/shared/ToggleTheme/ToggleTheme'
import useToggle from '@hooks/useToggle'
import { IconBars, IconLogo } from '@icons'
import SidebarDrawer from '../Sidebar/SidebarDrawer'

const Navbar = () => {
	const { isOpen, onClose, onOpen } = useToggle()

	return (
		<>
			<SidebarDrawer isOpen={isOpen} onClose={onClose} />
			<nav className='flex justify-between px-8 py-2 text-center bg-gray-100 dark:bg-gray-700'>
				<IconLogo />
				<div className='flex gap-2'>
					<ToggleTheme />
					<button className='btn-icon bg-primary-500 hover:bg-primary-700' onClick={onOpen}>
						<IconBars className='w-4 h-4 text-white' />
					</button>
				</div>
			</nav>
		</>
	)
}

export default Navbar
