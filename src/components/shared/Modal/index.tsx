/* eslint-disable multiline-ternary */
import Portal from '../Portal'
import { motion } from 'framer-motion'
import { ReactElement } from 'react'
import Overlay from '../Overlay/Overlay'

const fade = {
	open: { opacity: 1, pointerEvents: 'unset' },
	closed: { opacity: 0, pointerEvents: 'none' }
} as const

interface Props {
	isOpen?: boolean
	children?: ReactElement | ReactElement[]
	className?: string
	hasOverlay?: boolean
	sidebar?: boolean
	onClose?: () => void
}

const Modal = ({ children, isOpen, className, hasOverlay, sidebar, onClose }: Props) => {
	return (
		<Portal>
			{sidebar ? (
				<motion.div
					variants={fade}
					animate={isOpen ? 'open' : 'closed'}
					initial={{ opacity: 0, pointerEvents: 'none' }}
					className='fixed top-0 z-50 flex w-full h-screen '>
					{hasOverlay && <Overlay show={isOpen} onClick={onClose} />}
					<div className='z-20 w-auto h-auto'>{children}</div>
				</motion.div>
			) : (
				<motion.div
					variants={fade}
					animate={isOpen ? 'open' : 'closed'}
					initial={{ opacity: 0, pointerEvents: 'none' }}
					className='fixed top-0 z-50 grid w-full h-screen place-items-center'>
					{hasOverlay && <Overlay show={isOpen} onClick={onClose} />}
					<div className='z-20 grid place-items-center'>{children}</div>
				</motion.div>
			)}
		</Portal>
	)
}

export default Modal
