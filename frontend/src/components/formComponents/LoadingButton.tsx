import Spinner from "../Icons/Spinner";
import SuccessButton from "../styledComponents/SuccessButton";

const LoadingButton = ({
  isLoading,
  children,
  ...otherProps
}: React.ComponentProps<"button"> & { isLoading?: boolean }) => {
  return (
    <SuccessButton {...otherProps} disabled={isLoading}>
      {isLoading ? <Spinner className="size-7" /> : children}
    </SuccessButton>
  );
};

export default LoadingButton;
