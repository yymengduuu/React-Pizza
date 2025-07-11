export default function OrderOverview() {
  return (
    <div>
      <div>
        <p>Order X status</p>
        <span>preparing order</span>
      </div>
      <div>
        <p>Only X minutes left 😃</p>
        <p>(Estimated delivery: Jul 11, 03:51 PM)</p>
      </div>
      <div>OrderItem</div>
      {/* map order items here */}
      <div>
        <p>Price pizza: €31.00</p>
        <p>To pay on delivery: €31.00</p>
      </div>
      <button>Make priority</button>
    </div>
  );
}
