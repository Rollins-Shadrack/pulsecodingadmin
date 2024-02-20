import * as Yup from 'yup';

export const registerFormSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid Email Address").required("Email is required"),
  mobileNumber: Yup.string().required("Mobile Number is required").min(8, "Mobile Number is too short").max(15, "Mobile Number is too long"),
  password: Yup.string()
    .min(8, "Password must be atleast 8 characters long!")
    .matches(/(?=.*[0-9])/, "Password must contain atleast one number!")
    .matches(/(?=.*[A-Z])/, "Password must contain atleast one uppercase letter!")
    .matches(/(?=.*[a-z])/, "Password must contain atleast one lowercase!")
    .matches(/(?=.*[!@#$%^&*])/, "Password must contain at least one special character!")
    .required("Password is required!"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match!")
    .required("Confirm Password is required!"),
  companyName: Yup.string().required("Company Name is required"),
  capVal: Yup.string().required("This field is required"),
});