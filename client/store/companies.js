import axios from 'axios'

const GOT_COMPANIES = 'GOT_COMPANIES'

const gotCompanies = companies => ({
  type: GOT_COMPANIES,
  companies
})

export const getCompanies = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/companies')
    dispatch(gotCompanies(data))
  }
  catch (err){
    console.error(err)
  }
}

const initialState = []

export default function(state = initialState, action){
  switch (action.type) {
    case GOT_COMPANIES:
      return action.companies
    default:
      return state
  }
}
