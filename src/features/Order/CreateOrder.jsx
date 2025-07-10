import { useSelector } from 'react-redux';
import { totalCartPrice } from '../Cart/cartSlice';

export default function CreateOrder() {
  const username = useSelector((state) => state.user.userName);
  const totalPrice = useSelector(totalCartPrice);

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <p className="mb-12 mt-6 text-2xl font-semibold">
        Rerady to order? Let's go!
      </p>
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
          defaultValue="+44 "
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
      <div className="mb-6 flex flex-row items-center gap-5">
        <input
          name="priority"
          id="priority"
          type="checkbox"
          className="h-4 w-4 accent-orange-400 focus:outline-none focus:ring-orange-600"
        />
        <label className="text-lg">Want to give your order priority?</label>
      </div>
      <button className="mr-4 min-w-[120px] rounded-full bg-orange-400 px-4 py-3 text-center text-sm uppercase text-white hover:bg-orange-500">
        order now from &pound; {totalPrice}.00
      </button>
    </div>
  );
}
