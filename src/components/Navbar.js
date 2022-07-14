import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">{props.item1}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.item2}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.item3}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.item4}</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Type here to search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {
title: PropTypes.string.isRequired, 
item1: PropTypes.string,
item2: PropTypes.string,
item3: PropTypes.string,
item4: PropTypes.string
}


Navbar.defaultProps = {title : "titleHere", item1 : "item1", item2 : "item2"}