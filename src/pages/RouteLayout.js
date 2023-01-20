import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function RouteLayout() {
    return (
        <div>
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/abouth'}>Abouth</Link>
                </li>
                <li>
                    <Link to={'/users'}>Users</Link>
                </li>
            </ul>

            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default RouteLayout