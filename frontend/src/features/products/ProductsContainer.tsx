import { getProducts } from "@/services/Product";
import { useQuery } from "@tanstack/react-query";
import ItemsList from "./ItemsList";
import Spinner from "@/components/Icons/Spinner";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircleIcon } from "lucide-react";

const ProductsContainer = () => {
  const { isPending, isError, data } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    refetchOnWindowFocus: false,
  });

  if (isPending) {
    return <Spinner className="size-25 mx-auto" />;
  }

  if (isError) {
    return (
      <Alert variant="destructive" className="w-fit mx-auto border-red-300">
        <AlertCircleIcon />
        <AlertTitle>Error!</AlertTitle>
        <AlertDescription>
          Couldn't find the products, please try again later!
        </AlertDescription>
      </Alert>
    );
  }

  return <ItemsList items={data} />;
};

export default ProductsContainer;
