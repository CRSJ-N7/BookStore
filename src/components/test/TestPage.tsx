import { useFormik } from "formik";
import * as Yup from "yup";
import { BaseButton } from "../../shared/ui/Button/Button.styles";

const values = {
  text: "",
  value: "",
};

export const TestPage = () => {
  const formik = useFormik({
    initialValues: values,

    validationSchema: Yup.object({
      text: Yup.string()
        .required("Привет ты ахуел")
        .min(6, "ты ахуел, дай хотя бы 6 символов"),
      value: Yup.number().required().min(0).max(5),
    }),

    onSubmit: () => {
      console.log("something");
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.text && formik.errors.text && (
          <div>{formik.errors.text || "placeholder"}</div>
        )}
        <input type="text" name="value" onChange={formik.handleChange} />
        {formik.touched.value && formik.errors.value && (
          <div>{formik.errors.value}</div>
        )}
        <BaseButton type="submit"></BaseButton>
      </form>
    </>
  );
};
