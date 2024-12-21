import { useCallback, useState } from "react";
import InputField from "../../components/common/InputField";
import { Link } from "react-router-dom";
import SubmitButton from "../../components/common/SubmitButton";
import authApi from "../../api/authApi";

const Register = (): JSX.Element => {
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
      console.log("OK!!");
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  return (
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="text-center">
        <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Register
        </h2>
      </div>
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
        />
      </div>
      <div className="text-right text-indigo-500 underline">
        <Link to="/login">Already have account?</Link>
      </div>
    </div>
  );
};

export default Register;
