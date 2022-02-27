const totalVotes = (question) => {
    return question.optionOne.votes.length + question.optionTwo.votes.length
}

const QuestionResults = (props) => {
    const { question, authedUser } = props;

    const optionOnePercent = question.optionOne.votes.length / totalVotes(question) * 100
    const optionTwoPercent = question.optionTwo.votes.length / totalVotes(question) * 100

    return (
        <div>
            <div>
                Would you rather
            </div>
            <div>
                <div>{question.optionOne.text}</div>
                <div>{optionOnePercent} %</div>
                {question.optionOne.votes.includes(authedUser) && <div>PICKED</div>}
            </div>
            <div>
                OR
            </div>
            <div>
                <div>{question.optionTwo.text}</div>
                <div>{optionTwoPercent} %</div>
                {question.optionTwo.votes.includes(authedUser) && <div>PICKED</div>}
            </div>
        </div>
    )
}

export default QuestionResults