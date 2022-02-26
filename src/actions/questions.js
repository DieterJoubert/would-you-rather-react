import { showLoading, hideLoading } from "react-redux-loading"
import { saveQuestion } from "../utils/api"

export const RECEIVE_QUESTIONS = 'RECEIVE_TWEETS'
export const ADD_QUESTION = 'ADD_TWEET'
export const TOGGLE_QUESTION = 'TOGGLE_QUESTION'

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question,
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
            console.log('after save', q)
            dispatch(addQuestion(q))
        }).then(() => {
            dispatch(hideLoading())
        })
    }
}

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}