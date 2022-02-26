import { Routes, Route, NavLink } from "react-router-dom"

const Nav = () => {
    const containerStyle = { display: 'flex', justifyContent: 'space-between', padding: '2rem' }

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
            </ul>
        </nav>
    )
}

export default Nav