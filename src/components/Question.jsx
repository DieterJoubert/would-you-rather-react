import '../App.css';
import { useSelector, useDispatch } from 'react-redux'

const Question = (props) => {

    const { questions, authedUser } = useSelector((state) => state)
    const question = questions[props.id]

    return (
        <div>
            {`question: ${props.id}`}
            <div>{JSON.stringify(question)}</div>
        </div>
    )
}

export default Question