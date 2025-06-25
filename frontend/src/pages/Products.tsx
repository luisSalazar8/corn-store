import ProductsContainer from "@/features/products/ProductsContainer";

const Products = () => {
  return (
    <div className="px-15 md:px-45 lg:px-75 pt-5">
      <div className="text-3.5xl font-semibold text-gray-footer mb-10">
        Popular Products
      </div>
      <ProductsContainer />
    </div>
  );
};

export default Products;
