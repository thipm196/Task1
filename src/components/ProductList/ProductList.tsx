import { memo } from "react";
import type { Product } from "../../types";

interface Props {
  items: Product[],
  addToCart: (item: Product) => void
}

const ProductList = memo(({items, addToCart }: Props) => {
  return (
    <>
     <div>
      <div className="product-grid">
        {items.map((item) => (
          <div key={item.id} className="product-card">
            <h3>{item.name }</h3>
            <p>{item.category}</p>
            <p>{item.price} ₫</p>
            <button onClick={() => addToCart(item)}>Add to cart</button>
          </div>
        ))}
      </div>
    </div>

    </>
  )
})

export default ProductList