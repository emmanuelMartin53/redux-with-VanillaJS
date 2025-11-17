// Import depuis le CDN ESM
import { createStore } from "https://cdn.jsdelivr.net/npm/redux@5.0.1/dist/redux.mjs";

// ACTION
const BUY_PHONE = "BUY_PHONE";
const buyPhone = () => {
  return {
    type: BUY_PHONE
  }
};

// STATE INITIAL
const initialState = {
  phones: 5
};

// REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_PHONE:
      return {
        ...state,
        phones: state.phones - 1
      };
    default:
      return state;
  }
}

// STORE
const store = createStore(reducer);

// je  récupère  l'id dans lequel je souhaite insérer mon html
const availablePhones = document.getElementById("count");
availablePhones.innerHTML = store.getState().phones


// je récupère l'id du bouton
const btnBuyPhone = document.getElementById("buy-phone");

// je lui ajoute un écouteur d'évènement
btnBuyPhone.addEventListener("click", () => {
  store.dispatch(buyPhone())
})

// j'affiche le rendu
store.subscribe(() => {
  console.log(store.getState())
  availablePhones.innerHTML = store.getState().phones
})
