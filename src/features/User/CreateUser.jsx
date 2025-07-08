import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateUser() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const handleStart = (e) => {
    e.preventDefault();
    if (userName) {
      navigate("/Menu");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <input
        className="mb-8 rounded-full text-stone-700 text-center px-8 py-4 border-gray-900"
        placeholder="Your full name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      {userName && (
        <button
          to="/Menu"
          className="uppercase bg-stone-700 text-white rounded-full px-4 py-3 text-sm mb-3"
          onClick={handleStart}
        >
          start ordering
        </button>
      )}
    </div>
  );
}
