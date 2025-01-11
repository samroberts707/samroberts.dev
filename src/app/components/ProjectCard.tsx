"use client";

import Link from "next/link";
import Image from "next/image";
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
// import { useGSAP } from '@gsap/react';

import "@/app/styles/components/ProjectCard.scss";

// if (typeof window !== 'undefined') {
//     gsap.registerPlugin(ScrollTrigger, useGSAP);
// }

export default function ProjectCard(
    {title, url, image, summary, type}:
    {title:string, url:string, image:string, summary: string, type: string}
) {

    // useGSAP(
    //     () => {
    //         const projectCard = document.querySelector
    //     }
    // )

    return (
        <div className="ProjectCard">
            <h5>{type}</h5>
            <Link href={url} className="image-wrapper" data-cursor-text="View">
                <Image className="project-image" src={image} alt={title} fill={true} />
            </Link>
            <h4>{title}</h4>
            <p>{summary}</p>
        </div>
    )
}