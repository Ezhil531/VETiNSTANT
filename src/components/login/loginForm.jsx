import email from "../../assets/mail.svg";
import styles from "./loginForm.module.scss";
import CustomInput from "../ReusableComponents/CustomInput";
import loginImage from "../../assets/login2.png";
import { useState } from "react";

const LoginForm = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  // handle input change
  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  // validation
  const validate = () => {
    let newErrors = {};

    if (!form.username.trim()) {
      newErrors.username = "Username is required";
    }

    if (!form.password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // submit
  const handleSubmit = () => {
    if (validate()) {
      console.log("Form Submitted", form);
      // 👉 call API here
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img src={loginImage} height={160} width={300} />
      </div>

      <h1>Welcome Back</h1>
      <CustomInput
        label="Username"
        placeholder="Username"
        leftIcon={email}
        value={form.username}
        onChange={(e) => handleChange("username", e.target.value)}
      />
      {errors.username && <p className={styles.error}>{errors.username}</p>}

      <CustomInput
        label="Password"
        placeholder="Password"
        isPassword={true}
        value={form.password}
        onChange={(e) => handleChange("password", e.target.value)}
      />
      {errors.password && <p className={styles.error}>{errors.password}</p>}
      <button className={styles.loginBtn} onClick={handleSubmit}>
        Login
      </button>
      <a href="#">Forgot Password ?</a>
    </div>
  );
};

export default LoginForm;
