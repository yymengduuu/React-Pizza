export default function MenuItem({ pizza }) {
  const { imageUrl, name, ingredients, unitPrice, soldOut } = pizza;

  const handleAdd = (e) => {
    e.preventDefault();
    console.log("Add to cart clicked for:", name);
    // Here you would typically dispatch an action to add the item to the cart
  };

  return (
    <div>
      <li className="grid grid-cols-[auto_1fr_auto] gap-10 py-4 items-center border-b border-gray-300">
        <img src={imageUrl} alt={name} />
        <div className="font-serif">
          <p className="font-bold text-2xl text-stone-900">{name}</p>
          <p className="py-4 text-lg text-stone-600">
            {ingredients.join(", ")}
          </p>

          <p className="py-5 text-stone-700">$ {unitPrice}.00</p>
        </div>
        <button
          className="uppercase bg-stone-700 text-white rounded-full px-4 py-3 text-sm "
          onClick={handleAdd}
        >
          add to cart
        </button>
      </li>
    </div>
  );
}
