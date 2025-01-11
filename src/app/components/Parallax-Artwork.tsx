"use client";

import Image from "next/image";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function ParallaxArtwork() {

    useGSAP(
        () => {
            const backgroundArt = document.querySelector('.ParallaxArtwork .artwork-back');
            gsap.fromTo(
                // Element
                backgroundArt,
                // From
                {
                    translateY: '15%'
                },
                // To
                {
                    translateY: '-2%',
                    scrollTrigger: {
                        trigger: '.ParallaxArtwork',
                        scrub: 0.5,
                        start: "top 85%",
                        // markers: true
                    }
                }
            )
        }
    )

    return (
        <div className="ParallaxArtwork">
            <Image src={'/images/Artwork-Back.png'} className="artwork-back" fill={true} alt="Developer working illustration" />
            <Image src={'/images/Artwork-Front.png'} className="artwork-front" fill={true} alt="Front wall of house illustration" />
        </div>
    )
}