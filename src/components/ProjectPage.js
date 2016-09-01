'use strict';

import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import ProjectMenu from './ProjectMenu';
import projects from '../data/projects';

export default class ProjectPage extends React.Component {
  render() {
    const id = this.props.params.id;
    const project = projects.filter((project) => project.id === id)[0];
    if (!project) {
      return <NotFoundPage/>;
    }
    return (
      <div className="container">
        <ProjectMenu/>
        <div >
          <div >
            <img src={`/img/${project.image}`}/>
            <h2>{project.name}</h2>
          </div>
        </div>
        <div>
          <Link to="/">« Back to the index</Link>
        </div>
      </div>
    );
  }
}
