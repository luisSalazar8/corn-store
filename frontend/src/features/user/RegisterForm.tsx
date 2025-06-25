import Controlled from "@/components/formComponents/Controlled";
import PasswordInput from "@/components/formComponents/PasswordInput";
import StyledInput from "@/components/styledComponents/StyledInput";

const RegisterForm = () => {
  return (
    <div className="flex flex-col gap-3">
      <Controlled
        name="firstname"
        input={
          <StyledInput id="firstname" type="text" placeholder="First Name" />
        }
        rules={{ required: true }}
      />
      <Controlled
        name="lastname"
        input={
          <StyledInput id="lastname" type="text" placeholder="Last Name" />
        }
        rules={{ required: true }}
      />
      <Controlled
        name="email"
        input={<StyledInput id="email" type="email" placeholder="Email" />}
        rules={{ required: true }}
      />
      <Controlled
        name="password"
        input={
          <PasswordInput id="password" type="password" placeholder="Password" />
        }
        rules={{ required: true }}
      />
      <Controlled
        name="confPass"
        input={
          <PasswordInput
            id="confPass"
            type="password"
            placeholder="Confirm Password"
          />
        }
        rules={{
          required: true,
          validate: (value, form) => {
            return value === form.password || "Passwords do not match";
          },
        }}
      />
    </div>
  );
};

export default RegisterForm;
