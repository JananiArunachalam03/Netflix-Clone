import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

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
  const [success, setSuccess] = useState<boolean>(false);

  
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
    setSuccess(true);

    // Redirect to home after 10 seconds
    setTimeout(() => {
      navigate("/");
    }, 10000);
  };

  return (
    
    <div className="flex flex-col items-center justify-center pl-6 pr-6 h-screen bg-white text-red">
      <h2 className="text-2xl font-semibold mb-2 text-black pl-4">Create a password to start your membership</h2>
      <p className="text-black pl-6 max-w-md mb-6">
        Just a few more steps and you're done! <br /> We hate paperwork, too.
      </p>

      <form onSubmit={handleRegister} className="w-full max-w-md bg-white ">
        <div className="mb-4">
          <label className="block text-black mb-2">Email</label>
          <p className="font-medium text-black px-4 py-3">{email}</p>
        </div>

        <div className="mb-4 relative">
          <input
            type="password"
            id="password"
            placeholder=" "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="peer w-full px-4 py-3 border-none rounded bg-gray-100 text-black placeholder-transparent focus:outline-none"
          />
          <label
            htmlFor="password"
            className="absolute left-4 top-3 text-black transition-all duration-300 ease-in-out hover:top-1 hover:left-2 hover:text-gray peer-placeholder-shown:top-3 peer-placeholder-shown:left-4 peer-placeholder-shown:text-gray-500 text-sm"
          >
            Password
          </label>
        </div>

        <div className="mb-4 relative">
          <input
            type="password"
            id="confirmPassword"
            placeholder=" "
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="peer w-full px-4 py-3 border-none rounded bg-gray-100 text-black placeholder-transparent focus:outline-none"
          />
          <label
            htmlFor="confirmPassword"
            className="absolute left-4 top-3 text-black transition-all duration-300 ease-in-out hover:top-1 hover:left-2 hover:text-gray peer-placeholder-shown:top-3 peer-placeholder-shown:left-4 peer-placeholder-shown:text-gray-500 text-sm"
          >
            Re-enter password
          </label>
        </div>

        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

        {success && <p className="text-green-500 text-sm mt-1 font-semibold">You're good to go! Redirecting to home...</p>}

        <button type="submit" className="w-full font-bold bg-red-600 hover:bg-red-500 rounded px-6 py-3 transition mt-4">
          Next
        </button>
      </form>
    </div>
    
  );
};

export default Register;
