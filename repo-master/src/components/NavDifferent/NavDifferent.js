import React from 'react';
import {  useHistory } from 'react-router-dom';
import UserNav from '../NavHeader/UserNav';


export default function NavDifferent() {
    let history = useHistory();


    const handleClickTrangChu=()=> {
        history.push("/");
    }

    return (
          <header className="sticky w-full top-0 left-0 right-0 bg-white transition duration-500 z-40 grid grid-cols-2 shadow-md p-5 md:px-10">
                {/* left */}
                <div className='relative flex items-center w-32 cursor-pointer my-auto'>
                <button className="outline-none border-none" onClick={handleClickTrangChu}>
                    <img src="https://links.papareact.com/qd3" layout="fill" className="object-contain object-left" />
                    </button>
            </div>
    
    
                {/* right */}
                <div className="flex items-center align-middle space-x-4 justify-end text-gray-500">
                    <div className="hover:bg-gray-100 transition duration-150 rounded-full cursor-pointer">
                        <button className="focus:outline-none hidden md:inline text-black p-2">Become a host</button>
                    </div>
                    <div className="hover:bg-gray-100 transition duration-150 rounded-full cursor-pointer">
                        <button className="p-2 focus:outline-none"> <i className="fa-solid bg-white rounded-full fa-globe w-4" />
                        </button>
                    </div>
                   <UserNav />
                </div>
            </header>
      )
}
