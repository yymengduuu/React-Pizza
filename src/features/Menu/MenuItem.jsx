import { useState } from "react";

export default function MenuItem({ pizza }) {
  const { imageUrl, name, ingredients, unitPrice, soldOut } = pizza;
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    // Here you would typically dispatch an action to add the item to the cart
  };

  return (
    <div>
      <li className="grid grid-cols-[auto_1fr_auto] gap-10 py-4 items-center border-b border-gray-300">
        <img
          className={`h-36 ${soldOut ? "opacity-70 grayscale" : ""}`}
          src={imageUrl}
          alt={name}
        />
        <div className="font-serif">
          <p className="font-bold text-2xl text-stone-900">{name}</p>
          <p className="py-4 text-lg text-stone-600">
            {ingredients.join(", ")}
          </p>
          {soldOut ? (
            <p>Sold Out</p>
          ) : (
            <p className="py-5 text-stone-700">$ {unitPrice}.00</p>
          )}
        </div>

        {!soldOut && (
          <button
            className="uppercase rounded-full px-4 py-3 text-sm min-w-[120px] text-center bg-stone-700 text-white"
            onClick={handleAdd}
          >
            {addedToCart ? "delete" : "add to cart"}
          </button>
        )}
      </li>
    </div>
  );
}
