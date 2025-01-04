import "@/app/styles/pages/Homepage.scss";
import Link from "next/link";

import ParallaxArtwork from "./components/Parallax-Artwork";
import Project from "@/app/components/Project";

export default function Homepage() {
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
            <div className="project-wrapper">
              <h5>Freelance</h5>
              <Project title="WearNow" url="/projects/wearnow" image="https://picsum.photos/300/?blur=1" />
            </div>
            <div className="project-wrapper">
              <h5>Work</h5>
              <Project title="Keating Chambers" url="/projects/keating-chambers" image="https://picsum.photos/300/?blur=1" />
            </div>
            <div className="project-wrapper">
              <h5>Personal</h5>
              <Project title="Advent Of Code" url="/projects/advent-of-code" image="https://picsum.photos/300/?blur=1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
