import { useContext } from "react"
import CartContext from "../context/CartProvider"
import { useCartContextType } from "../context/CartProvider"

const useCart = (): useCartContextType => {
    return useContext(CartContext)
}

export default useCart

