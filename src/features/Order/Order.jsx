// import OrderItem from './OrderItem';
// import { getCartItems } from '../Cart/cartSlice';
import { fetchUserOrders, cancelOrder } from '../../services/ api.js';
import { useSelector, useDispatch } from 'react-redux';
// import CountdownTimer from '../../utils/helpers';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../Cart/cartSlice';
import bgPizza from '../../assets/bg-pizza.jpg';
import { selectUser } from '../User/userSlice.js';
import { useEffect } from 'react';
import { setOrders } from './orderSlice.js';
import { clearUser } from '../User/userSlice.js';

export default function Order() {
  // const OrderItems = useSelector(getCartItems);
  // const totalPrice = useSelector((state) => state.order.totalPrice);
  // const priorityFee = useSelector((state) => state.order.priorityFee);
  // const pizzaPrice = useSelector((state) => state.order.pizzaPrice);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const orders = useSelector((state) => state.order.orders);

  useEffect(() => {
    if (user.id) {
      fetchUserOrders(user.id)
        .then((data) => {
          console.log('Fetched user orders:', data);
          dispatch(setOrders(data));
        })
        .catch((err) => console.error('Error loading orders:', err));
    }
  }, [user.id, dispatch]);

  const handleCancel = async (orderId) => {
    try {
      await cancelOrder(orderId);
      // 重新刷新订单
      const updatedOrders = await fetchUserOrders(user.id);
      dispatch(setOrders(updatedOrders));
    } catch (err) {
      console.error('Failed to cancel order:', err);
    }
  };

  const handleNewOrder = (e) => {
    e.preventDefault();
    dispatch(clearCart());
    navigate('/Menu');
  };

  const handleLogOut = (e) => {
    navigate('/');
    dispatch(clearUser());
    dispatch(clearCart());
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat px-6 py-10"
      style={{
        backgroundImage: `url(${bgPizza})`,
        backgroundColor: 'rgba(255,255,255,0.85)',
        backgroundBlendMode: 'lighten',
      }}
    >
      <div className="mx-auto max-w-2xl px-6 py-10">
        <div className="flex flex-wrap justify-between py-4">
          <p className="mb-8 mt-6 text-2xl font-semibold">My Order status</p>
        </div>
        {orders.length === 0 ? (
          <>
            <p className="mb-6 py-2 text-lg sm:basis-40">No orders yet.</p>
            <div className="flex justify-end"></div>
          </>
        ) : (
          orders.map((order) => (
            <div key={order.id} className="mb-6 border-b pb-4">
              <div className="felx-row mb-2 flex justify-between">
                <p className="mb-3 text-lg font-semibold">Order #{order.id}</p>
                <span
                  className={
                    order.order_status === 'cancelled'
                      ? 'font-semibold text-red-500'
                      : order.order_status === 'preparing'
                        ? 'text-orange-500'
                        : order.order_status === 'priority'
                          ? 'text-green-500'
                          : ''
                  }
                >
                  {order.order_status}
                </span>
              </div>

              <ul className="list-disc">
                {order.order_items.map((item) => (
                  <li key={item.id} className="flex flex-row justify-between">
                    <div>
                      {item.quantity} × {item.pizza.name}
                    </div>
                    <div>£ {item.total_price}</div>
                  </li>
                ))}
              </ul>
              <div className="felx-row my-2 flex justify-between">
                <p>Delivery Fee:</p>
                <p>£ {order.order_status === 'priority' ? 14.5 : 4.5}</p>
              </div>
              <div className="felx-row my-2 flex justify-between font-semibold">
                <p>Your Bill: </p>
                <p>£{order.total_price}</p>
              </div>
              <div className="flex flex-col items-end">
                <p>Created: {new Date(order.created_at).toLocaleString()}</p>
                {(order.order_status === 'pending' ||
                  order.order_status === 'preparing' ||
                  order.order_status === 'priority') && (
                  <button
                    onClick={() => handleCancel(order.id)}
                    className="mt-2 text-sm text-red-500 underline"
                  >
                    Cancel this order
                  </button>
                )}
              </div>
            </div>
          ))
        )}
        <div className="flex justify-end space-x-4">
          {user.first_name !== 0 && (
            <button
              className="mr-4 min-w-[120px] rounded-full bg-orange-500 px-4 py-3 text-center text-sm uppercase text-white hover:bg-orange-500"
              onClick={handleLogOut}
            >
              Log Out
            </button>
          )}
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
