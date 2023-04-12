export const getCategoryProducts = (category, productList) => {
  const categoryProducts = productList.filter(
    (product) => product.category === category
  );
  console.log(categoryProducts.length);
  return categoryProducts;
};
