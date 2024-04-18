import { ProductType } from "../context/ProductsProvider"
import { ReducerActionType, ReducerAction } from "../context/CartProvider"
import { ReactElement } from "react"

type PropsType = {
    product: ProductType,
    dispatch: React.Dispatch<ReducerAction>,
    REDUCER_ACTIONS: ReducerActionType,
    inCart: boolean, 
}

const Product = ({ product, dispatch, REDUCER_ACTIONS, inCart}:PropsType): ReactElement => {
    
    const img: string = new URL(`../images/${product.sku}.jpg`, import.meta.url).href
    console.log(img)

    const onAddToCart = () => dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, qty: 1 }})

    const itemInCart = inCart ? '-> Item in Cart: ✅' : null 

    const content = 
        <article className="product">
            <h3>{product.nome}</h3>
            <img src={img} alt={product.nome} 
            className="product__img" />
            <p>{new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR' }).format(product.preço)}{itemInCart}</p>
            <button onClick={onAddToCart}>Add to Cart</button>
        </article>
    
    return content
  }
  
  export default Product