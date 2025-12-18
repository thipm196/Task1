
import { useState } from "react";
import CartSummary from "../components/Cart/CartSummary"
import ProductList from "../components/ProductList"
import SearchBar from "../components/SearchBar";
import { CATEGORIES } from "../constants";
import { useCart } from "../hooks/useCart";
import { useProducts } from "../hooks/useProducts";


function ProductsView() {
  const [ search, setSearch ] = useState<string>('');
  const [ category, setCategory ] = useState<string>('all');
  const  { cart, addToCart, updateCartItem } = useCart();
  const  { isFetching, products } = useProducts(search, category);
  return (
    <>
      <div className="app-container">
        <header className="search-header">
           <SearchBar category={category} onSelectChange={(e) => setCategory(e.target.value)} value={search} onChange={(e) => setSearch(e.target.value)} categories={CATEGORIES}/>
        </header>
        <main className="grid-layout">
          <section className="product-section">
            <h2>Products</h2>
            {
              isFetching ? 'Loading...' : (products.length ? <ProductList items={products} addToCart={addToCart} /> : <div>There are no products to display</div>)
            }
            
          </section>
          <aside className="cart-section">
            <CartSummary items={cart} updateCartItem={updateCartItem} />
          </aside>
        </main>
      </div>
    </>
  )
}

export default ProductsView