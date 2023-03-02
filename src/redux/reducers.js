const initialState = {
    name: "",
    surname: "",
    age: 0
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "CHANGE_NAME":
            return { ...state, name: payload }
        case "CHANGE_SURNAME":
            return { ...state, surname: payload }
        case "CHANGE_AGE":
            return { ...state, age: payload }
        default:
            return state;
    }
}

export default reducer;