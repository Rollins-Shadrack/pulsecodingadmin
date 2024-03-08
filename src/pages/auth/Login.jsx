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
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LockKeyhole, Mail } from "lucide-react";
import loginImage2 from '@/assets/bg.png'

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
 const from = location.state?.from || { pathname: "/dashboard" };
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
    navigate(from, { replace: true });
  }
  return (
    <>
      

      <section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <Container className="flex items-center justify-center px-4 py-3 bg-white sm:px-6 overflow-y-auto">
            <div className="2xl:w-full 2xl:max-w-xl 4xl:max-w-md 2xl:mx-auto ">
              <div className=" mb-10 w-full">
                <Link to="/">
                  <img src={logo} alt="pulsecoding" className="w-40 h-20" />
                </Link>
                <p className="text-2xl font-bold leading-tight text-black mt-6">Login into your account</p>
                <p class="mt-3 text-base text-gray-700">
                  Don't have an account ?{" "}
                  <Link
                    to="/register"
                    className="font-medium text-brandPrimary transition-all duration-200 hover:text-brandPrimary focus:text-brandPrimary hover:underline">
                    Sign up
                  </Link>
                </p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 ">
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
                  <Button
                    type="submit"
                    className="inline-flex items-center justify-center  px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-gradient-to-r from-brandPrimary to-purple-400 focus:outline-none hover:opacity-80 focus:opacity-80 w-full">
                    Login
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
    </>
  );
};

export default Login;
