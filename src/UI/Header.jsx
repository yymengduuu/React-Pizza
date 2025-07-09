import { useSelector } from 'react-redux';

export default function Header() {
  const username = useSelector((state) => state.user.userName);

  return (
    <header className="flex items-center justify-between bg-orange-400 px-4 py-3">
      <p className="uppercase">fast react pizza co. </p>
      <input
        className="rounded-full bg-white text-center text-stone-100"
        placeholder="Search order # "
      />
      {username ? <div className="font-mono text-black">{username}</div> : null}
    </header>
  );
}
