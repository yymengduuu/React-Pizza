import MenuItem from './MenuItem';
// import getMenu from '../../services/apiRestaurant.js';
// import { useLoaderData } from 'react-router-dom';
import bgPizza from '../../assets/bg-pizza.jpg';
import { useEffect, useState } from 'react';

export default function Menu() {
  // const menu = useLoaderData();

  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch('/api/pizzas')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setPizzas(data);
        } else {
          console.error('Unexpected API response:', data);
          setPizzas([]); // 防止 map 报错
        }
      })
      .catch((err) => console.log('Failed to fetch error', err));
  }, []);

  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat px-20"
        style={{
          backgroundImage: `url(${bgPizza})`,
          backgroundColor: 'rgba(255,255,255,0.85)',
          backgroundBlendMode: 'lighten',
        }}
      >
        <ul>
          {pizzas.map((pizza) => (
            <MenuItem pizza={pizza} key={pizza.id} />
          ))}
        </ul>
      </div>
    </>
  );
}

// export async function loader() {
//   const menu = await getMenu();
//   return menu;
// }
