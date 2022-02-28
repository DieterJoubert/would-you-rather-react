import { getInitialData, saveQuestionAnswer, saveQuestion } from "../utils/api";
import { receiveQuestions, answerQuestion, addQuestion } from './questions'
import { receiveUsers } from './users'
import { showLoading, hideLoading } from "react-redux-loading";

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData().then(({ users, questions }) => {
            dispatch(receiveQuestions(questions))
            dispatch(receiveUsers(users))
            dispatch(hideLoading())
        })
    }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { authedUser } = getState()

        dispatch(showLoading())

        return saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser,
        }).then((q) => {
            dispatch(addQuestion(authedUser, q))
        }).then(() => {
            dispatch(hideLoading())
        })
    }
}

export function handleAnswerQuestion(qid, answer) {
    return (dispatch, getState) => {
        if (answer !== 'optionOne' && answer !== 'optionTwo') {
            throw Error("Option must be optionOne or optionTwo")
        }

        const { authedUser } = getState()

        return saveQuestionAnswer({
            authedUser: authedUser,
            qid: qid,
            answer: answer
        }).catch((e) => {
            console.warn('Error in handleAnswerQuestion: ', e)
            alert('There was an error answering the question. Try again.')
        }).then(() => {
            dispatch(answerQuestion(authedUser, qid, answer))
        })
    }
}