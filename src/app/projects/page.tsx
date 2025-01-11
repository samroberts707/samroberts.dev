import "@/app/styles/pages/Projects.scss";

import { formatDate, getProjectPosts } from '@/app/projects/utils';
import ProjectCard from "@/app/components/ProjectCard";

export default function Projects() {

    const allProjects = getProjectPosts()

    return (
        <div className="Projects page">
            <div className="container">
                <div className="content">
                    <h1>Projects</h1>
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
                    .map((post) => (
                    <div className="project-wrapper" key={post.slug}>
                        <ProjectCard title={post.metadata.title} url={`/projects/${post.slug}`} image={post.metadata.image} summary={post.metadata.summary} type={post.metadata.type} />
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}