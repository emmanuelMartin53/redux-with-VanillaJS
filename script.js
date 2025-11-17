// Import depuis le CDN ESM
import { createStore, combineReducers } from "https://cdn.jsdelivr.net/npm/redux@5.0.1/dist/redux.mjs";


// ACTION
const BUY_PHONE = "BUY_PHONE";
const BUY_TABLET = "BUY_TABLET";

const BUY_TV = "BUY_TV"



const buyPhone = () => {
  return {
    type: BUY_PHONE
  }
};

const buyTablet = () => {
  return {
    type: BUY_TABLET
  }
}

const buyTv = () => {
  return {
    type: BUY_TV
  }
}

// STATE INITIAL
const initialStatePhone = {
  phones: 5,
  tablets: 10
};


const initialStateTv = {
  tv: 20
};



// REDUCER
const phonesReducer = (state = initialStatePhone, action) => {
  switch (action.type) {
    case BUY_PHONE:
      return {
        ...state,
        phones: state.phones - 1
      }
      break;
    case BUY_TABLET:
      return {
        ...state,
        tablets: state.tablets - 1
      }
    default:
      return state;
  }
}

const tvReducer = (state = initialStateTv, action) => {
  switch (action.type) {
    case BUY_TV:
      return {
        ...state,
        tv: state.tv - 1
      }
      break;
    default:
      return state;
  }
}


// Combiner les reducers

const rootReducer = combineReducers({
  phone: phonesReducer,
  tv: tvReducer
})

// STORE
const store = createStore(rootReducer);





// je  récupère  l'id dans lequel je souhaite insérer mon html
const availablePhones = document.getElementById("count");
availablePhones.innerHTML = store.getState().phone.phones


const availableTablets = document.getElementById("count-tab");
availableTablets.innerHTML = store.getState().phone.tablets

const availableTv = document.getElementById("count-tv");
availableTv.innerHTML = store.getState().tv.tv

console.log(store.getState())

// je récupère l'id du bouton
const btnBuyPhone = document.getElementById("buy-phone");
const btnBuyTablet = document.getElementById("buy-tablet");
const btnBuyTv = document.getElementById("buy-tv");


// je lui ajoute un écouteur d'évènement
btnBuyPhone.addEventListener("click", () => {
  store.dispatch(buyPhone())
})


btnBuyTablet.addEventListener("click", () => {
  store.dispatch(buyTablet())
})

btnBuyTv.addEventListener("click", () => {
  store.dispatch(buyTv())
})


// j'affiche le rendu: listenner
store.subscribe(() => {
  console.log(store.getState())
  availablePhones.innerHTML = store.getState().phone.phones
  availableTablets.innerHTML = store.getState().phone.tablets
  availableTv.innerHTML = store.getState().tv.tv
})
