import '../App.css';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const Question = (props) => {
    const navigate = useNavigate()

    const { questions, authedUser, users } = useSelector((state) => state)
    const question = questions[props.id]
    const author = users[question.author]

    const onViewPollClick = (e, id) => {
        e.preventDefault()
        navigate(`/question/${id}`)
    }

    return (
        <div className='question' style={{}}>
            <div>
                {author.name} asks...
            </div>
            <div className='question-info'>
                <div>
                    <b>Would you rather </b>
                    {question.optionOne.text}
                    <b> OR </b>
                    {question.optionTwo.text}
                </div>
            </div>
            <div>
                <button className='replying-to' onClick={(e) => onViewPollClick(e, props.id)}>
                    View Poll
                </button>
            </div>
        </div>
    )
}

export default Question