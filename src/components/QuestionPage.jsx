import { useParams } from 'react-router';
import Question from './Question'

const QuestionPage = () => {
    const { id } = useParams();

    return (
        <div className='question-page'>
            <Question id={id} isActionable={true} />
        </div>
    )
}

export default QuestionPage