import { cartT } from './cartContext'
const reducer = (state:cartT, action:any) => {
    if(action.type = "CLEAR CART"){
        console.log("cart clear")
    }
}

export default reducer