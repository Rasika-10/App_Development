import * as Yup from 'yup'

export const SignUpSchema = Yup.object({
    name: Yup.string().required(" Name is required"),
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().min(8).max(12).required("Password is required"),
    mobno: Yup.string().matches(/^[0-9]{10}$/, "phone number is not valid").required("please enter the mobile number"),
    dep: Yup.string().required("Department is required"),
    gender: Yup.string().required("Gender is required"),
    regno: Yup.string().required("Register Number is required"),
    dob: Yup.string().required("Date of Birth is required")
})