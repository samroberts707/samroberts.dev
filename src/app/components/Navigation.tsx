"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {

    const [navOpen, setNavOpen] = useState(false);
    const [scrollNav, setScrollNav] = useState(false);

    const handleNavToggle = () => {
        setNavOpen(!navOpen);
    }


    const handleScroll = () => {
        if(scrollY >= 120) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    });

    return (
    <nav id="Navigation" className={`
            ${navOpen ? 'open' : ''}
            ${scrollNav ? 'scrolled' : ''}`}>
        <Link href="/">
            <Image
                className="logo"
                src={'/images/logo-xanthous.svg'}
                width={150}
                height={80}
                alt='Sam Roberts'
            />
        </Link>
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
                <h4><Link href="/projects">Projects</Link></h4>
                <h4><Link href="/">Contact</Link></h4>
            </div>
            <div className='links'>

            </div>
        </div>
    </nav>
    )
}