import { memo, type ChangeEvent } from "react";
import style from "./style.module.css";
import type { CartItem } from "../../types";
interface Props{
    items: CartItem[],
    updateCartItem: (item: CartItem) => void
}

const CartSummary = memo(({ items, updateCartItem = () => void 0 }: Props) => {
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, item : CartItem) => {
    const value = parseInt(e.target.value);
    if( typeof value === 'number' && !Number.isNaN(value)  && value >= 0){
      updateCartItem({...item, qty: value})
    }
  }
  return (
    <div className={style['cart-summary']}>
      <h2>Cart Summary</h2>
      <ul>
        {items.map(item => (
          <li key={item.id} className={style['cart-item']}>
            <span className={style['item-name']}>{item.name}</span>
            <input
              type="number"
              min="0"
              max="99"
              value={item.qty}
              onChange={(e) => handleChange(e, item)}
            />
            <span className={style['item-price']}>{(item.price * item.qty)} đ</span>
          </li>
        ))}
      </ul>
      <hr />
      <div className={style['cart-total']}>
        <strong>Total:</strong> <span>{total} đ</span>
      </div>
    </div>
  );
})

export default CartSummary;
