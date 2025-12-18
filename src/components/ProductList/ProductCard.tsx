import { memo } from "react"
import type { Product } from "../../types"

interface Props {
  item: Product,
  onClickAddToCart?: () => void
}

const ProductCard = memo(({ item, onClickAddToCart = () => void 0} : Props) => {
  return (
    <>
     <div className="product-card">
      <h3>{item.name}</h3>
      <p>{item.category}</p>
      <p>{item.price} ₫</p>
      <button onClick={() => onClickAddToCart()}>Add to cart</button>
    </div>
    </>
  )
})

export default ProductCard