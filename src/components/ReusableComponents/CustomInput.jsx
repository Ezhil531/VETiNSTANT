import { useState } from "react";
import styles from "./CustomInput.module.scss";
import eye from "../../assets/eye.svg";
import eyeoff from "../../assets/eye-off.svg";

const CustomInput = ({
  label,
  type = "text",
  placeholder,
  leftIcon,
  isPassword = false,
  value, // ✅ add this
  onChange, // ✅ add this
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.inputWrapper}>
      {label && (
        <label className={styles.label}>
          {label} <span>*</span>
        </label>
      )}

      <div className={styles.inputBox}>
        {leftIcon && (
          <img src={leftIcon} alt="icon" className={styles.leftIcon} />
        )}

        <input
          type={isPassword ? (showPassword ? "text" : "password") : type} // ✅ fix here also
          placeholder={placeholder}
          value={value} // ✅ bind value
          onChange={onChange} // ✅ bind change
        />

        {isPassword && (
          <img
            src={showPassword ? eyeoff : eye} // ✅ also corrected toggle logic
            alt="toggle"
            className={styles.rightIcon}
            onClick={() => setShowPassword(!showPassword)}
          />
        )}
      </div>
    </div>
  );
};

export default CustomInput;
