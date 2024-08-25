import { Link, Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function handleLoginSubmit(e) {
    e.preventDefault();
    try {
      const data = await axios.post("/api/auth/login", {
        email,
        password,
      });
      console.log(data);
      alert("Login successful!");
      setRedirect(true);
    } catch (error) {
      alert("Login failed. Please try again.");
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="mt-4 grow flex items-center justify-around p-20 ">
      <div className="p-20 bg-[#522985] rounded-[16px] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[8.7px]">
        <h1 className="text-4xl text-center mb-4 text-light">Login</h1>
        <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>
          <input
            type="email"
            placeholder="john@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="primary text-light mt-8">Login</button>
          <div className="text-center py-2 text-gray-400">
            Don't have an account yet?{" "}
            <Link to={"/register"} className="underline text-gray-300">
              Register now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

// export default function LoginPage() {
//     return (
//         <h1>LoginPage</h1>
//     );
// };
