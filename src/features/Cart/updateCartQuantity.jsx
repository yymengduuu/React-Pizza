import { useDispatch, useSelector } from 'react-redux';
import { increaseItemQuantity, decreaseItemQuantity } from './cartSlice';

export default function updateCartQuantity() {
  const dispatch = useDispatch();
  const handleIncrease = (itemId) => {
    dispatch(increaseItemQuantity(itemId));
  };
  const handleDecrease = (itemId) => {
    dispatch(decreaseItemQuantity(itemId));
  };

  return (
    <div>
      <button type="round" onClick={handleDecrease}></button>
      <span>0</span>
      <button type="round" onClick={handleIncrease}></button>
    </div>
  );
}
