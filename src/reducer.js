export const initialState = {
    basket: [],
    user: null
}

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state,action){
    switch(action.type){
        case "SET_USER":
            return{
                ...state,
                user:action.user
            }
        case "ADD_TO_BASKET":
            //logic for adding to basket
            return {
                ...state,
                basket:[...state.basket,action.item]
            }
        case "REMOVE_FROM_BASKET":
            //logic for REMOVING FROM basket
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem => basketItem.id === action.id ))
            if(index >=0){
                //item exist in basket,remove it
                newBasket.splice(index ,1)
            }else{
                console.warn(
                    `Cant Remove product (id: ${action.id} as its not in our basket)`
                )
            }
            
            
            return {
                ...state,
                basket:newBasket
            }
        default:
            return state;
    }
}


export default reducer;