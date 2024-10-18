import { useState } from "react";

export default function Admin() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(true);

  const login = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        setUser(await response.json());
      } else {
        setError(true);
      }
    } catch (e) {
      setError(true);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {loading && user === false && <p className="text-lg text-blue-500">Loading...</p>}
      {user ? (
        <div className="text-2xl font-bold text-green-600">Admin</div>
      ) : (
        <div className={`flex flex-col w-full max-w-sm p-8 border border-gray-300 rounded-lg shadow-lg bg-white ${loading ? 'hidden': ''}`}>
          <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">Login</h2>
          {error && <p className="mb-4 text-red-500">Invalid email or password.</p>}
          <form className="flex flex-col" onSubmit={login}>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500" required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500" required />
            <button type="submit" className="p-2 font-bold text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500"> Login </button>
          </form>
        </div>
      )}
    </div>
  );
}
