import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const Login = () => {
  return (
    <div className="my-20">
      <div className="max-w-[520px] mx-auto">
        <Card className="w-full px-6 pt-6 pb-8 rounded-lg border-gray-card shadow-card">
          <CardTitle className="mx-auto text-3.5xl font-semibold text-gray-footer">
            Sign In
          </CardTitle>
          <CardContent>
            <form>
              <div className="flex flex-col gap-3">
                <div className="grid gap-2">
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email"
                    required
                    className="rounded-md border-gray-input px-4 py-6"
                  />
                </div>
                <div className="grid gap-2">
                  <Input
                    id="password"
                    type="password"
                    placeholder="Password"
                    required
                    className="rounded-md border-gray-input px-4 py-6"
                  />
                  <div className="flex items-center text-gray-link">
                    <a
                      href="#"
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline hover:decoration-gray-link"
                    >
                      Forgot your password?
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button
              type="submit"
              className="w-full bg-success px-8 py-5 rounded-[43px]"
            >
              Login
            </Button>
            <div className="text-gray-link text-sm">
              Don’t have account?
              <span className="text-gray-footer ml-1 text-sm">
                <a
                  href="#"
                  className="underline-offset-4 hover:underline hover:decoration-gray-footer"
                >
                  Register
                </a>
              </span>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;
