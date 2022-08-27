import Navbar from '@components/layout/Navbar'
import Sidebar from '@components/layout/Sidebar'
import WelcomePage from '@pages/home/WelcomePage'
import { Suspense, useEffect, useMemo } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { getRoutes } from './routes'

const HomeRouter = () => {
	const { mainRoutes, subRoutes } = useMemo(() => getRoutes(), [])

	return (
		<div className='flex justify-between h-screen'>
			<div className='hidden h-full lg:block'>
				<Sidebar mobile={false} onToggle={() => {}} onClose={() => {}} />
			</div>

			<div className='flex-col w-full h-full overflow-y-scroll no-scrollbar'>
				<div className='block lg:hidden'>
					<Navbar />
				</div>
				<Suspense fallback={<h1>Cargando...</h1>}>
					<Routes>
						<Route index element={<WelcomePage />} />

						{mainRoutes.map(({ path, name, component: Component }) => {
							return <Route key={name} path={path} element={<Component />} />
						})}

						{subRoutes.map(({ path, name, component: Component }) => {
							return <Route key={name} path={path} element={<Component />} />
						})}
					</Routes>
				</Suspense>
			</div>
		</div>
	)
}

export default HomeRouter
