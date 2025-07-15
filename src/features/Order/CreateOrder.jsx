import { useSelector, useDispatch } from 'react-redux';
import { setPriorityFee, setTotalPrice, setPizzaPrice } from './orderSlice';
import { totalCartPrice } from '../Cart/cartSlice';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function CreateOrder() {
  const username = useSelector((state) => state.user.userName);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const totalPrice = useSelector(totalCartPrice);

  const [priority, setPriority] = useState(false);
  const deliveryFee = 4.5;
  const priorityFee = priority ? 10 : 0;
  const finalPrice = (totalPrice + deliveryFee + priorityFee).toFixed(2);

  const [error, setError] = useState('');

  const handleCheckout = (e) => {
    e.preventDefault();
    dispatch(setPriorityFee(priorityFee));
    dispatch(setPizzaPrice(totalPrice));
    dispatch(setTotalPrice(finalPrice));
    navigate('/Order/Status');
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
        <p className="mb-12 mt-6 text-2xl font-semibold">
          Rerady to order? Let's go!
        </p>
        <form onSubmit={handleCheckout}>
          <div className="mb-6 flex grow gap-2">
            <label className="py-2 text-lg sm:basis-40">First Name</label>
            <input
              className="w-full rounded-xl border-2 border-orange-400 px-3 py-2 text-sm focus:border-orange-600 focus:outline-none"
              type="text"
              name="customer"
              defaultValue={username}
              required
            />
          </div>
          <div className="mb-6 flex grow gap-2">
            <label className="py-2 text-lg sm:basis-40">Phone number</label>
            <input
              className="w-full rounded-xl border-2 border-orange-400 px-3 py-2 text-sm focus:border-orange-600 focus:outline-none"
              type="tel"
              name="number"
              placeholder="+44 xxx xxx xxxx"
              required
            />
          </div>
          <div className="mb-6 flex grow gap-2">
            <label className="py-2 text-lg sm:basis-40">Address</label>
            <input
              className="w-full rounded-xl border-2 border-orange-400 px-3 py-2 text-sm focus:border-orange-600 focus:outline-none"
              type="text"
              name="address"
              required
            />
          </div>
          <div className="mb-3 flex flex-row items-center gap-5">
            <input
              name="priority"
              id="priority"
              type="checkbox"
              onChange={(e) => setPriority(e.target.checked)}
              className="h-4 w-4 accent-orange-400 focus:outline-none focus:ring-orange-600"
            />
            <label className="text-lg">Want to give your order priority?</label>
          </div>
          <p className="mb-6 text-sm text-stone-600">
            Priority orders are delivered in 20 minutes with an extra £10
            delivery fee.
          </p>
          <button className="mr-4 min-w-[120px] rounded-full bg-orange-400 px-4 py-3 text-center text-sm uppercase text-white hover:bg-orange-500">
            order now from &pound; {finalPrice}
          </button>
        </form>
      </div>
    </div>
  );
}
