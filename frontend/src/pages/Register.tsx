import LoadingButton from "@/components/formComponents/LoadingButton";
import StyledCard from "@/components/styledComponents/StyledCard";
import { CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import RegisterForm from "@/features/user/RegisterForm";
import { SignUp } from "@/services/Auth";
import { useMutation } from "@tanstack/react-query";
import { FormProvider, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";

interface RegisterForm {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confPassword: string;
}

const Register = () => {
  const methods = useForm<RegisterForm>();
  const { handleSubmit } = methods;
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: (data: RegisterForm) => {
      const { firstname, lastname, email, password } = data;
      return SignUp({ firstname, lastname, email, password });
    },
    onError: () => {
      toast.error("Sign Up Failed", {
        description: "An error ocurred, please try again latter!",
      });
    },
    onSuccess: () => {
      toast.success("Sign Up Success", {
        description: "Please log in.",
      });
      navigate("/login");
    },
  });

  const onSubmit = (data: RegisterForm) => {
    mutate(data);
  };

  return (
    <div className="my-20">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="max-w-[520px] mx-auto">
          <StyledCard>
            <CardTitle className="mx-auto text-3.5xl font-semibold text-gray-footer">
              Create Account
            </CardTitle>
            <CardContent>
              <FormProvider {...methods}>
                <RegisterForm />
              </FormProvider>
            </CardContent>
            <CardFooter className="flex-col gap-2">
              <LoadingButton isLoading={isPending}>
                Create Account
              </LoadingButton>
              <div className="text-gray-link text-sm">
                Already have account
                <span className="text-gray-footer ml-1 text-sm">
                  <Link
                    to="/login"
                    className="font-medium underline-offset-4 hover:underline hover:decoration-gray-footer"
                  >
                    Login
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

export default Register;
