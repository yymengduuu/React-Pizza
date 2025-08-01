import CreateUser from '../features/User/CreateUser';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import bgPizza from '../assets/bg-pizza.jpg';

export default function Home() {
  const username = useSelector((state) => state.user.first_name);
  const navigate = useNavigate();

  const handleStart = (e) => {
    e.preventDefault();
    navigate('/Menu');
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat px-4 py-32 text-center font-serif"
      style={{
        backgroundImage: `url(${bgPizza})`,
        backgroundColor: 'rgba(255,255,255,0.85)',
        backgroundBlendMode: 'lighten',
      }}
    >
      <h1 className="mb-24 text-5xl font-bold text-gray-900 md:text-5xl">
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
      <footer className="text-m mt-16 text-gray-600">
        We promise to deliver your pizza within 30 minutes. Priority orders are
        delivered in just 20 minutes!
      </footer>
    </div>
  );
}
