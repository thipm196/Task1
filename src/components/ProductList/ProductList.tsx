import { memo } from "react";
import type { Product } from "../../types";
import ProductCard from "./ProductCard";

interface Props {
  items: Product[],
  addToCart: (item: Product) => void
}

const ProductList = memo(({items, addToCart }: Props) => {
  return (
    <>
      <div className="product-grid">
        {items.map((item) => (
          <ProductCard key={item.id} item={item} onClickAddToCart={() => addToCart(item)}/> 
        ))}
      </div>
    </>
  )
})

export default ProductList