import { Fragment } from "react"
import { NavLink } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { handleSetAuthedUser } from "../actions/authedUser"

const Nav = () => {
    const dispatch = useDispatch()
    const { users, authedUser } = useSelector((state) => state)

    const onLogoutButtonClicked = (e) => {
        e.preventDefault()
        dispatch(handleSetAuthedUser(null))
    }

    return (
        <nav className='nav'>
            <ul>
                <li className="login-list-item">
                    <NavLink to='/' exact activeClassName='active'>
                        Home
                    </NavLink>
                </li>
                {authedUser &&
                    <Fragment>
                        <li className="login-list-item">
                            <NavLink to='/add' activeClassName='active'>
                                New Question
                            </NavLink>
                        </li>
                        <li className="login-list-item">
                            <NavLink to='/leaderboard' activeClassName='active'>Leaderboard</NavLink>
                        </li>
                        <li className="login-list-item">
                            {/* EMPTY ITEM FOR APPEARANCE */}
                        </li>
                        <li className="login-list-item">
                            <div>{authedUser}</div>
                        </li>
                        <li className="login-list-item">
                            <button className='btn' onClick={(e) => { onLogoutButtonClicked(e) }} >
                                Logout
                            </button>
                        </li>
                    </Fragment>
                }

            </ul>
        </nav>
    )
}

export default Nav