import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const SuccessButton = ({
  className,
  ...otherProps
}: React.ComponentProps<"button">) => {
  return (
    <Button
      className={cn("w-full bg-success px-8 py-5 rounded-[43px]", className)}
      {...otherProps}
    />
  );
};

export default SuccessButton;
