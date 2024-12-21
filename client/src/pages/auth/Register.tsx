import { useCallback, useState } from "react";
import InputField from "../../components/common/InputField";
import { Link, useNavigate } from "react-router-dom";
import SubmitButton from "../../components/common/SubmitButton";
import authApi from "../../api/authApi";

const Register = (): JSX.Element => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const isAllFormFilled = Object.values(formValues).every(
    (value) => value.trim() !== ""
  );

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }, []);

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await authApi.register({
        username: formValues.username.trim(),
        password: formValues.password.trim(),
        confirmPassword: formValues.confirmPassword.trim(),
      });
      localStorage.setItem("token", res.token);
      navigate("/");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const errorMessages = error?.data.errors.map(
        (err: { msg: string }) => err.msg
      );
      setErrors(errorMessages);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="text-center">
        <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Register
        </h2>
      </div>
      {errors.length > 0 &&
        errors.map((err) => (
          <p key={err} className="bg-red-500 text-white w-full px-4 py-2">
            {err}
          </p>
        ))}
      <div className="p-2 w-full">
        <InputField
          label={"Username"}
          id={"username"}
          value={formValues.username}
          onChange={handleChange}
        />
      </div>
      <div className="p-2 w-full">
        <InputField
          label="Password"
          id="password"
          type="password"
          value={formValues.password}
          onChange={handleChange}
        />
      </div>
      <div className="p-2 w-full">
        <InputField
          label="Confirm Password"
          id="confirmPassword"
          type="password"
          value={formValues.confirmPassword}
          onChange={handleChange}
        />
      </div>
      <div className="p-2 mt-4 w-full">
        <SubmitButton
          text="Register"
          onClick={handleSubmit}
          isLoading={isLoading}
          isDisabled={!isAllFormFilled}
        />
      </div>
      <div className="text-right text-indigo-500 underline">
        <Link to="/login">Already have account?</Link>
      </div>
    </div>
  );
};

export default Register;
