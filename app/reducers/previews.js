const files = (state = [], action) => {
    switch (action.type) {
        case 'ADD_FILE':
        return {
            files: action.files
         }
        default:
        return state
    }
}

export default files;
