import CreateUser from '../features/User/CreateUser';
import { useSelector } from 'react-redux';

import Button from './Button';

export default function Home() {
  const username = useSelector((state) => state.user.userName);

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat px-4 py-32 text-center font-serif"
      style={{
        backgroundImage: "url('/images/bg-pizza.jpg')",
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
        <Button type="orangeButton" to="/Menu">
          continue ordering, {username}
        </Button>
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
