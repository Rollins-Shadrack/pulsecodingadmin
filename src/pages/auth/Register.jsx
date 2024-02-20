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
    <div className="pt-10 main-container ">
      <div className="flex flex-col items-center justify-center">
        <img src={logo} alt="pulsecoding" className="w-48 h-24" />
        <p className="text-base font-medium">Sign up into your account</p>
      </div>
      <Container className="py-10">
        <div className="lg:w-4/5 mx-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
              <Button type="submit" className="bg-black text-white uppercase  hover:bg-black hover:text-white md:px-14">
                Register
              </Button>
            </form>
          </Form>
        </div>
      </Container>
    </div>
  );
}

export default Register