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
            <div className='result-row'>
                <div className="text-container">
                    <p>{question.optionOne.text}</p>
                </div>

                {question.optionOne.votes.includes(authedUser) &&
                    <div className='user-stats-detail'>
                        {<TiTick />}
                    </div>
                }
                <div className='user-stats-detail'>
                    <div>Votes</div>
                    <hr />
                    <div>{question.optionOne.votes.length}</div>
                </div>
                <div className='user-stats-detail'>
                    <div>Percent</div>
                    <hr />
                    <div>{optionOnePercent}</div>
                </div>
            </div>
            <div className="text-container">
                or
            </div>
            <div className='result-row'>
                <div className="text-container">
                    <p>{question.optionTwo.text}</p>
                </div>
                {question.optionTwo.votes.includes(authedUser) &&
                    <div className='user-stats-detail'>
                        {<TiTick />}
                    </div>
                }
                <div className='user-stats-detail'>
                    <div>Votes</div>
                    <hr />
                    <div>{question.optionTwo.votes.length}</div>
                </div>
                <div className='user-stats-detail'>
                    <div>Percent</div>
                    <hr />
                    <div>{optionTwoPercent}</div>
                </div>
            </div>
        </div>
    )
}

export default QuestionResults