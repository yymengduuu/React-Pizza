import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Header() {
  const username = useSelector((state) => state.user.first_name);

  return (
    <header className="flex items-center justify-between bg-orange-400 px-4 py-3">
      <Link to="/" className="uppercase">
        FirePie Express pizza co.{' '}
      </Link>

      {username ? (
        <Link to="/Order/Status" className="uppercase">
          {username}
        </Link>
      ) : (
        <Link to="/LoginUser" className="uppercase">
          Login
        </Link>
      )}
    </header>
  );
}
