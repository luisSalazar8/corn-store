import Controlled from "@/components/formComponents/Controlled";
import PasswordInput from "@/components/formComponents/PasswordInput";
import StyledInput from "@/components/styledComponents/StyledInput";

const LogInForm = () => {
  return (
    <div className="flex flex-col gap-3">
      <Controlled
        name="email"
        input={<StyledInput id="email" type="email" placeholder="Email" />}
        rules={{ required: true }}
      />
      <Controlled
        name="password"
        input={<PasswordInput id="password" placeholder="Password" />}
        rules={{ required: true }}
      />
    </div>
  );
};

export default LogInForm;
