import { useNavigate } from 'react-router-dom';

export default function CartOverview() {
  const navigate = useNavigate();
  const handleOpen = (e) => {
    e.preventDefault();
    navigate('/Cart');
  };
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex flex-row justify-between bg-stone-800 px-3 py-4 uppercase text-white md:text-base">
      <p className="flex justify-start gap-4">X Pizzas</p>
      <p>$ 1.00</p>
      <button onClick={handleOpen}>Open cart &rarr;</button>
    </div>
  );
}
