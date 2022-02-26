import { useState, useEffect } from 'react';
import '../App.css';
import { useSelector } from 'react-redux'
import Question from './Question';

const userHasAnswered = (question, user) => {
    return question.optionOne.votes.includes(user) || question.optionTwo.votes.includes(user)
}

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

    const style = { display: 'flex', justifyContent: 'space-between' }

    return (
        <div>
            <div className='dashboard-button-container' style={style}>
                <button className='btn' onClick={onViewUnansweredClick} disabled={isUnasweredSelected}>
                    Unanswered Questions
                </button>
                <button className='btn' onClick={onViewAnsweredClick} disabled={!isUnasweredSelected}>
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