import { useLogin } from "../hooks/useLogin";
import FormInput from "../components/FormInput";

import { Form, useActionData } from "react-router-dom";
import { useRegister } from "../hooks/useRegister";
import { useEffect } from "react";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let displayName = formData.get("displayName");
  let email = formData.get("email");
  let password = formData.get("password");
  let photoURL = formData.get("photoURL");

  return { displayName, email, password, photoURL };
};

function Register() {
  const userData = useActionData();
  const { registerWithEmailPassword } = useRegister();

  useEffect(() => {
    if (userData) {
      registerWithEmailPassword(userData);
    }
  }, [userData]);

  const { signUpWithGoogle } = useLogin();
  return (
    <div className="min-h-screen grid place-items-center">
      <Form method="post" className="w-96">
        <h1 className="text-3xl font-bold text-center mb-4 ">Register</h1>
        <FormInput type="text" labelText="Display Name:" name="DisplayName" />
        <FormInput type="email" labelText="Email:" name="email" />
        <FormInput type="url" labelText="Photo URL:" name="photoURL" />
        <FormInput type="password" labelText="Password:" name="password" />
        <div className="mt-6">
          <button type="submit" className="btn btn-secondary btn-block">
            {" "}
            Register
          </button>
        </div>
        <button
          type="button"
          onClick={signUpWithGoogle}
          className="btn btn-secondary mt-3 btn-block"
        >
          Google
        </button>
      </Form>
    </div>
  );
}

export default Register;
