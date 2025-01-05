"use client";

import Link from "next/link";
import Image from "next/image";

import "@/app/styles/components/Footer.scss";

export default function Project(
    {title, url, image, summary, type}:
    {title:string, url:string, image:string, summary: string, type: string}
) {
    return (
        <div className="Project">
            <h5>{type}</h5>
            <Link href={url} className="image-wrapper" data-cursor-text="View">
                <Image className="project-image" src={image} alt={title} fill={true} />
            </Link>
            <h4>{title}</h4>
            <p>{summary}</p>
        </div>
    )
}