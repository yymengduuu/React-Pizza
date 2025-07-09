import currentCartQuantity from '../../features/Cart/cartSlice.js';
import updateCartQuantity from '../Cart/updateCartQuantity';

export default function MenuItem({ pizza }) {
  const { imageUrl, name, ingredients, unitPrice, soldOut } = pizza;

  const handleAdd = (e) => {
    e.preventDefault();
    // Here you would typically dispatch an action to add the item to the cart
  };

  return (
    <div>
      <li className="grid grid-cols-[auto_1fr_auto] items-center gap-10 border-b border-gray-300 py-4">
        <img
          className={`h-36 ${soldOut ? 'opacity-70 grayscale' : ''}`}
          src={imageUrl}
          alt={name}
        />
        <div className="font-serif">
          <p className="text-2xl font-bold text-stone-900">{name}</p>
          <p className="py-4 text-lg text-stone-600">
            {ingredients.join(', ')}
          </p>
          {soldOut ? (
            <p>Sold Out</p>
          ) : (
            <p className="py-5 text-stone-700">$ {unitPrice}.00</p>
          )}
        </div>
        <updateCartQuantity />
        {!soldOut && (
          <button
            className="min-w-[120px] rounded-full bg-stone-700 px-4 py-3 text-center text-sm uppercase text-white"
            onClick={handleAdd}
          >
            add to cart
          </button>
        )}
      </li>
    </div>
  );
}
