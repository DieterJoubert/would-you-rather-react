import '../App.css';
import { useSelector } from 'react-redux'
import Question from './Question';

const HomePage = () => {
    const questions = useSelector((state) => state.questions)
    const questionIds = Object.keys(questions)

    return (
        <div>
            <ul>
                {questionIds.map((id) => (
                    <li key={id}>
                        <Question id={id} />
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default HomePage