import { TiTick } from 'react-icons/ti/index'

const QuestionOptions = (props) => {
    const { question } = props

    return (
        <div>
            <div>
                Would you rather </div>
            <div className='option-btn-container'>
                {question.optionOne.text}
                <button className='option-btn' onClick={(e) => { }}>
                    <TiTick />
                </button>
            </div>
            <div>
                OR
            </div>
            <div className='option-btn-container'>
                {question.optionTwo.text}
                <button className='option-btn' onClick={(e) => { }}>
                    <TiTick />
                </button>
            </div>
        </div>
    )
}

export default QuestionOptions