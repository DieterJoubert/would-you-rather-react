import { NavLink } from "react-router-dom"

const Nav = () => {
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <NavLink to='/' exact activeClassName='active'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/new-question' activeClassName='active'>
                        New Question
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/leaderboard' activeClassName='active'>
                        Leaderboard
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/logout' activeClassName='active'>
                        Logout
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav