import StyledCard from "@/components/styledComponents/StyledCard";
import StyledInput from "@/components/styledComponents/StyledInput";
import SuccessButton from "@/components/styledComponents/SuccessButton";
import { CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="my-20">
      <div className="max-w-[520px] mx-auto">
        <StyledCard>
          <CardTitle className="mx-auto text-3.5xl font-semibold text-gray-footer">
            Create Account
          </CardTitle>
          <CardContent>
            <form>
              <div className="flex flex-col gap-3">
                <StyledInput
                  id="firstname"
                  type="text"
                  placeholder="First Name"
                  required
                />
                <StyledInput
                  id="lastname"
                  type="text"
                  placeholder="Last Name"
                  required
                />
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
                <StyledInput
                  id="confPass"
                  type="password"
                  placeholder="Confirm Password"
                  required
                />
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <SuccessButton type="submit">Create Account</SuccessButton>
            <div className="text-gray-link text-sm">
              Already have account
              <span className="text-gray-footer ml-1 text-sm">
                <Link
                  to="/login"
                  className="underline-offset-4 hover:underline hover:decoration-gray-footer"
                >
                  Login
                </Link>
              </span>
            </div>
          </CardFooter>
        </StyledCard>
      </div>
    </div>
  );
};

export default Register;
