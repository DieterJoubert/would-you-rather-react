import { TiTick } from 'react-icons/ti/index'
import { useDispatch } from 'react-redux'
import { handleAnswerQuestion } from '../actions/questions'

const QuestionOptions = (props) => {
    const { question, authedUser } = props
    const dispatch = useDispatch()

    const selectOption = (e, chosenOption) => {
        e.preventDefault();
        dispatch(handleAnswerQuestion(authedUser, question.id, chosenOption))
    }

    return (
        <div>
            <div>
                Would you rather </div>
            <div className='option-btn-container'>
                {question.optionOne.text}
                <button className='option-btn' onClick={(e) => { selectOption(e, 'optionOne') }}>
                    <TiTick />
                </button>
            </div>
            <div>
                OR
            </div>
            <div className='option-btn-container'>
                {question.optionTwo.text}
                <button className='option-btn' onClick={(e) => { selectOption(e, 'optionTwo') }}>
                    <TiTick />
                </button>
            </div>
        </div>
    )
}

export default QuestionOptions