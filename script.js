// Creation de l'action BUY_PHONE
const BUY_PHONE = "BUY_PHONE"

const buyPhone = () => {
  return {
    type: BUY_PHONE
  }
}


// Creation du REDUCER

// (prevState, action) => newState

const initialState = {
  phones: 5
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_PHONE:
      return {
        ...state,
        phones: state.phones - 1
      }

    default: return state

  }
}
