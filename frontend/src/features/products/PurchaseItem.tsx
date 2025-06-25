import { useMutation } from "@tanstack/react-query";
import Bag from "../../assets/images/icons/Bag.svg";
import { toast } from "sonner";
import { purchaseItem } from "@/services/Product";
import Spinner from "@/components/Icons/Spinner";

interface PurchaseItemProps {
  id: string;
}

const PurchaseItem = ({ id }: PurchaseItemProps) => {
  const { mutate, isPending } = useMutation({
    mutationFn: () => {
      return purchaseItem(id);
    },
    onError: () => {
      toast.error("Purchase Failed", {
        description: "An error ocurred, please try again later!",
      });
    },
    onSuccess: () => {
      toast.success("Purchase Success", {
        description: "Product bought successfully!",
      });
    },
  });

  return (
    <button
      onClick={() => mutate()}
      disabled={isPending}
      className={`group/icon size-[40px] rounded-full ${
        isPending ? "bg-success" : "bg-gray-card"
      } flex justify-center items-center hover:cursor-pointer active:bg-success transition duration-150`}
    >
      {isPending ? (
        <Spinner className="size-7" />
      ) : (
        <img
          src={Bag}
          alt="shopIcon"
          className="group-active/icon:invert transition duration-150"
        />
      )}
    </button>
  );
};

export default PurchaseItem;
