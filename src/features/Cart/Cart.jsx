import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const username = useSelector((state) => state.user.userName);
  const navigate = useNavigate();
  const hanldeBack = (e) => {
    e.preventDefault();
    navigate('/Menu');
  };

  return (
    <div className="px-3 py-4">
      <button onClick={hanldeBack}>&larr; Back to menu</button>
      <p>This is your cart, {username}</p>

      <ul>
        <li></li>
        <button className="min-w-[120px] rounded-full bg-stone-700 px-4 py-3 text-center text-sm uppercase text-white">
          delete
        </button>
      </ul>
      <button className="min-w-[120px] rounded-full bg-stone-700 px-4 py-3 text-center text-sm uppercase text-white">
        check out
      </button>
      <button className="min-w-[120px] rounded-full bg-stone-700 px-4 py-3 text-center text-sm uppercase text-white">
        clear cart
      </button>
    </div>
  );
}
