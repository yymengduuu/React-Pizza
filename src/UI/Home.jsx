export default function Home() {
  return (
    <div
      className="text-center w-full py-32 px-4 font-serif min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/bg-pizza.jpg')",
        backgroundColor: "rgba(255,255,255,0.85)",
        backgroundBlendMode: "lighten",
      }}
    >
      <h1 className="mb-24  text-5xl md:text-5xl text-gray-900 drop-shadow-xl font-bold">
        The best pizza .
      </h1>
      <h2 className="mb-16 text-3xl text-gray-700 font-semibold">
        Straight out of the oven, straight to you.
      </h2>
      <p className="mb-16 text-lg text-gray-800 font-medium">
        👋 Welcome! Please start by telling us your name:
      </p>
      <input
        className="mb-4 rounded-full text-stone-100 text-center px-4 py-2 border-gray-900"
        placeholder="Your full name"
      />
    </div>
  );
}
