import { Suspense } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from 'react-router-dom'
import logo from '../logo.svg'
import { routes } from './routes'

const Navigation = () => {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <div className='main-layout'>
          <nav>
            <img src={logo} alt='logo' />
            <ul>
              {routes.map((route) => {
                const { path, name } = route
                return (
                  <li key={path}>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? 'nav-active' : ''
                      }
                      to={`/${path}`}
                    >
                      {name}
                    </NavLink>
                  </li>
                )
              })}
            </ul>
          </nav>
          <Routes>
            {routes.map((route) => {
              const { path, Component } = route
              return (
                <Route key={path} path={`/${path}`} element={<Component />} />
              )
            })}
            <Route path='*' element={<Navigate to='/lazy1' replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  )
}

export default Navigation
