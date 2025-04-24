// src/pages/auth/Register.tsx
import React from "react";
import { useLocation } from "react-router-dom";
interface RegisterNavigationState {
  email: string;
}
const Register = () => {
  const location = useLocation();
  const state = location.state as RegisterNavigationState;
  const email = location.state?.email || "";
  //navigate("/register", { state: { email } as RegisterNavigationState });
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-bold mb-6">Create Your Account</h2>
      <form className="w-full max-w-md bg-white p-6 rounded shadow">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email Address</label>
          <input
            type="email"
            value={email}
            readOnly
            className="w-full px-4 py-2 border rounded bg-gray-100"
          />
        </div>
        {/* Add your password and submit fields here */}
      </form>
    </div>
  );
};

export default Register;
