import update from 'immutability-helper';

const files = (state = [], action) => {
   const files = state;
   const fileIndex = state.findIndex((file => file.key === action.id));

    switch (action.type) {
        case 'ADD_FILES':
        return action.files

        case 'UPDATE_FILE_ALT':
        const alt = action.alt;
        files[fileIndex]['alt'] = alt;
        return files

        case 'UPDATE_FILE_TITLE':
        const title = action.title;
        files[fileIndex]['title'] = title;
        return files

        case 'REMOVE_FILE':
        const fileId = action.id;
        return state.filter(file => file.key !== fileId);

        default:
        return state
    }
}



export default files;
