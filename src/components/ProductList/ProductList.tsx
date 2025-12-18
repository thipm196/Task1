import { memo } from "react";
import type { IProduct } from "../../types";
import ProductCard from "./ProductCard";
import style from "./style.module.css";

interface Props {
  items: IProduct[],
  addToCart: (item: IProduct) => void
}

const ProductList = memo(({items, addToCart }: Props) => {
  return (
    <>
      <div className={style['product-grid']}>
        {items.map((item) => (
          <ProductCard key={item.id} item={item} onClickAddToCart={() => addToCart(item)}/> 
        ))}
      </div>
    </>
  )
})

export default ProductList