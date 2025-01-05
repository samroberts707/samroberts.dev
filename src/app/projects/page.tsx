import "@/app/styles/pages/Projects.scss";

import { formatDate, getProjectPosts } from '@/app/projects/utils';
import Project from "@/app/components/Project";

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
                        <Project title={post.metadata.title} url={`/projects/${post.slug}`} image={post.metadata.image} summary={post.metadata.summary} type={post.metadata.type} />
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}