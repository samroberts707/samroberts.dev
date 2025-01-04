"use client";

import Link from "next/link";
import Image from "next/image";

import "@/app/styles/components/Project.scss";

export default function Project({title, url, image}:{title:string, url:string, image:string}) {
    return (
        <div className="Project">
            <Link href={url} className="image-wrapper" data-cursor-text="Open">
                <Image className="project-image" src={image} alt="Project Name" fill={true} />
            </Link>
            <h4>{title}</h4>
        </div>
    )
}