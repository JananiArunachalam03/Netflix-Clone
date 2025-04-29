import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 
import NFlogo from "../../../assets/netflix-logo.png"; 
import bgImg from "../../../assets/hero.png"; 


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    setError("");
    console.log("Logging in...", { email, password });

    navigate("/home"); 
  };

  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImg})`, filter: "brightness(50%)" }} 
      ></div>

      {/* Netflix Logo*/}
      <img src={NFlogo} alt="Netflix Logo" className="absolute top-10 left-12 w-44 h-auto z-10" />

      {/*Login Card */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
      <div className="w-full max-w-md p-15 bg-black bg-opacity-80 rounded text-white">
          <h2 className="text-3xl font-bold mb-6">Sign In</h2>

          <form onSubmit={handleSubmit} className="w-full">
            {/* Email Field */}
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email or mobile number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-16 px-4 bg-black text-white rounded border-2 border-gray-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Password Field*/}
            <div className="mb-4 relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-16 px-4 bg-black text-white rounded border-2 border-gray-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-5 text-gray-400 hover:text-white transition"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* Error Messages */}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* Sign-In Button */}
            <button
              type="submit"
              className="w-full h-12 bg-red-600 hover:bg-red-500 text-white font-bold rounded transition mb-3"
            >
              Sign In
            </button>
           
            <div className="flex items-center justify-center mb-3">
              <span className="text-gray-400 font-semibold text-sm">OR</span>
            </div>

            {/*Sign-in code Button */}
            <button
              className="w-full h-10 bg-transparent text-white font-bold rounded border border-gray-500 transition hover:bg-opacity-30 mt-1"
            >
            Use a sign-in code
            </button>


            {/* Remember Me Checkbox */}
            <div className="flex items-center mt-3">
              <input
              type="checkbox"
              className="w-4 h-4 accent-white border-gray-400 rounded focus:ring-2 focus:ring-gray-500"
              defaultChecked
            />
            <span className="text-lg text-white ml-2">Remember me</span>
            </div>

          </form>

          {/* Sign-Up*/}
          <p className="text-lg text-gray-400 mt-3">
            New to Netflix?{" "}
            <button
              onClick={() => navigate("/signup")}
              className="text-white font-bold hover:underline"
            >
              Sign up now
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
