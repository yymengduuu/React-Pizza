import { Outlet, useNavigation } from 'react-router-dom';
import Header from './Header';
import Loader from './Loader';
import CartOverview from '../features/Cart/CartOverview';

export default function AppLayout() {
  const navigate = useNavigation();
  const isLoading = navigate.state === 'loading';
  return (
    <div>
      {isLoading && <Loader />}
      <Header />
      <main>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}
