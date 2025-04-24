import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/netflix-logo.png";
import Home from "../../pages/Home";

interface RegisterNavigationState {
  email: string;
}

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = (location.state as RegisterNavigationState)?.email || "";

  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleRegister = (event: React.FormEvent) => {
    event.preventDefault();

    if (!password || !confirmPassword) {
      setError("Password fields cannot be empty.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");

    
    navigate("/home");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-black">
      {/* Navbar with Logo & Sign In */}
      <div className="w-full flex justify-between items-center px-6 py-4 border-b border-gray-300 bg-white fixed top-0 left-0">
        <img src={logo} alt="Netflix Logo" className="w-36 h-auto" />
        <button
          onClick={() => navigate('/login')}
          className="text-black font-medium hover:text-underline"
        >
          Sign In
        </button>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-md mt-20 p-6">
        <h2 className="text-2xl font-semibold mb-2 text-black">
          Create a password to start your membership
        </h2>
        <p className="text-black max-w-md mb-6">
          Just a few more steps and you're done! <br /> We hate paperwork, too.
        </p>

        <form onSubmit={handleRegister} className="w-full">
          {/* Email Display Styled Like Example */}
          <div className="mb-4 text-left">
            <p className="text-sm text-gray-600">Email</p>
            <span className="text-md font-medium text-black">{email}</span>
          </div>

          {/* Password Field */}
          <div className="mb-4 relative">
            <input
              type="password"
              id="password"
              placeholder=" "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`peer w-full h-16 px-6 py-3 border-[1.5px] rounded bg-gray-100 text-black text-lg placeholder-transparent focus:outline-none leading-tight${
                password && confirmPassword
                  ? password === confirmPassword
                    ? 'border-green-500'
                    : 'border-red-500'
                  : 'border-gray-300'
              }`}
            />
            <label
              htmlFor="password"
              className="absolute left-6 top-4 text-black transition-all duration-300 ease-in-out peer-focus:top-2 peer-focus:left-4 peer-focus:text-gray peer-placeholder-shown:top-4 peer-placeholder-shown:left-6 peer-placeholder-shown:text-gray-500 text-sm"
            >
              Password
            </label>
          </div>

          {/* Confirm Password Field */}
          <div className="mb-4 relative">
            <input
              type="password"
              id="confirmPassword"
              placeholder=" "
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={`peer w-full h-16 px-6 py-4 border-[1.5px] rounded bg-gray-100 text-black text-lg placeholder-transparent focus:outline-none leading-tight${
                password && confirmPassword
                  ? password === confirmPassword
                    ? 'border-green-500'
                    : 'border-red-500'
                  : 'border-gray-300'
              }`}
            />
            <label
              htmlFor="confirmPassword"
              className="absolute left-6 top-4 text-black transition-all duration-300 ease-in-out peer-focus:top-2 peer-focus:left-4 peer-focus:text-gray peer-placeholder-shown:top-4 peer-placeholder-shown:left-6 peer-placeholder-shown:text-gray-500 text-sm"
            >
              Re-enter password
            </label>
          </div>

          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

          <button
            type="submit"
            className="w-full text-white font-medium bg-red-600 hover:bg-red-500 rounded px-4 py-2 transition mt-4"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
