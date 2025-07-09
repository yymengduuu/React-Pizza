import {
  currentCartQuantity,
  deleteItem,
} from '../../features/Cart/cartSlice.js';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../features/Cart/cartSlice.js';
import UpdateCartQuantity from '../Cart/UpdateCartQuantity.jsx';

export default function MenuItem({ pizza }) {
  const dispatch = useDispatch();

  const { id, imageUrl, name, ingredients, unitPrice, soldOut } = pizza;

  const quantity = useSelector(currentCartQuantity(id));

  const handleAdd = (e) => {
    e.preventDefault();
    const newItem = {
      id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  };

  const handleDelete = (e) => {
    e.preventDefault();

    dispatch(deleteItem(id));
  };

  return (
    <li className="grid grid-cols-[auto_1fr_auto] items-center gap-10 border-b border-gray-300 py-4">
      <img
        className={`h-36 ${soldOut ? 'opacity-70 grayscale' : ''}`}
        src={imageUrl}
        alt={name}
      />
      <div className="font-serif">
        <p className="text-2xl font-bold text-stone-900">{name}</p>
        <p className="py-4 text-lg text-stone-600">{ingredients.join(', ')}</p>
        {soldOut ? (
          <p>Sold Out</p>
        ) : (
          <p className="py-5 text-stone-700">$ {unitPrice}.00</p>
        )}
      </div>

      {quantity > 0 ? (
        <div className="flex flex-grow items-center gap-3">
          <UpdateCartQuantity id={id} quantity={quantity} />
          <button
            className="min-w-[120px] rounded-full bg-stone-700 px-4 py-3 text-center text-sm uppercase text-white"
            onClick={handleDelete}
          >
            delete
          </button>
        </div>
      ) : (
        !soldOut && (
          <button
            className="min-w-[120px] rounded-full bg-stone-700 px-4 py-3 text-center text-sm uppercase text-white"
            onClick={handleAdd}
          >
            add to cart
          </button>
        )
      )}
    </li>
  );
}
