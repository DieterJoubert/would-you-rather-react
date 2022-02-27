export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_USER_ANSWER = 'ADD_USER_ANSWER'
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION'

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export function addUserAnswer(uid, qid, answer) {
    return {
        type: ADD_USER_ANSWER,
        uid: uid,
        qid: qid,
        answer: answer
    }
}

export function addUserQuestion(uid, qid) {
    return {
        type: ADD_USER_QUESTION,
        uid: uid,
        qid: qid
    }
}