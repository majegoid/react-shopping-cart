import { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { categoriesData } from './api/categoriesData';
import { getCategoryProducts } from './api/getCategoryProducts';
import { productsData } from './api/productsData';
import { Navbar } from './components/layout/Navbar';
import { CartPage } from './components/pages/CartPage';
import { CategoryPage } from './components/pages/CategoryPage';
import { ProductDetailsPage } from './components/pages/ProductDetailsPage';
import { ProductsPage } from './components/pages/ProductsPage';

function App() {
  const [products, setProducts] = useState(productsData || []);
  const [categories, setCategories] = useState(categoriesData || []);
  const [cart, setCart] = useState([]);
  /**
   * shopping cart has:
   * {
   *  product: product
   *  quantity: number
   * }
   */

  const addProductToCart = (newProduct) => {
    const existingCartItem = cart.find((p) => p.product.id === newProduct.id);
    if (existingCartItem) {
      // increment quantity if product of same type in cart already
      setCart([
        ...cart.map((ci) =>
          ci === existingCartItem
            ? { ...existingCartItem, quantity: existingCartItem.quantity + 1 }
            : ci
        ),
      ]);
      return;
    }
    // add first instance of product to cart
    setCart([...cart, { product: newProduct, quantity: 1 }]);
  };

  const removeProductFromCart = (productId) => {
    const existingCartItem = cart.find((ci) => ci.product.id === productId);
    if (existingCartItem) {
      const newProductQuantity = existingCartItem.quantity - 1;
      if (newProductQuantity >= 1) {
        // decrement quantity if product of same type in cart already
        setCart([
          ...cart.map((ci) =>
            ci === existingCartItem
              ? { ...existingCartItem, quantity: newProductQuantity }
              : ci
          ),
        ]);
        return;
      }
      if (newProductQuantity === 0) {
        // remove last instance of product from cart
        setCart([...cart.filter((ci) => ci.product.id !== productId)]);
      }
    }
  };

  const clearProductFromCart = (productId) => {
    setCart([...cart.filter((ci) => ci.product.id !== productId)]);
  };

  console.log(cart);

  const categoryRoutesJsx = categories.map((category) => {
    const categoryProducts = getCategoryProducts(category, products.data);
    if (categoryProducts.length === 0) return null;
    return (
      <Route key={category} exact path={`/${category}`}>
        <CategoryPage category={category} categoryProducts={categoryProducts} />
      </Route>
    );
  });

  const productDetailsRoutesJsx = products.data.map((product) => {
    return (
      <Route key={product.id} exact path={`/product/${product.id}`}>
        <ProductDetailsPage
          product={product}
          addProductToCart={addProductToCart}
        />
      </Route>
    );
  });

  const cartTotalItems = cart.reduce((total, ci) => total + ci.quantity, 0);
  const cartTotalPrice = cart.reduce(
    (total, ci) => total + ci.quantity * ci.product.price,
    0
  );

  return (
    <div className='app'>
      <Navbar cartTotalItems={cartTotalItems} />
      <Switch>
        <Route exact path='/products'>
          <ProductsPage
            productList={products.data}
            categoryList={categories}
            addProductToCart={addProductToCart}
          />
        </Route>
        {categoryRoutesJsx}
        {productDetailsRoutesJsx}
        <Route exact path='/cart'>
          <CartPage
            cart={cart}
            addProductToCart={addProductToCart}
            removeProductFromCart={removeProductFromCart}
            clearProductFromCart={clearProductFromCart}
            cartTotalPrice={cartTotalPrice}
          />
        </Route>
        <Redirect to='/products' />
      </Switch>
    </div>
  );
}

export default App;
