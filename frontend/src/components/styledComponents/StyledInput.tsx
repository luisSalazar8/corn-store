import { cn } from "@/lib/utils";
import { Input } from "../ui/input";

const StyledInput = ({
  className,
  ...otherProps
}: React.ComponentProps<"input">) => {
  return (
    <Input
      className={cn("rounded-md border-gray-input px-4 py-6", className)}
      {...otherProps}
    />
  );
};

export default StyledInput;
