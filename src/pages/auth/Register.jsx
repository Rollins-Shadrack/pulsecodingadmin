import React from 'react'
import logo from '@/assets/logo.png'
import Container from '@/components/Container'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import { registerFormSchema } from '@/lib/validations/register'
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import ReCAPTCHA from "react-google-recaptcha";
import { recaptchaSiteKey } from '@/constants/globalConstants';
import loginImage2 from "@/assets/bg.png";
import { Link } from 'react-router-dom';

const Register = () => {
  const form = useForm({
    resolver: yupResolver(registerFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      password: "",
      confirmPassword: "",
      companyName: "",
      capVal:""
    },
    mode:"onSubmit"
  })

  async function onSubmit(values) {
    console.log(values)
  }
  return (
      <section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <Container className="flex items-center justify-center px-4 py-3 bg-white sm:px-6 overflow-y-auto">
            <div className="2xl:w-full 2xl:max-w-3xl 4xl:max-w-md 2xl:mx-auto">
              <div className=" mb-3  w-full">
                <Link to="/">
                  <img src={logo} alt="pulsecoding" className="w-40 h-20" />
                </Link>
                <p className="text-2xl font-bold leading-tight text-black mt-3">Sign up into your account</p>
                <p className="text-base text-gray-700">
                  Already have an account ?{" "}
                  <Link
                    to="/"
                    className="font-medium text-brandPrimary transition-all duration-200 hover:text-brandPrimary focus:text-brandPrimary hover:underline">
                    Sign in
                  </Link>
                </p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 w-full mt-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name:</FormLabel>
                          <FormControl>
                            <Input className="bg-gray-200" placeholder="Enter your First Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name:</FormLabel>
                          <FormControl>
                            <Input className="bg-gray-200" placeholder="Enter your Last Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Id:</FormLabel>
                          <FormControl>
                            <Input className="bg-gray-200" placeholder="info@xyz.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="mobileNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name:</FormLabel>
                          <FormControl>
                            <Input className="bg-gray-200" placeholder="+91 - 123456789" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password:</FormLabel>
                          <FormControl>
                            <Input className="bg-gray-200" placeholder="***********" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Confirm Password:</FormLabel>
                          <FormControl>
                            <Input className="bg-gray-200" placeholder="***********" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="companyName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name:</FormLabel>
                          <FormControl>
                            <Input className="bg-gray-200" placeholder="Enter Company Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="capVal"
                      render={({ field }) => (
                        <FormItem>
                          <ReCAPTCHA {...field} sitekey={recaptchaSiteKey} size="normal" />
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="inline-flex items-center justify-center  px-10 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md hover:bg-brandPrimary bg-brandPrimary focus:outline-none hover:opacity-80 focus:opacity-80 ">
                    Register
                  </Button>
                </form>
              </Form>
            </div>
          </Container>

          <div
            className={`relative flex items-end px-4 pb-10 pt-60 sm:pb-16 md:justify-center lg:pb-24 bg-cover bg-center sm:px-6 lg:h-screen lg:px-8 `}
            style={{ backgroundImage: `url(${loginImage2})` }}>
            <div className="absolute inset-0 bg-gradient-to-t from-brandPrimary to-transparent"></div>
          </div>
        </div>
      </section>
  );
}

export default Register