import { useState } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../config/firebaseConfig";

// Component
import AdminBooking from "../components/Admin/Booking";
import AdminDashboard from "../components/Admin/Dashboard";
import AdminDoctor from "../components/Admin/Doctor";
import AdminContact from "../components/Admin/messages";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(false);
  const [errorMessages, setErrorMessages] = useState("");
  const [activeTab, setActiveTab] = useState("dashboard");
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setUser(true);
    } catch (e) {
      setError(true);
      setErrorMessages(e.message);
    }
    setLoading(false);
  };

  const logout = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setUser(false);
      navigate('/');
    } catch (e) {
      setError(true);
      setErrorMessages(e.message);
    } finally {
      setEmail("");
      setPassword("");
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      {loading && user === false && <p className="text-lg text-blue-500">Loading...</p>}
      {user ? (
        <div className="w-full">
          {error && <p className="mb-4 text-red-500">{errorMessages}</p>}
          <h1 className="text-2xl font-bold p-4 text-center">Admin Dashboard</h1>
          <div className="flex w-full flex-col">
            <div className="flex gap-2 w-full items-center justify-around">
              <div>
                <button onClick={() => setActiveTab("dashboard")} className={`p-2 sm:px-4 text-center hover:bg-green-700 hover:text-xl hover:rounded-xl ${activeTab === "dashboard" ? 'bg-green-600 font-bold text-xl rounded-xl underline' : 'text-white'}`}>Dashboard</button>
                <button onClick={() => setActiveTab("doctors") }  className={`p-2 sm:px-4 text-center hover:bg-green-700 hover:text-xl hover:rounded-xl ${activeTab === "doctors" ? 'bg-green-600 font-bold text-xl rounded-xl underline' : 'text-white'}`}>Doctors</button>
                <button onClick={() => setActiveTab("patients") } className={`p-2 sm:px-4 text-center hover:bg-green-700 hover:text-xl hover:rounded-xl ${activeTab === "patients" ? 'bg-green-600 font-bold text-xl rounded-xl underline' : 'text-white'}`}>Bookings</button>
                <button onClick={() => setActiveTab("messages") } className={`p-2 sm:px-4 text-center hover:bg-green-700 hover:text-xl hover:rounded-xl ${activeTab === "messages" ? 'bg-green-600 font-bold text-xl rounded-xl underline' : 'text-white'}`}>Messages</button>
              </div>
              <button onClick={logout} className="rounded-xl p-2 sm:px-4 font-bold text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-500">Logout</button>
            </div>
            <div className="w-full h-full">
              {activeTab === "dashboard" && <AdminDashboard /> }
              {activeTab === "doctors" && <AdminDoctor /> }
              {activeTab === "patients" && <AdminBooking /> }
              {activeTab === "messages" && <AdminContact /> }

            </div>
          </div>
        </div>
      ) : (
        <div style={{ minHeight: 'calc(100vh - 192px)' }} className="flex items-center justify-center w-full h-full">
          <div className={`flex flex-col w-full max-w-sm p-8 border border-gray-300 rounded-lg shadow-lg bg-white ${loading ? 'hidden': ''}`}>
            <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">Login</h2>
            {error && <p className="mb-4 text-red-500">{errorMessages}</p>}
            <form className="flex flex-col" onSubmit={login}>
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500" required />
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500" required />
              <button type="submit" className="p-2 font-bold text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500"> Login </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
