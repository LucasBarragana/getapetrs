'use client';
import CityFilter from "../components/layout/CityFilter";
import MenuItem from "../components/menu/MenuItem";
import {useEffect, useState} from "react";

export default function MenuPage() {
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    fetch('/api/menu-items').then(res => {
      res.json().then(menuItems => setMenuItems(menuItems));
    });
  }, []);
  return (
    <section className="mt-8">
      <CityFilter />      
      <div className="grid sm:grid-cols-3 gap-4 mt-6 mb-12">
        {menuItems.map(item => (
          <MenuItem key={item._id} {...item} />
        ))}
      </div>
    </section>
  );
}