import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { totalCartQuantity, totalCartPrice } from './cartSlice';

export default function CartOverview() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector(totalCartQuantity);
  const totalPrice = useSelector(totalCartPrice);

  const navigate = useNavigate();
  const handleOpen = (e) => {
    e.preventDefault();
    navigate('#/Cart');
  };

  if (cartItems.length === 0) {
    return null;
  }
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex flex-row items-center justify-between bg-stone-800 px-10 py-4 text-white md:text-base">
      <p>{totalQuantity} Pizzas</p>
      <p>&pound; {totalPrice}.00</p>
      <button onClick={handleOpen} className="uppercase">
        Open cart &rarr;
      </button>
    </div>
  );
}
