import { IconClose } from '@icons'
import React from 'react'
import Modal from '.'

interface IModal {
	isOpen: boolean
	onClose: () => void
	onClick: () => void
	header: string
	body: string
}

const ModalConfirmar = ({ isOpen, onClick, onClose, body, header }: IModal) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose} hasOverlay>
			<div className='px-8 py-5 bg-white rounded-lg w-[450px] dark:bg-gray-800 dark:text-white '>
				<div className='flex justify-between'>
					<h2 className='text-lg font-bold'>{header}</h2>
					<IconClose className='w-4 h-4 cursor-pointer' onClick={onClose} />
				</div>

				<p className='mt-2 text-gray-500 dark:text-white'>{body}</p>

				<div className='flex items-center justify-end gap-3 mt-8 '>
					<button
						type='button'
						onClick={onClose}
						className='px-4 py-2 text-lg font-semibold text-gray-600 bg-gray-100 rounded-lg'>
						Cancelar
					</button>
					<button
						type='button'
						onClick={onClick}
						className='px-4 py-2 text-lg font-semibold text-white bg-green-600 rounded-lg'>
						Confirmar
					</button>
				</div>
			</div>
		</Modal>
	)
}

export default ModalConfirmar
