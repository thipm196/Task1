import { memo } from "react"
import style from "./style.module.css";
import type { IProduct } from "../../types"

interface Props {
  item: IProduct,
  onClickAddToCart?: () => void
}

const ProductCard = memo(({ item, onClickAddToCart = () => void 0} : Props) => {
  return (
    <>
    <div className={style['card']}>
      <div className={style['card-body']}>
        <h3 className={style['card-title']}>{item.name}</h3>
        <p className={style['card-text']}>{item.category}</p>
        <span className={style['card-text']}>{item.price}đ</span>
      </div>
      <div className={style['card-footer']}>
       <button onClick={() => onClickAddToCart()}>Add to cart</button>
      </div>
  </div>
    </>
  )
})

export default ProductCard