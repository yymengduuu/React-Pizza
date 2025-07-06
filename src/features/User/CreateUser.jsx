import { useState } from "react";

export default function CreateUser() {
  const [userName, setUserName] = useState("");
  const handleStart = (e) => {
    e.preventDefault();
    if (userName) {
      setUserName(...userName);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <input
        className="mb-8 rounded-full text-stone-700 text-center px-8 py-4 border-gray-900"
        placeholder="Your full name"
        onChange={(e) => setUserName(e.target.value)}
      />
      {userName && (
        <button
          className="uppercase bg-stone-700 text-white rounded-full px-4 py-3 text-sm mb-3"
          onClick={handleStart}
        >
          start ordering
        </button>
      )}
    </div>
  );
}
