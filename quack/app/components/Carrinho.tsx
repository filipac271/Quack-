import useCart from "../hooks/useCart"
import { useState } from "react"
import CartLineItem from "./CartLineItem"

const Carrinho = () => {
  const [confirm, setConfirm] = useState<boolean>(false)
  const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart } = useCart()

  const onSubmitOrder = () => {
    dispatch({ type: REDUCER_ACTIONS.SUBMIT})
    setConfirm(true)
  }

  const pageContent = confirm
      ? <h2>Obrigado pela sua encomenda!</h2>
      : <>
           <h2 className="offscreen"></h2>
           <ul className="cart">
               {cart.map(item => {
                   return (
                        <CartLineItem
                            key={item.sku}
                            item={item}
                            dispatch={dispatch}
                            REDUCER_ACTIONS={REDUCER_ACTIONS}
                        />
                   )
               })}
          </ul>
          <div className="cart__totals">
            <p>Total items: {totalItems}</p>
            <p>Total price: {totalPrice}</p>
            <button className="cart__submit" disabled={!totalItems} onClick={onSubmitOrder}>
                Place Order
            </button>
          </div>
      </>

      const content = (
        <main className="main main--cart">
          {pageContent}
        </main>
      )

    return content
  }
  
  export default Carrinho