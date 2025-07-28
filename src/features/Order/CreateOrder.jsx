import { useSelector, useDispatch } from 'react-redux';
// import { setPriorityFee, setTotalPrice, setPizzaPrice } from './orderSlice';
import { getCartItems, totalCartPrice, clearCart } from '../Cart/cartSlice';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import bgPizza from '../../assets/bg-pizza.jpg';

export default function CreateOrder() {
  const user = useSelector((state) => state.user);
  const username = user.first_name;
  const userId = user.id;
  const phone = user.phone;
  const address = user.address;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 检查用户是否登录，如果没有登录则重定向到登录页面
  useEffect(() => {
    if (!user.isLoggedIn || !user.id) {
      navigate('/LoginUser');
    }
  }, [user.isLoggedIn, user.id, navigate]);

  const cartItems = useSelector(getCartItems);
  const totalPrice = useSelector(totalCartPrice);

  const [priority, setPriority] = useState(false);
  const deliveryFee = 4.5;
  const priorityFee = priority ? 10 : 0;
  const finalPrice = (totalPrice + deliveryFee + priorityFee).toFixed(2);

  const [error, setError] = useState('');

  const handleCheckout = async (e) => {
    e.preventDefault();

    // 再次检查用户是否登录
    if (!user.isLoggedIn || !user.id) {
      setError('Please log in to place an order');
      navigate('/LoginUser');
      return;
    }

    // const phoneData = new FormData(e.target).get('number')?.trim();

    // const newErrors = {};

    // if (!phoneData || !/^\+44\s?\d{3}\s?\d{3}\s?\d{4}$/.test(phoneData)) {
    //   setError('Enter a valid UK phone number');
    //   return;
    // }

    // if (Object.keys(newErrors).length > 0) {
    //   setError(newErrors);
    //   return;
    // }

    // setError({});

    // dispatch(setPriorityFee(priorityFee));
    // dispatch(setPizzaPrice(totalPrice));
    // dispatch(setTotalPrice(finalPrice));
    // navigate('/Order/Status');

    const orderItems = cartItems.map((item) => ({
      pizzaId: item.id, // 保持为数字
      quantity: item.quantity,
      unit_price: item.unitprice, // 注意要和 Prisma schema 一致，叫 unit_price
    }));

    try {
      const res = await fetch('http://localhost:4000/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: userId, // 字符串也可以，后端转 BigInt
          phone,
          address,
          priority,
          items: orderItems,
          total_price: finalPrice,
        }),
      });

      if (!res.ok) throw new Error('Failed to submit order');
      const newOrder = await res.json();
      console.log('Created new order:', newOrder);
      dispatch(clearCart());
      navigate('/Order/Status');
    } catch (err) {
      console.error('Order creation failed:', err);
      setError('Order failed. Please try again.');
    }

    console.log('Creating order with:', {
      userId,
      phone,
      address,
      priority,
      items: orderItems,
      total_price: finalPrice,
    });
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat px-4"
      style={{
        backgroundImage: `url(${bgPizza})`,
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
              defaultValue={phone}
              required
            />
          </div>
          {error && <p className="mb-6 text-sm text-red-500">{error}</p>}
          <div className="mb-6 flex grow gap-2">
            <label className="py-2 text-lg sm:basis-40">Address</label>
            <input
              className="w-full rounded-xl border-2 border-orange-400 px-3 py-2 text-sm focus:border-orange-600 focus:outline-none"
              type="text"
              name="address"
              defaultValue={address}
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
