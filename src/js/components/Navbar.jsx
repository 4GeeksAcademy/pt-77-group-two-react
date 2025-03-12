import React from "react";

const Navbar = (props) =>{
    return(
        <div className="text-center">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">{[props.title]}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span class="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Trending</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Upcoming</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Genre
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Magic</a>
          <a className="dropdown-item" href="#">Shounen</a>
          <a className="dropdown-item" href="#">Sports</a>
          <a className="dropdown-item" href="#">Cooking</a>
          <a className="dropdown-item" href="#">Fantasy</a>
          <a className="dropdown-item" href="#">Romance</a>
          <a className="dropdown-item" href="#">Adventure</a>
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Sci-Fi</a>
          <a className="dropdown-item" href="#">Samurai</a>
          <a className="dropdown-item" href="#">Comedy</a>
          <a className="dropdown-item" href="#">Space</a>
          <a className="dropdown-item" href="#">Martial Arts</a>
        </div>
      </li>
    </ul>
  </div>
</nav>

        </div>
    )
};

export default Navbar