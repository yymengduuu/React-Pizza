import CreateOrder from './CreateOrder';
import CartOverview from '../Cart/CartOverview';

export default function Order() {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat px-4"
      style={{
        backgroundImage: "url('/images/bg-pizza.jpg')",
        backgroundColor: 'rgba(255,255,255,0.85)',
        backgroundBlendMode: 'lighten',
      }}
    >
      <CreateOrder />
      <CartOverview />
    </div>
  );
}
