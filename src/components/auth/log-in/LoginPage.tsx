import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { api } from "../../../axios/axios";
import { setUser } from "../../../store/authSlice";
import { tokenStorage } from "../../../storage/tokenStorage";
import type { AxiosError } from "axios";
import { BaseParagraph } from "../../../shared/styles/styles";
import { SwitchAuth } from "../AuthPage.styles";

const SignUpPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required("Name is required").min(2, "Too short"),

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
        const loginResponse = await api.post("/users/auth/login", {
          email: values.email,
          password: values.password,
        });

        const { accessToken, refreshToken, user } = loginResponse.data;

        tokenStorage.setAccess(accessToken);
        tokenStorage.setRefresh(refreshToken);
        console.log(user);

        dispatch(setUser(user));

        navigate("/");
      } catch (error) {
        const err = error as AxiosError<{ message: string }>;
        console.log(err.response?.data?.message);
      }
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div style={{ fontSize: "55px" }}>SIGN UP</div>

        <input
          name="email"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <div>{formik.errors.email}</div>
        )}

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && (
          <div>{formik.errors.password}</div>
        )}

        <button type="submit">Register</button>
      </form>
      <BaseParagraph>
        Don't have an account?
        <SwitchAuth onClick={() => navigate("/auth/signup")}>
          Sign Up
        </SwitchAuth>
      </BaseParagraph>
      ;
    </>
  );
};

export default SignUpPage;
