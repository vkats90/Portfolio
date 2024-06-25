import React, { useEffect } from 'react'
import ProjectCard from '../components/ProjectCard'
import Shackleton from '../assets/Shackleton.jpg'
import Shinobi from '../assets/Shinobi.jpg'
import API from '../assets/API.webp'

const projects = [
  {
    title: 'Shackelton - Portal for Tabletop Game',
    period: 'Jan 2024 - Present',
    company: 'Mobile Escape',
    description: (
      <div>
        <p>
          Developed an interactive online portal for a tabletop game using TypeScript and React.js.
          The project leverages the latest features of React 18, including:
        </p>
        <ul className="list-disc ml-5">
          <li>
            Code Splitting: Utilized Suspense and lazy loading to improve performance and optimize
            resource usage.
          </li>
          <li>
            Hooks: Implemented fundamental hooks like useState, useEffect, and custom hooks to
            manage component state and side effects efficiently.
          </li>
          <li>
            Context API: Used React Context for state management to enable seamless data sharing
            across components.
          </li>
          <li>
            Tailwind CSS: Enhanced the UI with Tailwind CSS, creating a modern and responsive design
            on desktop and mobile.
          </li>
          <li>The application is deployed on SiteGround.</li>
        </ul>
        <p>
          This project showcases my proficiency in modern frontend development and my ability to
          build dynamic, responsive web applications.
        </p>
      </div>
    ),

    projectLink: 'https://playtheescapemail.com/shackleton/ep1/',
    githubLink: '',
    technologies: ['TypeScript', 'React', 'TailwindCSS'],
    imageUrl: Shackleton,
  },
  {
    title: 'Shinobi - Portal for Tabletop Game',
    period: 'Jan 2024 - Present',
    company: 'Mobile Escape',
    description: (
      <div>
        <p>
          Developed an interactive online portal for a tabletop game using TypeScript and React.js.
          The project leverages the latest features of React 18, including:
        </p>
        <ul className="list-disc ml-5">
          <li>
            Code Splitting: Utilized Suspense and lazy loading to improve performance and optimize
            resource usage.
          </li>
          <li>
            Hooks: Implemented fundamental hooks like useState, useEffect, and custom hooks to
            manage component state and side effects efficiently.
          </li>
          <li>
            Context API: Used React Context for state management to enable seamless data sharing
            across components.
          </li>
          <li>
            Tailwind CSS: Enhanced the UI with Tailwind CSS, creating a modern and responsive design
            on desktop and mobile.
          </li>
          <li>The application is deployed on SiteGround.</li>
        </ul>
        <p>
          This project showcases my proficiency in modern frontend development and my ability to
          build dynamic, responsive web applications.
        </p>
      </div>
    ),
    projectLink: 'https://playtheescapemail.com/shackleton/ep1/',
    githubLink: '',
    technologies: ['TypeScript', 'React', 'TailwindCSS'],
    imageUrl: Shinobi,
  },
  {
    title: 'Inventory Management API',
    period: 'Jan 2024 - Present',
    company: '',
    description: (
      <div>
        <p>
          Developed a comprehensive inventory management API using TypeScript, GraphQL, and MongoDB.
          This backend project features:
        </p>
        <ul className="list-disc ml-5">
          <li>
            Finished Inventory Management: Endpoints for managing completed products, allowing for
            efficient tracking and updates of inventory levels.
          </li>
          <li>
            Unfinished Inventory Management: Endpoints for handling parts and pieces, enabling
            detailed tracking of inventory components and assembly status.
          </li>
          <li>
            User Management: Robust user management endpoints, providing functionalities for user
            authentication, authorization, and profile management.
          </li>
          <li>
            Utilized GraphQL to create a flexible and efficient API, enabling users to query exactly
            the data they need.
          </li>
          <li>
            Integrated MongoDB for scalable and high-performance data storage. Implemented unit
            tests using Jest to ensure code reliability and maintainability.
          </li>
        </ul>
        <p>
          This project demonstrates my capability to build powerful and scalable backend solutions
          with modern technologies and a strong focus on quality assurance.
        </p>
      </div>
    ),
    projectLink: '',
    githubLink: 'https://github.com/vkats90/Inventory-Manager',
    technologies: ['TypeScript', 'GraphQL', 'MongoDB', 'Jest'],
    imageUrl: API,
  },
]

const Projects: React.FC = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="z-0 items-center h-full py-8 text-center">
      <h1 id="outer">
        <h1
          id="inner"
          className="effect-shine md:text-6xl text-5xl md:my-32 my-16 text-black font-Bebas "
        >
          MAJOR PROJECTS
        </h1>
      </h1>
      <div className="flex flex-wrap justify-center gap-5">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
}

export default Projects
