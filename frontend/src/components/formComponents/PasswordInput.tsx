import React, { useState } from "react";
import StyledInput from "../styledComponents/StyledInput";
import Eye from "../../assets/images/icons/view.png";
import Hide from "../../assets/images/icons/hide.png";

const PasswordInput = (props: React.ComponentProps<"input">) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <StyledInput
        {...props}
        type={showPassword ? "text" : "password"}
        autoComplete="off"
      />
      <img
        src={showPassword ? Hide : Eye}
        alt="eye"
        onClick={() => {
          setShowPassword((value) => !value);
        }}
        className="size-[20px] absolute inset-0 ml-auto mr-5 my-auto hover:cursor-pointer"
      />
    </div>
  );
};

export default PasswordInput;
