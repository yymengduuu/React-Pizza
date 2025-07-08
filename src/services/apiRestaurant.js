const API = "https://react-fast-pizza-api.jonas.io/api/menu";
async function getMenu() {
  const res = await fetch(API);
  if (!res.ok) throw new Error("fetch API fail");
  const { data } = await res.json();
  return data;
}

export default getMenu;
