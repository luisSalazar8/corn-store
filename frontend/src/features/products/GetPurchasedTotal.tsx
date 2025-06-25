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
import Spinner from "@/components/Icons/Spinner";

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
              <Spinner className="size-7" />
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
