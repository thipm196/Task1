import { memo } from "react";
import style from "./style.module.css";
import type { ICartItem } from "../../types";
import CartItem from "./CartItem";
interface Props{
    items: ICartItem[],
    updateCartItem: (item: ICartItem) => void
}

const CartSummary = memo(({ items, updateCartItem = () => void 0 }: Props) => {
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className={style['cart-summary']}>
      <h2>Cart Summary</h2>
      <ul>
        {items.map(item => <CartItem item={item} updateCartItem={updateCartItem}/>)}
      </ul>
      <hr />
      <div className={style['cart-total']}>
        <strong>Total:</strong> <span>{total}đ</span>
      </div>
    </div>
  );
})

export default CartSummary;
