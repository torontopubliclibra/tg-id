'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useState } from "react";
import Nav from "./nav";

export default function TopBar() {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    function toggleMobileNav() {
        setIsMobileNavOpen(!isMobileNavOpen);
    }

    function closeMobileNav() {
        setIsMobileNavOpen(false);
    }

    return (
        <div className="top-bar">
            <Link href="/" onClick={closeMobileNav}>
                <h1>
                    <Image src="/logo.png" alt="I.D. Guide logo" width={97} height={45}/>
                    {/* I.D. guide */}
                </h1>
            </Link>
            <Nav mobileOpen={isMobileNavOpen} closeMobileNav={closeMobileNav}/>
            <button onClick={toggleMobileNav}>
                <Image src="/menu-3.svg" alt="Menu icon" width={30} height={30}/>
            </button>
        </div>
    );
}