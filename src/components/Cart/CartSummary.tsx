import { memo } from "react";
import type { CartItem } from "../../types";

interface Props{
    items: CartItem[],
    setQty: (item: CartItem) => void
}

const CartSummary = memo(({ items, setQty = () => void 0 }: Props) => {
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  return (
    <div>
      <h2>Cart Summary</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {items.map((item: any) => (
            <li key={item.id} className="cart-item">
                <span>
                    {item.name} × <input type="number" min="0" max="99" onChange={(event) => setQty({...item, qty: event.target.value})} value={item.qty}/> = {(item.price * item.qty)} ₫
                </span>
              
            </li>
          ))}
        </ul>
      )}
      <hr />
      <strong>Total: {total} ₫</strong>
    </div>
  );
})

export default CartSummary;
