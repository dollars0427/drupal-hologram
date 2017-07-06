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

export const updateAlt = (fileId, altText) => {
  return {
    type: 'UPDATE_FILE_ALT',
    id: fileId,
    alt: altText,
  }
}

export const updateTitle = (fileId, titleText) => {
  return {
    type: 'UPDATE_FILE_TITLE',
    id: fileId,
    title: titleText,
  }
}
