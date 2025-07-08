export default function Cart() {
  return (
    <div>
      <button>Back to menu</button>
      <p>This is userName's cart</p>
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
