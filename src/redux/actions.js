const generateActions = (store) => {
    const actions = {
        CONSOLE_LOG: ({ text }) => {
            console.log("YAZI: ", text)
        },
        CHANGE_NAME: ({ name }) => {
            store.dispatch({ type: "CHANGE_NAME", payload: name })
        }
    }

    return actions;
}

export default generateActions;