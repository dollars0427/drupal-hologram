export const addFiles = (files) => {
  return {
    type: 'ADD_FILES',
    files: files
  }
}

export const removeFile = (fileId) => {
  return {
    type: 'REMOVE_FILE',
    id: fileId
  }
}
