import { ReactElement } from "react"
import { createContext } from "vm"
import { useState } from "react"
import { useEffect } from "react"

export type ProductType = {
    sku: string,
    nome: string,
    preço: number,
}

const initState: ProductType[] = []
//const initState: ProductType [] = [
//    {
//        "sku": "item001",
//        "nome": "item001",
//        "preço": 9999
//    },
//    {
//        "sku": "item002",
//        "nome": "item002",
//        "preço": 9999
//    },
//    {
//       "sku": "item003",
//       "nome": "item003",
//      "preço": 9999
//    }
//]

export type UseProductsContextType = {products: ProductType[]}

const initContextState: UseProductsContextType = {products: []}

const ProductsContext = createContext<UseProductsContextType>(initContextState)

type ChildrenType = { children?: ReactElement | ReactElement[]}

export const ProductsProvider = ({ children }: ChildrenType):
ReactElement => {
    const [products, setProducts] = useState<ProductType[]>
    (initState)

    useEffect(() => {
        const fetchProducts = async(): Promise<ProductType[]> => {
            const data = await fetch('http://localhost:3000/products').then(res => {
                return res.json()
            }).catch(err => {
                if (err instanceof Error) console.log(err.message)
            })
            return data
        }

        fetchProducts().then(products => setProducts(products))
    }, [])

    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>

    )
}

export default ProductsContext
