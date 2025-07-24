import {
  currentCartQuantity,
  deleteItem,
} from '../../features/Cart/cartSlice.js';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../features/Cart/cartSlice.js';
import UpdateCartQuantity from '../Cart/UpdateCartQuantity.jsx';

export default function MenuItem({ pizza }) {
  const dispatch = useDispatch();

  const { id, imageurl, name, ingredients, unitprice, soldout } = pizza;

  console.log('Pizza data:', pizza);

  const quantity = useSelector(currentCartQuantity(id));

  const handleAdd = (e) => {
    e.preventDefault();
    const newItem = {
      id,
      name,
      ingredients,
      quantity: 1,
      unitprice,
      totalPrice: unitprice * 1,
    };
    dispatch(addItem(newItem));
    console.log('Add item:', newItem);
  };

  const handleDelete = (e) => {
    e.preventDefault();

    dispatch(deleteItem(id));
  };

  return (
    <li className="grid grid-cols-[auto_1fr_auto] items-center gap-10 border-b border-gray-300 py-4">
      <img
        className={`h-36 ${soldout ? 'opacity-70 grayscale' : ''}`}
        src={imageurl}
        alt={name}
      />
      <div className="font-serif">
        <p className="text-2xl font-bold text-stone-900">{name}</p>
        <p className="py-4 text-lg text-stone-600">{ingredients.join(', ')}</p>
        {soldout ? (
          <p>Sold Out</p>
        ) : (
          <p className="py-5 text-stone-700">&pound; {unitprice}.00</p>
        )}
      </div>
      {quantity > 0 ? (
        <div className="flex flex-grow items-center gap-3">
          <UpdateCartQuantity id={id} quantity={quantity} />
          <button
            className="min-w-[120px] rounded-full bg-stone-700 px-4 py-3 text-center text-sm uppercase text-white hover:bg-stone-500"
            onClick={handleDelete}
          >
            delete
          </button>
        </div>
      ) : (
        !soldout && (
          <button
            className="min-w-[120px] rounded-full bg-stone-700 px-4 py-3 text-center text-sm uppercase text-white hover:bg-stone-500"
            onClick={handleAdd}
          >
            add to cart
          </button>
        )
      )}
    </li>
  );
}
