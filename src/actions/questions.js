export const RECEIVE_QUESTIONS = 'RECEIVE_TWEETS'
export const ADD_QUESTION = 'ADD_TWEET'
export const TOGGLE_QUESTION = 'TOGGLE_QUESTION'

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}