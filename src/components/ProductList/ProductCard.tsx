import { memo } from "react"
import style from "./style.module.css";
import type { Product } from "../../types"

interface Props {
  item: Product,
  onClickAddToCart?: () => void
}

const ProductCard = memo(({ item, onClickAddToCart = () => void 0} : Props) => {
  return (
    <>
    <div className={style['card']}>
      <div className={style['card-body']}>
        <h3 className={style['card-title']}>{item.name}</h3>
        <p className={style['card-text']}>{item.category}</p>
      </div>
      <div className={style['card-footer']}>
       <button onClick={() => onClickAddToCart()}>Add to cart</button>
      </div>
  </div>
    </>
  )
})

export default ProductCard