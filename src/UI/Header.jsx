export default function Header() {
  return (
    <header className="bg-orange-400 flex items-center justify-between px-4 py-3">
      <p className="uppercase ">fast react pizza co. </p>
      <input
        className="bg-white rounded-full text-stone-100 text-center"
        placeholder="Search order # "
      />
    </header>
  );
}
