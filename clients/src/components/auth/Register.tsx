import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from "@/hooks/use-toast";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';


import { registerUser } from '../../store/authSlice/index'; // Import registerUser action
import { RootState } from '@/store'; // Import RootState for type checking


export default function Register() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    const formData = { name, email, password };

    try {
      const response = await dispatch(registerUser(formData)).unwrap(); // Unwraps the resolved promise
      if (response.success) {
      
        navigate('/auth/login'); // Navigate to login page upon success
      } else {
        console.log("Please try again")
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br bg-white">
      <Card className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        <CardHeader>
          <CardTitle className="text-green-700 text-3xl">Create an Account</CardTitle>
          <CardDescription className="text-gray-600">
            Join ClimateGrow and explore a greener future!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleRegister();
            }}
            className="space-y-4"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <Input
                type="text"
                id="name"
                className='bg-gray-100 text-black outline-none focus:outline-none border-none'
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <Input
                type="email"
                id="email"
                className='bg-gray-100 text-black outline-none focus:outline-none border-none'
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <Input
                type="password"
                id="password"
                placeholder="Enter your password"
                className='bg-gray-100 text-black outline-none focus:outline-none border-none'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Button
              type="submit"
              variant="default"
              className="w-full bg-green-600 hover:bg-green-700 text-white"
              
            >
              Register
            </Button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Button
                variant="link"
                className="text-green-600 hover:text-green-800"
                onClick={() => navigate('/auth/login')}
              >
                Log in
              </Button>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
