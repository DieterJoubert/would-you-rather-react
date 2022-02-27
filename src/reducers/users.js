import { ADD_USER_ANSWER, ADD_USER_QUESTION, RECEIVE_USERS } from "../actions/users"

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case ADD_USER_ANSWER:
            const {
                uid,
                qid,
                answer
            } = action

            return {
                ...state,
                [uid]: {
                    ...state[uid],
                    answers: {
                        ...state[uid].answers,
                        [qid]: answer
                    }
                }
            }
        case ADD_USER_QUESTION:
            return {
                ...state,
                [action.uid]: {
                    ...state[action.uid],
                    questions: state[action.uid].questions.concat([action.qid])
                }
            }
        default:
            return state
    }
}
