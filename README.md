# React + TypeScript + Vite

## 🚀 How to Run

1. Install dependencies:
  - npm install
2. Start Development Environment | Development with Docker
 - npm run dev | docker-compose up
3. Build for production
 - npm run build
4. Change PRODUCTS in constants.ts for testing.

### Component Structure
- ProductList: Holds the state (items) and passes update logic down to children.
- ProductCard: Display product item detail and receives props from the parent(ProductList).
- CartSummary: Display cart items and automatically recalculate the total cost when quantities change.
- CartItem: Display cart item detail and receives props from the parent(CartSummary).
- SearchBar: Allows users to filter products


### State management
- State is managed locally with useState and recalculated totals.
- Items Array: Upholds the cart's product list. Every cart item has a quantity. 
- Updates state when quantity changes, add to cart, and filter with search bar.
- Derived State (Total): The items array is used to dynamically calculate the total cost. Consistency is ensured by not storing it separately.

#### Responsive Design Decisions
- Flexbox & Grid Layouts for adaptive product listing and cart display.
- Media Queries to adjust layout for mobile, tablet, and desktop.
- Mobile-first approach: Simplified navigation and stacked layout on small screens. Product items collapse into vertical cards for readability.
- Desktop view: Side-by-side product list and cart for efficient use of space

"# Task1" 
