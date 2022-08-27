import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface Props {
	// eslint-disable-next-line no-undef
	children: JSX.Element | JSX.Element[]
}

const Portal = ({ children }: Props) => {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
		return () => setMounted(false)
	}, [])

	return mounted ? createPortal(children, document.querySelector('#portal')!) : null
}

export default Portal
