import { useSelector, useDispatch } from 'react-redux'
import { getArrayFromDictionary } from '../utils/helpers'
import { handleSetAuthedUser } from '../actions/authedUser'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const users = useSelector((state) => state.users)
    const userArray = getArrayFromDictionary(users)

    const onLoginButtonClick = (e) => {
        e.preventDefault()
        const uid = e.target.value
        dispatch(handleSetAuthedUser(uid))
        navigate("/")
    }

    return (
        <div className='container'>
            <div className='center'>Please log in</div>
            <div className='login-container'>
                <ul className='login-list'>
                    {userArray.map((user) => (
                        <li key={user.id}>
                            <button className='btn large-btn' value={user.id} onClick={onLoginButtonClick}>{user.name}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Login