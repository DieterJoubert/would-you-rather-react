import { useSelector } from 'react-redux'
import { getUserScore, getArrayFromDictionary } from '../utils/helpers'

const UserStats = (props) => {
    const user = useSelector((state) => state.users[props.id])

    const containerStyle = { margin: '2rem' }

    const answeredQuestions = getArrayFromDictionary(user.answers).length
    const createdQuestions = user.questions.length

    return (
        <div style={containerStyle}>
            <div>name: {user.name}</div>
            <div>Answered questions: {answeredQuestions}</div>
            <div>Created questions: {createdQuestions}</div>
            <div>score: {getUserScore(user)}</div>
        </div>
    )
}

export default UserStats