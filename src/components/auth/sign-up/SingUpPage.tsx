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
  StyledAdornment,
} from "../../../shared/styles/styles";
import { SwitchAuth } from "../AuthPage.styles";
import { StyledInput } from "../../../shared/styles/styles";
import mailIcon from "../../../assets/icons/mail.svg";
import hideIcon from "../../../assets/icons/hide.svg";
import authApi from "../../../api/authApi";
import { BaseButton } from "../../../shared/ui/Button/Button.styles";

const SignUpPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email is required"),

      password: Yup.string()
        .min(6, "Minimum 6 characters")
        .required("Password is required"),

      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirm your password"),
    }),

    onSubmit: async (values) => {
      try {
        await authApi.signIn({
          email: values.email,
          password: values.password,
        });

        const data = await authApi.logIn({
          email: values.email,
          password: values.password,
        });

        const { accessToken, refreshToken, safeUser } = data;

        tokenStorage.setAccess(accessToken);
        tokenStorage.setRefresh(refreshToken);

        dispatch(setUser(safeUser));

        navigate("/");
      } catch (error) {
        const err = error as AxiosError<{ message: string }>;
        console.log(err.response?.data?.message);
      }
    },
  });

  // const hasError = formik.touched.password && Boolean(formik.errors.password);

  return (
    <>
      <BaseHeader>Sign Up</BaseHeader>
      <FormWrapper onSubmit={formik.handleSubmit}>
        <InputWrapper>
          <StyledAdornment>
            <img src={mailIcon} alt="email" />
          </StyledAdornment>
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
          <StyledAdornment>
            <img src={hideIcon} alt="email" />
          </StyledAdornment>
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
        <InputWrapper>
          <StyledAdornment>
            <img src={hideIcon} alt="email" />
          </StyledAdornment>
          <StyledInput
            variant="auth"
            name="confirmPassword"
            type="password"
            placeholder="Repeat password"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <div>{formik.errors.confirmPassword}</div>
          )}
          <BaseInputToolTip>
            Repeat your password without errors
          </BaseInputToolTip>
        </InputWrapper>

        <BaseButton type="submit">Register</BaseButton>
      </FormWrapper>
      <BaseParagraph>
        Already have an account?
        <SwitchAuth onClick={() => navigate("/auth/login")}>Log In</SwitchAuth>
      </BaseParagraph>
      ;
    </>
  );
};

export default SignUpPage;
