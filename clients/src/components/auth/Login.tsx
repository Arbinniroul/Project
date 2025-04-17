import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../store/authSlice/index'; // Import login action
import { RootState } from '../../store/index'; 
import { useToast } from "@/hooks/use-toast";
// Import RootState

// Import toast for notifications

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isAuthenticated, user } = useSelector((state: RootState) => state.auth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user2 =sessionStorage.getItem('isAuthenticated');



  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = { email, password };
    
    // Dispatch login action
    const result = await dispatch(loginUser(formData)).unwrap(); // Unwraps the resolved promise
    if (data.success) {
      toast.success('Login Successful!');

      navigate('/home'); // Navigate to login page upon success
    } else {
      toast.error(response.message || 'Registration failed. Please try again.');
    }
  }
  useEffect(()=>{
    if(user2){
      navigate('/home');
    }
  },[user2])
  return (
<div className="flex items-center justify-center min-h-screen bg-white">
      <Card className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg text-4xl">
        <CardHeader>
          <CardTitle className="text-green-700 text-3xl">Welcome Back!</CardTitle>
          <CardDescription className="text-gray-600">Log in to explore ClimateGrow's features.</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleLogin}
            className="space-y-4"
          > 
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <Input
                type="email"
                id="email"
                placeholder="Enter your email"
                className='bg-gray-100 text-black outline-none border-none focus:outline-none' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
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
              {isLoading ? 'Log in': 'Logging in...' }
            </Button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Don’t have an account?{' '}
              <Button
                variant="link"
                className="text-green-600 hover:text-green-800"
                onClick={() => navigate('/auth/register')}
              >
                Create an account
              </Button>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
