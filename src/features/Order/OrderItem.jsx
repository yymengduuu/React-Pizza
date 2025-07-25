export default function OrderItem({ item }) {
  const { quantity, name, unitprice, ingredients } = item;

  return (
    <li>
      <div className="flex flex-wrap justify-between py-4">
        <p>
          {quantity} x {name}
        </p>
        <p>&pound; {unitprice}</p>
      </div>
      <p className="text-stone-700">{ingredients.join(', ')}</p>
    </li>
  );
}
