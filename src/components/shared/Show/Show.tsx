import React from 'react'

interface Iprops {
	children: any
	condition: boolean
	isDefault?: JSX.Element
	className?: string
	loading?: boolean
}

export const Show = ({ children, condition, isDefault, className, loading }: Iprops) =>
	loading ? (
		!condition ? (
			<div className={className}>{children}</div>
		) : (
			isDefault || null
		)
	) : condition ? (
		<div className={className}>{children}</div>
	) : (
		isDefault || null
	)
