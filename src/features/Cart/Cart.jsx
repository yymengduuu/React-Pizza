import { useSelector } from 'react-redux';

export default function Cart() {
  const userName = useSelector((state) => state.user.userName);
  return (
    <div className="px-3 py-4">
      <button>&larr; Back to menu</button>
      <p>This is {userName}'s cart</p>
      {/* replace with userName from redux store */}
      <ul>
        <li></li>
        <button>delete</button>
      </ul>
      <button>check out</button>
      <button>clear cart</button>
    </div>
  );
}
