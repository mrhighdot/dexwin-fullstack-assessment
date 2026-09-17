import { useEffect, useState } from 'react';
import { getProjects, updateTaskStatus } from '../api/client';


export default function ProjectList({ selectedProjectId, onSelect }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then(setProjects);
  }, []);

  const handleSelectedProject =async (id, status)=>{
      const response = await updateTaskStatus(id, status)
      if (!response) {
        return <span>Project Status cannot be updated</span>
      }

      return response.status
  }


  return (
    <div className="project-list">
      {projects.map((project) => (
        <button
          type="button"
          key={project.id}
          className={
            'project-item' + (project.id === selectedProjectId ? ' active' : '')
          }
          onClick={() => onSelect(project.id)}
        >
          <span className="project-name">{project.name}</span>
          {project.description && (
            <span className="project-desc">{project.description}</span>
          )}
        </button>
      ))}
    </div>
  );
}
