import React from 'react';
import UsermanagementHeader from "../components/adminDashboard/userManagement/UsermanagementHeader";
import notification from '../assets/notification.svg';
import ProjectOverview from '../components/adminDashboard/projects/ProjectOverview';
import AllProjectsTable from '../components/adminDashboard/projects/AllProjectsTable';


const Projects = () => {
  return (
    <>
      <UsermanagementHeader
        title="Project Management"
        text="Track, manage and oversee all investment projects with ease."
        img={<img src={notification} alt="bell" />}
      />
      <ProjectOverview />
      <AllProjectsTable/>
    </>
  );
}

export default Projects