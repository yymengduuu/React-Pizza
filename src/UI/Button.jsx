import { Link } from 'react-router-dom';
export default function Button({ type, children, to }) {
  const base =
    'mr-4 min-w-[120px] rounded-full text-center text-sm uppercase cursor-pointer';
  const styles = {
    orangeButton:
      base + `bg-orange-400 hover:bg-orange-500 px-4 py-3  text-white `,
    stoneButton:
      base + ` bg-stone-700  hover:bg-stone-500 px-4 py-3  text-white `,
    roundedButton:
      base +
      `bg-orange-400 hover:bg-orange-500 text-black px-2 py-0.5  md:px-3.5 md:py-2`,
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  return <button className={styles[type]}>{children}</button>;
}
