// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { setUser } from './userSlice';

export default function CreateUser() {
  // const [userName, setUserName] = useState('');
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleStart = (e) => {
    e.preventDefault();
    // if (userName) {
    //   dispatch(
    //     setUser({
    //       firstName: userName,
    //     }),
    //   );
    navigate('/RegisterUser');
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="mb-16 text-lg font-medium text-gray-800">
        👋 Welcome! Please start by registering
      </p>
      {/* <input
        className="mb-8 rounded-full border-gray-900 px-8 py-4 text-center text-stone-700"
        placeholder="Your full name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleStart(e);
          }
        }}
      /> */}

      <button
        type="button"
        onClick={handleStart}
        className="mr-4 min-w-[120px] rounded-full bg-orange-400 px-4 py-3 text-center text-sm uppercase text-white hover:bg-orange-500"
      >
        start register
      </button>
    </div>
  );
}
