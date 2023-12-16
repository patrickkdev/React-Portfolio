/* eslint-disable @next/next/no-img-element */
import { ChevronRight, GitHub, Lock, LockOpen, LockOutlined } from '@mui/icons-material';
import { Button, Divider, Tooltip } from '@mui/material';
import React from 'react'

export interface Project {
  accentColor: string;
  title: string;
  image: string;
  techStack: string[];
  description: string;
  link: string;
  githubLink?: string;
  visibility: "public" | "private";
}

const ProjectDisplay = ({project, index}: {project: Project, index: number}) => {

  return (
    <div className="project-display">
      <div className="project-display__content__container">
        <div className="project-display__content">
          <div className='project-display__content_info'>
            <h1>{project.title}</h1>
            <div className='project-display__content_info__visibility'>
              <p>{project.visibility === "public" ? "Repositório Público" : "Repositório Privado"}</p>
              {
                project.visibility === "private" &&
                <LockOutlined />
              }
            </div>
            <p style={{color: project.accentColor}} >
            {
              project.techStack.join(", ")
            }
            </p>
            <p>{project.description}</p>
            <Button sx={{backgroundColor: project.accentColor}} variant="contained" href={project.link} target="_blank" rel="noreferrer" endIcon={<ChevronRight />}>Conhecer</Button>
            {
              project.visibility !== "private" &&
              <Tooltip title={project.visibility === "public" ? "Repositório Público" : "Repositório Privado"} sx={{pointerEvents: "hover"}}>
                <Button sx={{opacity: project.visibility === "public" ? 1 : 0.3}} color="inherit" variant="contained" { ...project.visibility === "public" ? {href: project.githubLink, target:"_blank", rel:"noreferrer"} : {}} endIcon={<GitHub />}>
                  Github
                </Button>
              </Tooltip>
            }
          </div>
        </div>
        <div className='project-display__image' style={{backgroundColor: project.accentColor}}>
          <img src={`/projects/${project.image}`} alt={project.title} />
        </div>
      </div>
    </div>
  )
}

export default ProjectDisplay