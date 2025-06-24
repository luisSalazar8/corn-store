import PasswordInput from "@/components/formComponents/PasswordInput";
import StyledCard from "@/components/styledComponents/StyledCard";
import StyledInput from "@/components/styledComponents/StyledInput";
import { CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Link } from "react-router";
import { FormProvider, useForm } from "react-hook-form";
import Controlled from "@/components/formComponents/Controlled";
import { useMutation } from "@tanstack/react-query";
import { LogIn } from "@/services/auth/Login";
import LoadingButton from "@/components/formComponents/LoadingButton";

interface LoginForm {
  email: string;
  password: string;
}

const Login = () => {
  const methods = useForm<LoginForm>();
  const { handleSubmit } = methods;

  const { mutate, isPending } = useMutation({
    mutationFn: (data: LoginForm) => {
      return LogIn(data.email, data.password);
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
                <div className="flex flex-col gap-3">
                  <Controlled
                    name="email"
                    input={
                      <StyledInput
                        id="email"
                        type="email"
                        placeholder="Email"
                      />
                    }
                    rules={{ required: true }}
                  />
                  <Controlled
                    name="password"
                    input={
                      <PasswordInput id="password" placeholder="Password" />
                    }
                    rules={{ required: true }}
                  />
                </div>
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
