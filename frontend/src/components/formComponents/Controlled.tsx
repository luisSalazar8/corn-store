import { cloneElement } from "react";
import {
  Controller,
  useFormContext,
  type RegisterOptions,
} from "react-hook-form";

interface ControlledProps {
  name: string;
  input: React.ReactElement;
  rules?: RegisterOptions;
}

const Controlled = ({ name, input, rules }: ControlledProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          return cloneElement(input, {
            ...field,
            ...(input.props || {}),
          });
        }}
        rules={rules}
      />
      {errors[name] && (
        <span className="text-red-500 text-sm font-semibold ml-1">
          {errors[name]?.message as string}
        </span>
      )}
    </div>
  );
};

export default Controlled;
