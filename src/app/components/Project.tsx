"use client";

import Link from "next/link";
import Image from "next/image";

import "@/app/styles/components/Footer.scss";

export default function Project(
    {title, url, image}:
    {title:string, url:string, image:string}
) {
    return (
        <div className="Project">
            <Link href={''} className="image-wrapper" data-cursor-text="Coming Soon">
                <Image className="project-image" src={image} alt={title} fill={true} />
            </Link>
            <h4>{title}</h4>
        </div>
    )
}