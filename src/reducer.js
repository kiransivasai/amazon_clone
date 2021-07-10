export const initialState = {
  basket: [],
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price * item.quantity + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      if ([...state.basket]?.some((item) => item.id === action.item.id)) {
        const objIndex = [...state.basket].findIndex(
          (obj) => obj.id === action.item.id
        );
        state.basket[objIndex].quantity += 1;
        return {
          ...state,
          basket: [...state.basket],
        };
      } else {
        return {
          ...state,
          basket: [...state.basket, action.item],
        };
      }
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant Remove product (id: ${action.id}) as it is not in the cart!`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
};

export default reducer;
