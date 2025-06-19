"use client"
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
// import { toast } from '@/hooks/use-toast';
import { toast } from "sonner"
import { User, Mail, Lock} from 'lucide-react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { addLoginDetails } from '@/redux/reducerSlices/userSlice';


// Validation schema using Yup
const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Password must contain at least one uppercase letter, one lowercase letter, and one number')
    .required('Password is required'),
});

interface FormValues {
  email: string;
  password: string;
}

const Login = () => {

  const initialValues: FormValues = {
    email: '',
    password: '',
  };

  const router = useRouter();
  const dispatch = useDispatch();
  const handleSubmit = async (values: FormValues) => {
    const {data} = await axios.post('http://localhost:8080/login', values)
    if(data?.isLoggedIn) router.push('/');
    toast(data?.message);

    if(data){
      debugger;
      dispatch(addLoginDetails(data));
    }
  
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/20 to-background p-4">
      <Card className="w-full max-w-md shadow-2xl border-0 bg-card/95 backdrop-blur">
        <CardHeader className="text-center space-y-4 pb-8">
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Sign In Your Account
          </CardTitle>
          <CardDescription className="text-lg text-muted-foreground">
            Join our platform and start your learning journey
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, setFieldValue, isSubmitting, errors, touched }) => (
              <Form className="space-y-6">
                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    Email Address
                  </Label>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    className={`transition-all duration-200 ${errors.email && touched.email ? 'border-destructive' : 'focus:border-primary'}`}
                  />
                  <ErrorMessage name="email" component="div" className="text-sm text-destructive" />
                </div>

                {/* Password Fields */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium flex items-center gap-2">
                      <Lock className="h-4 w-4 text-primary" />
                      Password
                    </Label>
                    <Field
                      as={Input}
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                      className={`transition-all duration-200 ${errors.password && touched.password ? 'border-destructive' : 'focus:border-primary'}`}
                    />
                    <ErrorMessage name="password" component="div" className="text-sm text-destructive" />
                  </div>
                </div>
                
                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 text-base font-semibold bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? 'Signing Account...' : 'Sign in'}
                </Button>

                {/* Login Link */}
                <div className="text-center pt-4">
                  <p className="text-sm text-muted-foreground">
                    Don't have an account?{' '}
                    <Link href="/register" className="text-primary hover:underline font-medium">
                      Sign up here
                    </Link>
                  </p>
                </div>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;