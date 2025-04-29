import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../../../assets/netflix-logo.png";

interface RegisterNavigationState {
  email: string;
}

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = (location.state as RegisterNavigationState)?.email || "";

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const isValidPassword = (password: string) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/;
    return regex.test(password);
  };

  const handleRegister = (event: React.FormEvent) => {
    event.preventDefault();

    if (!username.trim()) {
      setError("Username is required.");
      return;
    }
    if (!password || !confirmPassword) {
      setError("Password fields cannot be empty.");
      return;
    }
    if (!isValidPassword(password)) {
      setError("Password must be 6-20 characters and include uppercase, lowercase, number, and special character.");
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
          className="text-black font-medium hover:underline"
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
          {/* Email Display */}
          <div className="mb-4">
            <p className="text-sm text-gray-600">Email</p>
            <span className="text-md font-medium text-black">{email}</span>
          </div>
          {/* Username Field */}
          <div className="mb-4">
            <p className="text-sm text-gray-600">Username</p>
            <input
              type="text"
              placeholder="Enter your name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full h-12 px-4 bg-gray-100 text-black rounded border border-gray-300 focus:outline-none focus:border-gray-500"
            />
          </div>

          

          {/* Password Field */}
          <div className="mb-4">
            <p className="text-sm text-gray-600">Password</p>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full h-12 px-4 bg-gray-100 text-black rounded border-2 ${
                password && confirmPassword
                  ? password === confirmPassword
                    ? "border-green-500"
                    : "border-red-500"
                  : "border-gray-400"
              } focus:outline-none focus:border-gray-500`}
            />
          </div>

          {/* Confirm Password Field */}
          <div className="mb-4">
            <p className="text-sm text-gray-600">Re-enter password</p>
            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={`w-full h-12 px-4 bg-gray-100 text-black rounded border-2 ${
                password && confirmPassword
                  ? password === confirmPassword
                    ? "border-green-500"
                    : "border-red-500"
                  : "border-gray-400"
              } focus:outline-none focus:border-gray-500`}
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full text-white font-medium bg-red-600 hover:bg-red-500 rounded px-4 py-2 transition mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
