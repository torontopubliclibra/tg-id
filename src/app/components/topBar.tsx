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
                    <span style={{textTransform: 'lowercase'}}>TG</span> <small>I.D.</small>
                    <Image src="/id-card.svg" alt="I.D. icon" width={40} height={40} style={{paddingTop: '8px', marginLeft: '-8px'}}/>
                </h1>
            </Link>
            <Nav mobileOpen={isMobileNavOpen} closeMobileNav={closeMobileNav}/>
            <button onClick={toggleMobileNav}>
                <Image src="/menu.svg" alt="Menu icon" width={32} height={32}/>
            </button>
        </div>
    );
}