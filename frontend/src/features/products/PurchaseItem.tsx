import { useMutation } from "@tanstack/react-query";
import Bag from "../../assets/images/icons/Bag.svg";
import { toast } from "sonner";
import { purchaseItem } from "@/services/Product";

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
        <svg
          className="size-7 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          />
        </svg>
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
