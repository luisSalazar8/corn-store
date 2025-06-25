import { useMutation } from "@tanstack/react-query";
import Eye from "../../assets/images/icons/view.png";
import { toast } from "sonner";
import { getPurchasedTotal } from "@/services/Product";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

interface GetPurchasedTotalProps {
  id: string;
  name: string;
}

const GetPurchasedTotal = ({ id, name }: GetPurchasedTotalProps) => {
  const [open, setOpen] = useState(false);
  const [amountBought, setAmountBought] = useState(0);

  const { mutate, isPending } = useMutation({
    mutationFn: () => {
      return getPurchasedTotal(id);
    },
    onError: () => {
      toast.error("Get Total Failed", {
        description: "An error ocurred, please try again later!",
      });
    },
    onSuccess: (data) => {
      setOpen(true);
      setAmountBought(data.amount);
    },
  });

  return (
    <React.Fragment>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            disabled={isPending}
            className="bg-white border-gray-card border-solid border rounded-full size-[40px] flex justify-center items-center hover:cursor-pointer"
            onClick={() => mutate()}
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
              <img src={Eye} alt="viewIcon" className="size-[20px]" />
            )}
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>See bought quantity</p>
        </TooltipContent>
      </Tooltip>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="capitalize">
              Total {name} Bought
            </DialogTitle>
          </DialogHeader>
          <div className="flex items-center gap-2">
            You’ve bought {amountBought} {amountBought > 1 ? "items" : "item"}{" "}
            so far.
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default GetPurchasedTotal;
