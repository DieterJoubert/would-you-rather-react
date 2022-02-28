import { Fragment } from "react"
import { NavLink } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { handleSetAuthedUser } from "../actions/authedUser"

const Nav = () => {
    const dispatch = useDispatch()
    const { users, authedUser } = useSelector((state) => state)
    const user = users[authedUser]

    const onLogoutButtonClicked = (e) => {
        e.preventDefault()
        dispatch(handleSetAuthedUser(null))
    }

    return (
        <nav className='nav'>
            <ul>
                <li className="login-list-item">
                    <NavLink to='/' end>
                        Home
                    </NavLink>
                </li>
                {authedUser &&
                    <Fragment>
                        <li className="login-list-item">
                            <NavLink to='/add'>
                                New Question
                            </NavLink>
                        </li>
                        <li className="login-list-item">
                            <NavLink to='/leaderboard'>Leaderboard</NavLink>
                        </li>
                        <li className="login-list-item">
                            {/* EMPTY ITEM FOR APPEARANCE */}
                        </li>
                        <li className="login-list-item">
                            {/* EMPTY ITEM FOR APPEARANCE */}
                        </li>
                        <li className="login-list-item">
                            <button className='btn' onClick={(e) => { onLogoutButtonClicked(e) }} >
                                Logout
                            </button>
                        </li>
                        <li className="login-list-item">
                            <div className='center-horizontally'>
                                <img
                                    src={user.avatarURL}
                                    alt={`Avatar of ${user.name}`}
                                    className='avatar'
                                />
                                <div className='text-container'>
                                    {user.name}
                                </div>
                            </div>
                        </li>
                    </Fragment>
                }

            </ul>
        </nav>
    )
}

export default Nav