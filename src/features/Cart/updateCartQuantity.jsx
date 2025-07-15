import { useDispatch } from 'react-redux';
import { increaseItemQuantity, decreaseItemQuantity } from './cartSlice';

export default function UpdateCartQuantity({ id, quantity }) {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        className="inline-block rounded-full bg-orange-400 px-2 py-0.5 text-sm text-black hover:bg-orange-500 md:px-3.5 md:py-2"
        onClick={() => dispatch(decreaseItemQuantity(id))}
      >
        -
      </button>
      <span className="mx-3">{quantity}</span>
      <button
        className="rounded-full bg-orange-400 px-2 py-0.5 text-sm text-black hover:bg-orange-500 md:px-3.5 md:py-2"
        disabled={quantity >= 10}
        onClick={() => dispatch(increaseItemQuantity(id))}
      >
        +
      </button>
    </div>
  );
}
