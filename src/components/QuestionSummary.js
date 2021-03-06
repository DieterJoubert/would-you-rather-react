import { useNavigate } from 'react-router-dom';

const QuestionSummary = (props) => {
    const navigate = useNavigate()
    const { question } = props

    const onViewPollClick = (e, id) => {
        e.preventDefault()
        navigate(`/questions/${id}`)
    }

    return (
        <div>
            <div className='question-info'>
                <div>
                    <b>Would you rather </b>
                    {question.optionOne.text}
                    <b> OR </b>
                    {question.optionTwo.text}
                </div>
            </div>
            <div className='flex-end'>
                <button className='btn' onClick={(e) => onViewPollClick(e, question.id)}>
                    View
                </button>
            </div>
        </div>
    )
}

export default QuestionSummary