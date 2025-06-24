import { cn } from "@/lib/utils";
import { Card } from "../ui/card";

type StyledCardProps = React.ComponentProps<"div"> & {
  children: React.ReactNode;
};

const StyledCard = ({
  children,
  className,
  ...otherProps
}: StyledCardProps) => {
  return (
    <Card
      className={cn(
        "w-full px-6 pt-6 pb-8 rounded-lg border-gray-card shadow-card",
        className
      )}
      {...otherProps}
    >
      {children}
    </Card>
  );
};

export default StyledCard;
