import OrderItem from './OrderItem';
import { getCartItems } from '../Cart/cartSlice';
import { useSelector } from 'react-redux';

export default function Order() {
  const OrderItems = useSelector(getCartItems);
  const totalPrice = useSelector((state) => state.order.totalPrice);
  const priorityFee = useSelector((state) => state.order.priorityFee);
  const pizzaPrice = useSelector((state) => state.order.pizzaPrice);

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
          <p>Order X status</p>
          <span>preparing order</span>
        </div>
        <div className="mb-6 flex flex-wrap justify-between rounded-lg bg-stone-300 px-2 py-4">
          <p>Only X minutes left 😃</p>
          <p>(Estimated delivery: Jul 11, 03:51 PM)</p>
        </div>
        <ul className="mb-6 flex flex-col gap-3 divide-y divide-stone-200 border-y border-stone-200">
          {OrderItems.map((item) => (
            <OrderItem item={item} key={item.id} />
          ))}
        </ul>

        <div className="flex flex-col gap-2 rounded-lg bg-stone-300 px-2 py-4">
          <p>Price pizza: &pound; {pizzaPrice}.00</p>
          <p>Price priority: &pound; {priorityFee}</p>
          <p>Price delivery: &pound; 4.50</p>
          <p>Total Cost: &pound; {totalPrice}</p>
        </div>
      </div>
    </div>
  );
}
