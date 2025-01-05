import "@/app/styles/pages/Homepage.scss";

import Link from "next/link";

import { formatDate, getProjectPosts } from '@/app/projects/utils';
import ParallaxArtwork from "./components/Parallax-Artwork";
import Project from "@/app/components/Project";

export default function Homepage() {

  const allProjects = getProjectPosts()
  
  return (
    <div className="Homepage">
      <div className="Landing">
        <div className="container">
          <div className="content">
            <h4>Hello there,</h4>
            <h1><strong>I&apos;m Sam</strong></h1>
            <p>I&apos;m a Lead Web Developer, living in London.</p>
            <p>I work for <Link href="https://www.nucreative.co.uk" target="_blank" rel="noreferrer">NU Creative</Link>, a creative agency based in London Bridge.</p>
          </div>
        </div>
      </div>
      <ParallaxArtwork />
      <div className="Projects">
        <div className="container">
          <div className="title-layout">
            <h2>Projects</h2>
            <h6><Link href="/projects">View all projects</Link></h6>
          </div>
          <div className="project-grid">
            {allProjects
              .sort((a, b) => {
                if (
                  new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
                ) {
                  return -1
                }
                return 1
              })
              .slice(0,3)
              .map((post) => (
                <div className="project-wrapper" key={post.slug}>
                  <Project title={post.metadata.title} url={`/projects/${post.slug}`} image={post.metadata.image} summary={post.metadata.summary} type={post.metadata.type} />
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
