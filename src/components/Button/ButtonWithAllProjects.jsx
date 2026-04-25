import { Link } from 'gatsby'
import React from 'react'

function ButtonWithAllProjects() {
  return (
    <div>
        <Link className='btn btn-primary projects-btn' to="/portfolio/">VIEW ALL PROJECTS</Link>
    </div>
  )
}

export default ButtonWithAllProjects