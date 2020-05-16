import React from "react";
import { useForm } from "react-hook-form";

function Register(props) {
  const onSubmit = (data) => {
    props.register(data);
  };

  const { handleSubmit, register, errors } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        name="email"
        ref={register({
          required: "Required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "არასწორი მეილი",
          },
        })}
      />
      {errors.email && errors.email.message}
      <input
        name="password"
        type="password"
        ref={register({
          required: "Required",
        })}
      />
      {errors.password && <p>{errors.password.message}</p>}

      <button type="submit">Submit</button>
    </form>
  );
}

export default Register;
