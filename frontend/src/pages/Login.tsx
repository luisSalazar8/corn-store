import StyledCard from "@/components/styledComponents/StyledCard";
import StyledInput from "@/components/styledComponents/StyledInput";
import SuccessButton from "@/components/styledComponents/SuccessButton";
import { CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="my-20">
      <div className="max-w-[520px] mx-auto">
        <StyledCard>
          <CardTitle className="mx-auto text-3.5xl font-semibold text-gray-footer">
            Sign In
          </CardTitle>
          <CardContent>
            <form>
              <div className="flex flex-col gap-3">
                <StyledInput
                  id="email"
                  type="email"
                  placeholder="Email"
                  required
                />
                <StyledInput
                  id="password"
                  type="password"
                  placeholder="Password"
                  required
                />
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <SuccessButton type="submit">Login</SuccessButton>
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
    </div>
  );
};

export default Login;
