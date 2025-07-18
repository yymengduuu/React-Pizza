import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Header() {
  const username = useSelector((state) => state.user.userName);

  return (
    <header className="flex items-center justify-between bg-orange-400 px-4 py-3">
      <Link to="/" className="uppercase">
        FirePie Express pizza co.{' '}
      </Link>

      {username ? <div className="font-mono text-black">{username}</div> : null}
    </header>
  );
}
