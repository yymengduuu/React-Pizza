import { useDispatch } from 'react-redux';
import { increaseItemQuantity, decreaseItemQuantity } from './cartSlice';

export default function UpdateCartQuantity({ id, quantity }) {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        className="rounded-full"
        onClick={() => dispatch(increaseItemQuantity(id))}
      >
        -
      </button>
      <span>{quantity}</span>
      <button
        className="rounded-full"
        onClick={() => dispatch(decreaseItemQuantity(id))}
      >
        +
      </button>
    </div>
  );
}
