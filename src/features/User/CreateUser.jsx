import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateName } from './userSlice';

export default function CreateUser() {
  const [userName, setUserName] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleStart = (e) => {
    e.preventDefault();

    if (userName) {
      dispatch(updateName(userName));
      navigate('/Menu');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="mb-16 text-lg font-medium text-gray-800">
        👋 Welcome! Please start by telling us your name:
      </p>
      <input
        className="mb-8 rounded-full border-gray-900 px-8 py-4 text-center text-stone-700"
        placeholder="Your full name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleStart(e);
          }
        }}
      />
      {userName && (
        <button
          type="button"
          className="mb-3 cursor-pointer rounded-full bg-stone-700 px-4 py-3 text-sm uppercase text-white hover:bg-stone-500"
          onClick={handleStart}
        >
          start ordering
        </button>
      )}
    </div>
  );
}
