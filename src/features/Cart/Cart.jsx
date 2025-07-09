import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';
import { getCartItems } from './cartSlice';

export default function Cart() {
  const username = useSelector((state) => state.user.userName);
  const cartItems = useSelector(getCartItems);
  console.log('cartItems:', cartItems);

  const navigate = useNavigate();
  const hanldeBack = (e) => {
    e.preventDefault();
    navigate('/Menu');
  };

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <button className="text-orange-500" onClick={hanldeBack}>
        &larr; Back to menu
      </button>

      {cartItems.length === 0 ? (
        <p className="mb-4 mt-6 text-xl font-semibold">
          Your cart is still empty. Start adding some pizzas.
        </p>
      ) : (
        <>
          <p className="mb-4 mt-6 text-xl font-semibold">
            This is your cart, {username}
          </p>
          <ul className="my-6 divide-y divide-stone-200 border-b border-stone-200">
            {cartItems.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
          </ul>
          <button className="mr-4 min-w-[120px] rounded-full bg-orange-400 px-4 py-3 text-center text-sm uppercase text-white">
            check out
          </button>
          <button className="min-w-[120px] rounded-full bg-stone-700 px-4 py-3 text-center text-sm uppercase text-white">
            clear cart
          </button>
        </>
      )}
    </div>
  );
}
