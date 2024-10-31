"use client";

import { createAuthCookie } from "@/actions/auth.action";
import { RegisterSchema } from "@/helpers/schemas";
import { RegisterFormType } from "@/helpers/types";
import { Button, Input } from "@nextui-org/react";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export const Register = () => {
  const router = useRouter();

  const initialValues: RegisterFormType = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    organisationName: "",
    industry: "",
    organisationSize: "",
    country: "",
    terms: false,
    address: "",
    phoneNumber: ""
  };

  const handleRegister = useCallback(
    async (values: RegisterFormType) => {
      // `values` contains name, email & password. You can use provider to register user
      await createAuthCookie();
      router.replace("/");
    },
    [router]
  );

  return (
    <>
      <div className='text-center text-[25px] font-bold mb-6'>Register</div>

      <Formik
        initialValues={initialValues}
        validationSchema={RegisterSchema}
        onSubmit={handleRegister}>
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <>
            <div className='grid grid-cols-2 gap-4 mb-4 w-full'>
              <Input
                variant='bordered'
                label='Full Name'
                value={values.fullName}
                isInvalid={!!errors.fullName && !!touched.fullName}
                errorMessage={errors.fullName}
                onChange={handleChange("fullName")}
              />
              <Input
                variant='bordered'
                label='Email'
                type='email'
                value={values.email}
                isInvalid={!!errors.email && !!touched.email}
                errorMessage={errors.email}
                onChange={handleChange("email")}
              />
              <Input
                variant='bordered'
                label='Password'
                type='password'
                value={values.password}
                isInvalid={!!errors.password && !!touched.password}
                errorMessage={errors.password}
                onChange={handleChange("password")}
              />
              <Input
                variant='bordered'
                label='Confirm Password'
                type='password'
                value={values.confirmPassword}
                isInvalid={!!errors.confirmPassword && !!touched.confirmPassword}
                errorMessage={errors.confirmPassword}
                onChange={handleChange("confirmPassword")}
              />
              <Input
                variant='bordered'
                label='Organisation Name'
                value={values.organisationName}
                isInvalid={!!errors.organisationName && !!touched.organisationName}
                errorMessage={errors.organisationName}
                onChange={handleChange("organisationName")}
              />
              <Input
                variant='bordered'
                label='Industry'
                value={values.industry}
                isInvalid={!!errors.industry && !!touched.industry}
                errorMessage={errors.industry}
                onChange={handleChange("industry")}
              />
              <Input
                variant='bordered'
                label='Organisation Size'
                value={values.organisationSize}
                isInvalid={!!errors.organisationSize && !!touched.organisationSize}
                errorMessage={errors.organisationSize}
                onChange={handleChange("organisationSize")}
              />
              <Input
                variant='bordered'
                label='Country'
                value={values.country}
                isInvalid={!!errors.country && !!touched.country}
                errorMessage={errors.country}
                onChange={handleChange("country")}
              />
            </div>

            <Button
              onPress={() => handleSubmit()}
              variant='solid'
              color='primary'
              size='lg'>
              Register
            </Button>
          </>
        )}
      </Formik>

      <div className='font-light text-slate-400 mt-4 text-sm'>
        Already have an account?{" "}
        <Link href='/login' className='font-bold'>
          Login here
        </Link>
      </div>
    </>
  );
};