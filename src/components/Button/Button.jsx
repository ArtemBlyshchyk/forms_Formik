import clsx from "clsx";
import css from "./Button.module.css";

const Button = ({ variant, children, type = "button", onClickDelete }) => {
  return (
    <button
      type={type}
      onClick={onClickDelete}
      className={clsx(css.button, css[variant])}
    >
      {children}
    </button>
  );
};

export default Button;
