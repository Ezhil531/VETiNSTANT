import styles from "./login.module.scss";
import loginImage from "../../assets/login.png";
import LoginForm from "./loginForm";

const Login = () => {
  return (
    <div className={styles.container}>
      <LoginForm />
      <div className={styles.alignCenter}>
        <img src={loginImage} className={styles.loginImage} />
      </div>
    </div>
  );
};

export default Login;
