import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { setUser } from "../../../store/authSlice";
import { tokenStorage } from "../../../storage/tokenStorage";
import type { AxiosError } from "axios";
import {
  BaseHeader,
  BaseInputToolTip,
  BaseParagraph,
  FormWrapper,
  InputWrapper,
} from "../../../shared/styles/styles";
import { LoginAdornment, SwitchAuth } from "../AuthPage.styles";
import { StyledInput } from "../../../shared/styles/styles";
import mailIcon from "../../../assets/icons/mail.svg";
import hideIcon from "../../../assets/icons/hide.svg";
import { BaseButton } from "../../../shared/ui/Button/Button.styles";
import authApi from "../../../api/authApi";
import { toast } from "react-toastify";
import cartApi from "../../../api/cartApi";
import { setCart } from "../../../store/cartSlice";
import { ButtonWrapper } from "../../../shared/ui/Info/InfoContainer.styles";

const SignUpPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email is required"),

      password: Yup.string()
        .min(6, "Minimum 6 characters")
        .required("Password is required"),
    }),

    onSubmit: async (values) => {
      try {
        const data = await authApi.logIn({
          email: values.email,
          password: values.password,
        });

        const { accessToken, refreshToken, safeUser } = data;

        tokenStorage.setAccess(accessToken);
        tokenStorage.setRefresh(refreshToken);

        dispatch(setUser(safeUser));

        const userCart = await cartApi.getCart();
        dispatch(setCart(userCart));

        toast.success("Login succesfull!");

        navigate("/");
      } catch (error) {
        const err = error as AxiosError<{ message: string }>;
        toast.error(`${err.response?.data?.message}`);
      }
    },
  });

  return (
    <>
      <BaseHeader>Log in</BaseHeader>
      <FormWrapper onSubmit={formik.handleSubmit}>
        <InputWrapper>
          <LoginAdornment>
            <img src={mailIcon} alt="email" />
          </LoginAdornment>
          <StyledInput
            variant="auth"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div>{formik.errors.email}</div>
          )}
          <BaseInputToolTip>Enter your email</BaseInputToolTip>
        </InputWrapper>

        <InputWrapper>
          <LoginAdornment>
            <img src={hideIcon} alt="email" />
          </LoginAdornment>
          <StyledInput
            variant="auth"
            name="password"
            type="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <div>{formik.errors.password}</div>
          )}
          <BaseInputToolTip>Enter your password</BaseInputToolTip>
        </InputWrapper>
        <ButtonWrapper>
          <BaseButton type="submit">Log in</BaseButton>
        </ButtonWrapper>
      </FormWrapper>
      <BaseParagraph>
        Don't have an account?
        <SwitchAuth onClick={() => navigate("/auth/signup")}>
          Sign Up
        </SwitchAuth>
      </BaseParagraph>
    </>
  );
};

export default SignUpPage;
