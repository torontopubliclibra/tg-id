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
                    <Image src="/id-card.svg" alt="I.D. icon" width={45} height={45} style={{paddingBottom: '2px', marginLeft: '-10px'}}/>I.D. Guide
                </h1>
            </Link>
            <Nav mobileOpen={isMobileNavOpen} closeMobileNav={closeMobileNav}/>
            <button onClick={toggleMobileNav}>
                <Image src="/menu.svg" alt="Menu icon" width={32} height={32}/>
            </button>
        </div>
    );
}