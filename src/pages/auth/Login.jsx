import React from "react";
import logo from "@/assets/logo.png";
import Container from "@/components/Container";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import ReCAPTCHA from "react-google-recaptcha";
import { recaptchaSiteKey } from "@/constants/globalConstants";
import { loginSchema } from "@/lib/validations/login";
import { Link } from "react-router-dom";
import loginImage from '@/assets/login.jpg'
import { LockKeyhole, Mail } from "lucide-react";

const Login = () => {
  const form = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      capVal: "",
    },
    mode: "onSubmit",
  });

  async function onSubmit(values) {
    console.log(values);
  }
  return (
    <div className="pt-10 main-container">
      <Container className="py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="md:col-span-2 w-full">
            <img src={loginImage} alt="pulsecoding.com" className=" mx-auto object-cover" />
          </div>
          <div className="">
            <div className="flex flex-col items-center justify-center">
              <img src={logo} alt="pulsecoding" className="w-40 h-20" />
              <p className="text-base font-medium">Login into your account</p>
            </div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="relative">
                      <FormLabel>Email Id:</FormLabel>
                      <FormControl>
                        <Input className="bg-gray-200" placeholder="info@xyz.com" {...field} />
                      </FormControl>
                      <div className="absolute top-6 right-0 bg-brandPrimary p-2.5 rounded-lg">
                        <Mail className="text-white h-5 w-5" />
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="relative">
                      <FormLabel>Password:</FormLabel>
                      <FormControl className="relative">
                        <Input className="bg-gray-200" placeholder="***********" {...field} />
                      </FormControl>
                      <div className="absolute top-6 right-0 bg-brandPrimary p-2.5 rounded-lg">
                        <LockKeyhole className="text-white h-5 w-5" />
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Link to="" className="flex justify-end text-brandPrimary text-base underline">
                  Forgot Password?
                </Link>

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
                <Button type="submit" className="bg-black text-white uppercase  hover:bg-black hover:text-white w-full">
                  Login
                </Button>
              </form>
            </Form>
            <div className="border my-10 relative">
              <div className="flex items-center justify-center absolute inset-0">
                <div className="h-10 w-10 flex items-center justify-center bg-white rounded-full shadow-lg font-semibold">OR</div>
              </div>
            </div>
            <Link to="/register">
              <Button variant="outline" className=" w-full text-brandPrimary border-2 font-bold tracking-wider">
                Signup now
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
