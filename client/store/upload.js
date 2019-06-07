import axios from 'axios'

const UPLOADED_FILE = 'UPLOADED_FILE'

const uploadedFile = results => {
  let finalResults = null
  if (results){
    finalResults = results
  }
  else {
    finalResults = {}
  }
  return {
    type: UPLOADED_FILE,
    results: finalResults
  }
}

export const uploadFile = (formData) => async dispatch => {
  try {
    const config = {
      headers: {
          'content-type': 'multipart/form-data'
      }
    }
    const {data} = await axios.post('/api/upload', formData, config)
    dispatch(uploadedFile(data))
  }
  catch (err){
    console.error(err)
  }
}

const initialState = {}

export default function(state = initialState, action){
  switch (action.type) {
    case UPLOADED_FILE:
      return action.results
    default:
      return state
  }
}
