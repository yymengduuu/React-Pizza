import MenuItem from './MenuItem';
import getMenu from '../../services/apiRestaurant.js';
import { useLoaderData } from 'react-router-dom';
import bgPizza from '../../assets/bg-pizza.jpg';

export default function Menu() {
  const menu = useLoaderData();

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
          {menu.map((pizza) => (
            <MenuItem pizza={pizza} key={pizza.id} />
          ))}
        </ul>
      </div>
    </>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}
