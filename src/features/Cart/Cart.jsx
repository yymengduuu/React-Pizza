import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';
import { getCartItems, clearCart } from './cartSlice';

export default function Cart() {
  const username = useSelector((state) => state.user.userName);
  const cartItems = useSelector(getCartItems);
  // console.log('cartItems:', cartItems);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const hanldeBack = (e) => {
    e.preventDefault();
    navigate('/Menu');
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    navigate('/Order/CreateOrder');
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat px-4"
      style={{
        backgroundImage: "url('/images/bg-pizza.jpg')",
        backgroundColor: 'rgba(255,255,255,0.85)',
        backgroundBlendMode: 'lighten',
      }}
    >
      <div className="mx-auto max-w-3xl px-6 py-10">
        <button
          className="text-orange-600 hover:text-orange-400"
          onClick={hanldeBack}
        >
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
            <button
              className="mr-4 min-w-[120px] rounded-full bg-orange-400 px-4 py-3 text-center text-sm uppercase text-white hover:bg-orange-500"
              onClick={handleCheckout}
            >
              check out
            </button>
            <button
              className="min-w-[120px] rounded-full bg-stone-700 px-4 py-3 text-center text-sm uppercase text-white hover:bg-stone-500"
              onClick={() => dispatch(clearCart())}
            >
              clear cart
            </button>
          </>
        )}
      </div>
    </div>
  );
}
