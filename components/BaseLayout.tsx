"use client";

import React, { useState } from "react";
import { store } from "@/store";
import { Provider } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";

interface BaseLayoutProps {
    children: React.ReactNode;
}
const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    function toggleMenu() {
        setMenuIsOpen(!menuIsOpen);
    }
    return <Provider store={store}>
        <header className="bg-black text-white font-semibold px-2 py-3 
        flex flex-row items-center justify-between">
            <p className="text-2xl">Crypto News <span className="text-sm">(BETA)</span></p>
            <button onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} size="2x" />
            </button>
        </header>
        <div className="bg-orange-500 mb-2 text-md font-semibold gap-2 flex flex-row justify-start py-1 px-3">
            <Link href="#">
                <button>
                    Bitcoin
                </button>
            </Link>
            <Link href="#">
                <button>
                    Etherum
                </button>
            </Link>
            <Link href="#">
                <button>
                    Doge!
                </button>
            </Link>
            <Link href="#">
                <button>
                    Ripple
                </button>
            </Link>
            <Link href="#">
                <button>
                    Tron
                </button>
            </Link>
        </div>
        {menuIsOpen && <div className="bg-gray-900 fixed right-0 top-0 bottom-0 left-20 shadow-xl border-l-2 border-black">
            <div className="flex px-4 flex-row justify-between items-center left-0 right-0 py-5 bg-orange-500">
                <div className=" text-xl  text-black font-semibold">
                    Coin News!
                </div>
                <button onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faClose} size="2x" />
                </button>
            </div>
            <div className="flex flex-col text-white text-xl text-center gap-2 pt-3">
            <Link href="#">
                <button>
                    Bitcoin
                </button>
            </Link>
            <Link href="#">
                <button>
                    Etherum
                </button>
            </Link>
            <Link href="#">
                <button>
                    Doge!
                </button>
            </Link>
            <Link href="#">
                <button>
                    Ripple
                </button>
            </Link>
            <Link href="#">
                <button>
                    Tron
                </button>
            </Link>
            </div>
        </div>}
        <div className="px-2">
            {children}
        </div>
        <header className="bg-black text-white font-semibold px-2 py-3 
        flex flex-row items-center justify-between mt-4">
            <p className="text-2xl">Crypto News <span className="text-sm">(BETA)</span></p>
            <p className="text-xs font-medium">Terms of Use.</p>
        </header>
    </Provider>
}
export default BaseLayout