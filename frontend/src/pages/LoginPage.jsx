// src/pages/LoginPage.js
import React from 'react';
import LoginForm from '../components/auth/LoginForm'; // Create this component next

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-900">
          Log in to your account
        </h2>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;