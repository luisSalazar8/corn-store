import UseAuthUserContext from "@/context/authUser/AuthUserContext";
import Icon from "../assets/images/Icon.png";
import { Link, useNavigate } from "react-router";
import React from "react";
import { useMutation } from "@tanstack/react-query";
import { LogOut } from "@/services/Auth";
import { toast } from "sonner";

const Header = () => {
  const user = UseAuthUserContext();
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: () => {
      return LogOut();
    },
    onError: () => {
      toast.error("Log Out Failed", {
        description: "An error ocurred, please try again latter!",
      });
    },
    onSuccess: () => {
      navigate("/login");
    },
  });

  return (
    <header>
      <div className="bg-gray-header text-gray-clear text-xs py-3 px-15 md:px-45 lg:px-75">
        <div className="w-fit ml-auto">
          {!user && (
            <React.Fragment>
              <Link
                to="/login"
                className="hover:cursor-pointer hover:underline mr-1"
              >
                Sign In
              </Link>
              /
              <Link
                to="register"
                className="hover:cursor-pointer hover:underline ml-1"
              >
                Sign Up
              </Link>
            </React.Fragment>
          )}
          {user && (
            <button
              className="hover:cursor-pointer hover:underline"
              onClick={() => {
                mutate();
              }}
            >
              Log Out
            </button>
          )}
        </div>
      </div>
      <div className="px-15 md:px-45 lg:px-75 flex items-center gap-2 py-3">
        <img src={Icon} alt="logo" className="size-[32px]" />
        <span className="text-3.5xl font-medium">Bob's Farm</span>
      </div>
    </header>
  );
};

export default Header;
