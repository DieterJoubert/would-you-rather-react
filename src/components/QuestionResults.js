import { TiTick } from 'react-icons/ti/index'

const totalVotes = (question) => {
    return question.optionOne.votes.length + question.optionTwo.votes.length
}

const QuestionResults = (props) => {
    const { question, authedUser } = props;

    const optionOnePercent = parseInt((question.optionOne.votes.length / totalVotes(question) * 100))
    const optionTwoPercent = parseInt(question.optionTwo.votes.length / totalVotes(question) * 100)

    return (
        <div>
            <div class="text-container">
                Would you rather
            </div>
            <div class='result-row'>
                <div class="text-container">
                    <p>{question.optionOne.text}</p>
                </div>
                <div class="text-container">
                    <p>{question.optionOne.votes.includes(authedUser) && <TiTick />}{optionOnePercent} %</p>
                </div>
            </div>
            <div class="text-container">
                or
            </div>
            <div class='result-row'>
                <div class="text-container">
                    <p>{question.optionTwo.text}</p>
                </div>
                <div class="text-container">
                    <p>{question.optionTwo.votes.includes(authedUser) && <TiTick />}{optionTwoPercent} %</p>
                </div>
            </div>
        </div>
    )
}

export default QuestionResults