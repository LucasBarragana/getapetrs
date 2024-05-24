'use client';
import { useEffect } from "react";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { useProfile } from "../UseProfile";
import Person from "../icons/Person";
import Pets from "../icons/Pets";
import Money from "../icons/Money";
import AddPet from "../icons/AddPet";
import Logout from "../icons/Logout";
import More from "../icons/More";

export default function AuthLinks({ status, userName }) {
  const { data: loggedInUserData } = useProfile();

  useEffect(() => {
    function handleWindowClick(event) {
      if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }

    window.addEventListener('click', handleWindowClick);

    return () => {
      window.removeEventListener('click', handleWindowClick);
    };
  }, []);

  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  if (status === 'authenticated') {
    return (
      <div className="dropdown">
        <button onClick={myFunction} className="dropbtn">Olá, {userName} <More className="ml-2" /></button>
        <div id="myDropdown" className="dropdown-content">
          <div className="flex items-center pl-4 hover:bg-gray-300">
            <Person className="mr-2" />
            <Link href="/profile" className="flex items-center"> Meu Perfil</Link>
          </div>
          <div className="flex items-center pl-4 hover:bg-gray-300">
            <Pets className="mr-2" />
            <Link href="/menu-items" className="flex items-center"> Meus Pet's</Link>
          </div>
          <div className="flex items-center pl-4 hover:bg-gray-300">
            <Money className="mr-2" />
            <Link href="#" className="flex items-center"> Doações</Link>
          </div>
          {loggedInUserData?.admin && (
            <div className="flex items-center pl-4 hover:bg-gray-300">     
              <AddPet className="mr-2" />         
              <Link href="/menu-items/new" className="flex items-center"> Add um Pet</Link>
            </div>
          )}
          <button className="text-red-500 flex items-center hover:bg-gray-300" onClick={() => signOut({ callbackUrl: '/' })}><Logout className="mr-2" /> Sair</button>
        </div>
      </div>
    );
  }

  if (status === 'unauthenticated') {
    return (
      <div className="relative inline-block text-left">
        <button onClick={myFunction} className="dropbtn inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Login/Registrar-se
        </button>
        <div id="myDropdown" className="dropdown-content origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <button type="button" onClick={() => signIn('google', { callbackUrl: '/profile' })}>
              <Image src={'/google.png'} alt="Google Logo" width={24} height={24} />
              Login/Registro com Google
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
