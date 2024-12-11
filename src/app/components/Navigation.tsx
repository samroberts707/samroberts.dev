"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {

    const [navOpen, setNavOpen] = useState(false);

    const handleNavToggle = () => {
        setNavOpen(!navOpen);
    }

    return (
    <nav id="Navigation" className={navOpen ? 'open' : ''}>
        <div className="hamburger" onClick={handleNavToggle} data-cursor-text="Menu">
            <div className="bar one" />
            <div className="bar two" />
            <div className="bar three" />
        </div>
        <div className="menu">
            <h6>Menu</h6>
            <div className='items'>
                <h4><Link href="/">Home</Link></h4>
                <h4><Link href="/">About</Link></h4>
                <h4><Link href="/">Projects</Link></h4>
                <h4><Link href="/">Contact</Link></h4>
            </div>
            <div className='links'>

            </div>
        </div>
    </nav>
    )
}