import StyledCard from "@/components/styledComponents/StyledCard";
import { CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Link, useNavigate } from "react-router";
import { FormProvider, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import LoadingButton from "@/components/formComponents/LoadingButton";
import { toast } from "sonner";
import { LogIn } from "@/services/Auth";
import LogInForm from "@/features/user/LogInForm";
import type { LoginForm } from "@/interface/Auth";



const Login = () => {
  const methods = useForm<LoginForm>();
  const { handleSubmit } = methods;
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: (data: LoginForm) => {
      return LogIn(data.email, data.password);
    },
    onError: () => {
      toast.error("Log In Failed", {
        description: "An error ocurred, please try again latter!",
      });
    },
    onSuccess: () => {
      navigate("/");
    },
  });

  const onSubmit = (data: LoginForm) => {
    mutate(data);
  };

  return (
    <div className="my-20">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="max-w-[520px] mx-auto">
          <StyledCard>
            <CardTitle className="mx-auto text-3.5xl font-semibold text-gray-footer">
              Sign In
            </CardTitle>
            <CardContent>
              <FormProvider {...methods}>
                <LogInForm />
              </FormProvider>
            </CardContent>
            <CardFooter className="flex-col gap-2">
              <LoadingButton isLoading={isPending}>Login</LoadingButton>
              <div className="text-gray-link text-sm">
                Don’t have account?
                <span className="text-gray-footer ml-1 text-sm">
                  <Link
                    to="/register"
                    className="underline-offset-4 hover:underline hover:decoration-gray-footer"
                  >
                    Register
                  </Link>
                </span>
              </div>
            </CardFooter>
          </StyledCard>
        </div>
      </form>
    </div>
  );
};

export default Login;
