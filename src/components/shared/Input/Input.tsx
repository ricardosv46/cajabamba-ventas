import { useId, useState, SVGProps, forwardRef, ReactElement, InputHTMLAttributes, ForwardedRef } from 'react'
import IconEye from '../../../icons/IconEye'
import IconEyeSlash from '../../../icons/IconEyeSlash'
import { classNames } from '../../../utils/classNames'
import { isEmpty } from '../../../utils/isEmpty'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	label?: string
	error?: any
	rightElement?: ReactElement
	icon?: (props: SVGProps<SVGSVGElement>) => ReactElement
	touched?: boolean
	className?: string
}

const Input = (
	{ label, icon: Icon, rightElement, touched, className, ...props }: Props,
	ref: ForwardedRef<HTMLInputElement> | null
) => {
	const uid = useId()
	const [show, setShow] = useState(false)

	const hasError = props.error?.toString() && !isEmpty(props.error.toString()) && touched
	const isValueEmpty = isEmpty(typeof props?.value === 'string' ? props.value : '')

	return (
		<div className={className}>
			<div className='relative bg-slate-300 bg-opacity-50 dark:bg-slate-800  h-[60px] rounded-tr-md rounded-tl-md shadow w-full'>
				<input
					ref={ref}
					{...props}
					id={`input-${uid}`}
					autoComplete='off'
					// dc2626
					//f87171
					type={props.type === 'password' ? (show ? 'text' : 'password') : props.type}
					className={classNames([
						hasError
							? 'border-red-600 focus:shadow-[0_0_0_1px_#dc2626] dark:border-red-400 dark:focus:shadow-[0_0_0_1px_#f87171] focus:border-red-500'
							: props.value?.toString().length
							? 'border-primary-500 dark:border-second-500 focus:shadow-[0_0_0_1px_#A02E2B] dark:focus:shadow-[0_0_0_1px_#eea22a]'
							: 'border-slate-300 focus:border-primary-500 dark:focus:border-second-500',
						' peer bg-transparent outline-none w-full h-full border-b-2 rounded-tr-md rounded-tl-md pt-5 px-3  transition-all ease-in-out duration-100 dark: text-slate-800 dark:text-white'
					])}
				/>
				<label
					htmlFor={`input-${uid}`}
					className={classNames([
						isValueEmpty
							? 'top-[19px] left-3 text-primary-500'
							: 'top-1 left-2 text-primary-500 dark:text-second-500 font-semibold ',
						hasError
							? 'text-red-600 dark:text-red-400'
							: 'peer-focus:text-primary-500 dark:peer-focus:text-second-500',
						'absolute peer-focus:top-1 peer-focus:left-2 transition-all font-semibold ease-in-out duration-300'
					])}>
					{label}
				</label>

				{props.type === 'password' && (
					<button
						type='button'
						onClick={() => setShow((prev) => !prev)}
						className={`${
							hasError ? 'btn-ghost-red' : 'btn-ghost-primary'
						} btn-icon  absolute right-3 top-[13px]`}>
						{show ? (
							<IconEyeSlash
								className={`${hasError ? 'text-red-600 dark:text-red-400' : 'text-primary-500'}`}
							/>
						) : (
							<IconEye
								className={`${hasError ? 'text-red-600 dark:text-red-400' : 'text-primary-500'}`}
							/>
						)}
					</button>
				)}

				{typeof Icon === 'function' && (
					<button className='btn-icon btn-ghost-primary absolute right-3 top-[13px]'>{<Icon />}</button>
				)}

				{rightElement && <div className='absolute right-3 top-[13px]'>{rightElement}</div>}

				<p className='text-sm text-red-600 dark:text-red-400'>{hasError ? props.error : ''}</p>
			</div>
		</div>
	)
}

export default forwardRef(Input)
