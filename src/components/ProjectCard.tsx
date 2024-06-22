import React, { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { getTechIcon } from "../utils/getTechIcon";
import Expanding from "../utils/expanding";

interface ProjectCardProps {
  title: string;
  description: ReactNode;
  technologies: string[];
  projectLink: string;
  imageUrl: string;
  githubLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  projectLink,
  imageUrl,
  githubLink,
}) => {
  return (
    <div className="relative max-w-[90%] w-96 rounded border-2 border-primary h-fit min-h-[700px] shadow-md bg-white/40 text-left">
      <img
        className="w-full h-48 object-cover hover:opacity-90 hover:blur-[2px] cursor-pointer transition duration-200"
        onClick={() => window.open(projectLink)}
        src={imageUrl}
        alt={`${title} screenshot`}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 flex justify-between items-center">
          {title}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
          )}
        </div>
        <Expanding>{description}</Expanding>
      </div>
      <div className="px-6 pt-4  mb-12 pb-2 flex flex-wrap items-center align-middle ">
        {technologies.map((tech, index) => {
          const icon = getTechIcon(tech);
          return (
            <span
              key={index}
              className="flex w-fit h-7 bg-primary/20 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {icon && getTechIcon(tech)}
              {tech}
            </span>
          );
        })}
      </div>
      <div className=" absolute bottom-2 px-6 pb-4">
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/50 font-semibold"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
