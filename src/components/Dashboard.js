import { useState } from 'react';
import { useSelector } from 'react-redux'
import Question from './Question';
import { userHasAnswered } from '../utils/helpers';

const getSelectedQuestionIds = (questions, authedUser, isUnasweredSelected) => {
    var keys = Object.keys(questions);
    let selectedIds = []

    keys.forEach(function (key) {
        const question = questions[key]

        if (userHasAnswered(question, authedUser) && !isUnasweredSelected) {
            selectedIds.push(question.id)
        }
        if (!userHasAnswered(question, authedUser) && isUnasweredSelected) {
            selectedIds.push(question.id)
        }
    });

    return selectedIds
        .sort((a, b,) => questions[b].timestamp - questions[a].timestamp)
}

const Dashboard = () => {
    const [isUnasweredSelected, setIsUnasweredSelected] = useState(true)

    const { questions, authedUser } = useSelector((state) => state)
    let selectedQuestionIds = getSelectedQuestionIds(questions, authedUser, isUnasweredSelected)

    const onViewUnansweredClick = (e) => {
        e.preventDefault()
        setIsUnasweredSelected(true)
    }

    const onViewAnsweredClick = (e) => {
        e.preventDefault()
        setIsUnasweredSelected(false)
    }

    return (
        <div>
            <div className='dashboard-button-container'>
                <button className='btn large-btn' onClick={onViewUnansweredClick} disabled={isUnasweredSelected}>
                    Unanswered Questions
                </button>
                <button className='btn large-btn' onClick={onViewAnsweredClick} disabled={!isUnasweredSelected}>
                    Answered Questions
                </button>
            </div>
            <ul>
                {selectedQuestionIds.map((id) => (
                    <li key={id}>
                        <Question id={id} />
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Dashboard