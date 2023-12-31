import  { createContext, useContext, useState } from 'react';


const ProjectDataContext = createContext();


export const useProjectData = () => {
  return useContext(ProjectDataContext);
};


// eslint-disable-next-line react/prop-types
export const ProjectDataProvider = ({ children }) => {
  const [projectData, setProjectData] = useState(null);

  return (
    <ProjectDataContext.Provider value={{ projectData, setProjectData }}>
      {children}
    </ProjectDataContext.Provider>
  );
};
