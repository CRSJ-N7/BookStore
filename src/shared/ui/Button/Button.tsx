import { type ButtonProps } from "@mui/material/Button";
import { BaseButton } from "./Button.styles";

type Props = ButtonProps;

const Button = (props: Props) => {
  return <BaseButton {...props} />;
};

export default Button;
