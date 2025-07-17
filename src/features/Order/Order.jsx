import OrderItem from './OrderItem';
import { getCartItems } from '../Cart/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import CountdownTimer from '../../utils/helpers';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../Cart/cartSlice';

export default function Order() {
  const OrderItems = useSelector(getCartItems);
  const totalPrice = useSelector((state) => state.order.totalPrice);
  const priorityFee = useSelector((state) => state.order.priorityFee);
  const pizzaPrice = useSelector((state) => state.order.pizzaPrice);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleNewOrder = (e) => {
    e.preventDefault();
    dispatch(clearCart());
    navigate('#/Menu');
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat px-6 py-10"
      style={{
        backgroundImage: "url('/images/bg-pizza.jpg')",
        backgroundColor: 'rgba(255,255,255,0.85)',
        backgroundBlendMode: 'lighten',
      }}
    >
      <div className="mx-auto max-w-2xl px-6 py-10">
        <div className="flex flex-wrap justify-between py-4">
          <p>Order {Math.floor(Math.random() * 100) + 1} status</p>
        </div>
        <CountdownTimer />
        <ul className="mb-6 flex flex-col gap-3 divide-y divide-stone-200 border-y border-stone-200">
          {OrderItems.map((item) => (
            <OrderItem item={item} key={item.id} />
          ))}
        </ul>

        <div className="mb-6 flex flex-col gap-2 rounded-lg bg-stone-300 px-2 py-4">
          <p>Price pizza: &pound; {pizzaPrice}.00</p>
          <p>Price priority: &pound; {priorityFee}</p>
          <p>Price delivery: &pound; 4.50</p>
          <p>Total Cost: &pound; {totalPrice}</p>
        </div>
        <div className="flex justify-end">
          <button
            className="mr-4 min-w-[120px] rounded-full bg-orange-400 px-4 py-3 text-center text-sm uppercase text-white hover:bg-orange-500"
            onClick={handleNewOrder}
          >
            Make a new order
          </button>
        </div>
      </div>
    </div>
  );
}
