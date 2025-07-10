import CreateUser from '../features/User/CreateUser';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const username = useSelector((state) => state.user.userName);
  const navigate = useNavigate();

  const handleStart = (e) => {
    e.preventDefault();
    navigate('/Menu');
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat px-4 py-32 text-center font-serif"
      style={{
        backgroundImage: "url('/images/bg-pizza.jpg')",
        backgroundColor: 'rgba(255,255,255,0.85)',
        backgroundBlendMode: 'lighten',
      }}
    >
      <h1 className="mb-24 text-5xl font-bold text-gray-900 drop-shadow-xl md:text-5xl">
        The best pizza .
      </h1>
      <h2 className="mb-16 text-3xl font-semibold text-gray-700">
        Straight out of the oven, straight to you.
      </h2>

      {username ? (
        <button
          type="button"
          className="mb-3 cursor-pointer rounded-full bg-orange-400 px-4 py-3 text-sm uppercase text-white hover:bg-orange-500"
          onClick={handleStart}
        >
          continue ordering, {username}
        </button>
      ) : (
        <CreateUser />
      )}
    </div>
  );
}
