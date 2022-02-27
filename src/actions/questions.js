import { showLoading, hideLoading } from "react-redux-loading"
import authedUser from "../reducers/authedUser"
import { saveQuestion, saveQuestionAnswer } from "../utils/api"

export const RECEIVE_QUESTIONS = 'RECEIVE_TWEETS'
export const ADD_QUESTION = 'ADD_TWEET'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

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

function answerQuestion(authedUser, qid, answer) {
    return {
        type: ANSWER_QUESTION,
        authedUser: authedUser,
        qid: qid,
        answer: answer
    };
}

export function handleAnswerQuestion(authedUser, qid, answer) {
    return (dispatch, getState) => {
        if (answer !== 'optionOne' && answer !== 'optionTwo') {
            throw Error("Option must be optionOne or optionTwo")
        }

        dispatch(answerQuestion(authedUser, qid, answer))

        return saveQuestionAnswer({
            authedUser: authedUser,
            qid: qid,
            answer: answer
        }).catch((e) => {
            console.warn('Error in handleAnswerQuestion: ', e)
            alert('There was an error answering the question. Try again.')
        })
    }
}