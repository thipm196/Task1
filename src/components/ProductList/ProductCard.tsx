import type { Product } from "../../types"

interface Props {
  item: Product,
  onClickAddToCard?: (item:Product) => void
}
function ProductCard( { item, onClickAddToCard = () => void 0} : Props) {

  return (
    <div className="product-card">
      <h3>{item.name}</h3>
      <p>{item.price} ₫</p>
      <button onClick={() => onClickAddToCard(item)}>Add to cart</button>
    </div>
  )
}

export default ProductCard