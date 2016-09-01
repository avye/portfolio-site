'use strict';

import React from 'react';
import { Link } from 'react-router';
import projects from '../data/projects';

export default class ProjectMenu extends React.Component {
  render() {
    return (
      <nav>
        {projects.map(menuProject => {
          return <Link key={menuProject.id} to={`/project/${menuProject.id}`} activeClassName="active">
            {menuProject.name}
          </Link>;
        })}
      </nav>
    );
  }
}
