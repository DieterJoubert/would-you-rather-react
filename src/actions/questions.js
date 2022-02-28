export const RECEIVE_QUESTIONS = 'RECEIVE_TWEETS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function addQuestion(authedUser, question) {
    return {
        type: ADD_QUESTION,
        authedUser,
        question
    }
}

export function answerQuestion(authedUser, qid, answer) {
    return {
        type: ANSWER_QUESTION,
        authedUser: authedUser,
        qid: qid,
        answer: answer
    };
}

