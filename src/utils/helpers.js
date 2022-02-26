export const getUserScore = (user) => {
    console.log(user)
    return user.questions.length + getArrayFromDictionary(user.answers).length
}

export const getUsersRanked = (users) => {
    return users.sort((a, b) => getUserScore(b) - getUserScore(a))
}

export const getUsersArray = (users) => {
    return getArrayFromDictionary(users)
}

export const getArrayFromDictionary = (dictionary) => {
    var keys = Object.keys(dictionary);
    let arr = []

    keys.forEach(function (key) {
        arr.push(dictionary[key])
    });

    return arr
}