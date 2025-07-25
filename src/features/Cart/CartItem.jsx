import UpdateCartQuantity from './UpdateCartQuantity';
import { useDispatch } from 'react-redux';
import { deleteItem } from './cartSlice';

export default function CartItem({ item }) {
  const { id, name, quantity, totalPrice } = item;
  // Props passed down from the parent component: item

  const dispatch = useDispatch();
  const handleDelete = (e) => {
    e.preventDefault();

    dispatch(deleteItem(id));
  };

  return (
    <li className="flex items-center justify-between gap-4 py-4">
      <p className="flex-1">
        {quantity} x {name}
      </p>
      <UpdateCartQuantity id={id} quantity={quantity} />
      <p className="ml-4 w-12 text-right">&pound;{totalPrice}</p>
      <button
        className="ml-4 min-w-[120px] rounded-full bg-stone-700 px-4 py-3 text-center text-sm uppercase text-white hover:bg-stone-500"
        onClick={handleDelete}
      >
        delete
      </button>
    </li>
  );
}
