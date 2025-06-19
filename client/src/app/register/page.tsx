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


// Validation schema using Yup
const validationSchema = Yup.object({
  fullName: Yup.string()
    .min(2, 'Full name must be at least 2 characters')
    .max(50, 'Full name must be less than 50 characters')
    .required('Full name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Password must contain at least one uppercase letter, one lowercase letter, and one number')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Please confirm your password'),
  role: Yup.string()
    .oneOf(['student', 'teacher'], 'Please select a valid role')
    .required('Role is required')
});

interface FormValues {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
}

const Register = () => {

  const initialValues: FormValues = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: ''
  };

  const handleSubmit = async (values: FormValues) => {
    // console.log('Registration data:', values);
    // toast({
    //   title: "Registration Successful!",
    //   description: `Welcome ${values.fullName}! Your account has been created.`,
    // });
    // toast("Registration Successful!");
    const {data} = await axios.post('http://localhost:8080/register', values)
    toast(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/20 to-background p-4">
      <Card className="w-full max-w-md shadow-2xl border-0 bg-card/95 backdrop-blur">
        <CardHeader className="text-center space-y-4 pb-8">
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Create Your Account
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
                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-sm font-medium flex items-center gap-2">
                    <User className="h-4 w-4 text-primary" />
                    Full Name
                  </Label>
                  <Field
                    as={Input}
                    id="fullName"
                    name="fullName"
                    placeholder="Enter your full name"
                    className={`transition-all duration-200 ${errors.fullName && touched.fullName ? 'border-destructive' : 'focus:border-primary'}`}
                  />
                  <ErrorMessage name="fullName" component="div" className="text-sm text-destructive" />
                </div>

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
                      placeholder="Create password"
                      className={`transition-all duration-200 ${errors.password && touched.password ? 'border-destructive' : 'focus:border-primary'}`}
                    />
                    <ErrorMessage name="password" component="div" className="text-sm text-destructive" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-sm font-medium flex items-center gap-2">
                      <Lock className="h-4 w-4 text-primary" />
                      Confirm Password
                    </Label>
                    <Field
                      as={Input}
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      placeholder="Confirm password"
                      className={`transition-all duration-200 ${errors.confirmPassword && touched.confirmPassword ? 'border-destructive' : 'focus:border-primary'}`}
                    />
                    <ErrorMessage name="confirmPassword" component="div" className="text-sm text-destructive" />
                  </div>
                </div>

                {/* Role Selection */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium">Select Your Role</Label>
                  <Field name="role">
                    {({ field }: any) => (
                      <RadioGroup
                        value={field.value}
                        onValueChange={(value) => setFieldValue('role', value)}
                        className="flex gap-6"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="student" id="student" />
                          <Label htmlFor="student" className="cursor-pointer">Student</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="teacher" id="teacher" />
                          <Label htmlFor="teacher" className="cursor-pointer">Teacher</Label>
                        </div>
                      </RadioGroup>
                    )}
                  </Field>
                  <ErrorMessage name="role" component="div" className="text-sm text-destructive" />
                </div>
                
                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 text-base font-semibold bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? 'Creating Account...' : 'Create Account'}
                </Button>

                {/* Login Link */}
                <div className="text-center pt-4">
                  <p className="text-sm text-muted-foreground">
                    Already have an account?{' '}
                    <Link href="/login" className="text-primary hover:underline font-medium">
                      Sign in here
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

export default Register;