import { useSelector } from 'react-redux'
import QuestionResults from './QuestionResults';
import QuestionOptions from './QuestionOptions';
import QuestionSummary from './QuestionSummary';
import { userHasAnswered } from '../utils/helpers';

const Question = (props) => {
    const { id, isActionable } = props;
    const { questions, authedUser, users } = useSelector((state) => state)

    const question = questions[id]
    const author = users[question.author]

    const authedUserHasAnswered = userHasAnswered(question, authedUser)

    return (
        <div className='question' style={{}}>
            <div>
                {author.name} asks...
            </div>
            {(isActionable === true) && (authedUserHasAnswered ?
                <QuestionResults question={question} authedUser={authedUser} /> :
                <QuestionOptions question={question} authedUser={authedUser} />)}
            {(!isActionable) && <QuestionSummary question={question} authedUser={authedUser} />}
        </div>
    )
}

export default Question