import { getProducts } from "@/services/Product";
import { useQuery } from "@tanstack/react-query";
import ItemsList from "./ItemsList";

const ProductsContainer = () => {
  const { isPending, isError, data } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    refetchOnWindowFocus: false,
  });

  if (isPending) {
    return "loading";
  }

  if (isError) {
    return "error";
  }

  return <ItemsList items={data} />;
};

export default ProductsContainer;
