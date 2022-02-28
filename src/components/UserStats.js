import { useSelector } from 'react-redux'
import { getUserScore, getArrayFromDictionary } from '../utils/helpers'

const UserStats = (props) => {
    const user = useSelector((state) => state.users[props.id])

    const answeredQuestions = getArrayFromDictionary(user.answers).length
    const createdQuestions = user.questions.length

    return (
        <div className='user-stats-container'>
            <div className='user-stats-name'><b>{user.name}</b></div>
            <div className='user-stats-details-container'>
                <div className='user-stats-detail'>
                    <div>Answered</div>
                    <hr />
                    <div>{answeredQuestions}</div>
                </div>
                <div className='user-stats-detail'>
                    <div>Created</div>
                    <hr />
                    <div>{createdQuestions}</div>
                </div>
                <div className='user-stats-detail'>
                    <div><b>Score</b></div>
                    <hr />
                    <div>{getUserScore(user)}</div>
                </div>
            </div>

        </div>
    )
}

export default UserStats