import { type ButtonProps } from "@mui/material/Button";
import { BaseButton } from "./Button.styles";

type Variant = "default" | "secondary";

type Props = ButtonProps & {
  available?: boolean;
  option?: Variant;
};

const Button = ({ option, available = true, ...props }: Props) => {
  return <BaseButton option={option} disabled={!available} {...props} />;
};

export default Button;

// type PropsDivs = React.ComponentProps<"div"> & {
//   positionRight?: boolean;
// };
// const TwoDivs = ({ positionRight = false, children, ...props }: PropsDivs) => {
//   return (
//     <>
//       <div className={positionRight ? "left" : "right"} {...props}>{children}</div>
//       <div className={positionRight ? "right" : "left"} {...props}>{children}</div>

//     </>
//   );
// };
