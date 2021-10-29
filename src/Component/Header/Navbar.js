import styles from './navbar.module.css'
function Navbar() {
    return (
        <div>
            <div className="collapse navbar-collapse " id="navbarNavDropdown">
      <ul className="navbar-nav ">
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-light hover-danger" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            ALL COURSES
          </a>
          <ul className="dropdown-menu text-light" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item " href="#">FRONT END COURSES</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a className="dropdown-item " href="#">FULL STACK COURSES</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">MOBILE APPLICATION DEVELOPMENT</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">CLOUD COMPUTING</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">DIGITAL MARKETING COURSES</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">DATA SCIENCE</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">ARTIFICIAL INTEL</a></li>
            <li><hr class="dropdown-divider"/></li>
          </ul>
        </li>
        <li className="nav-item ">
          <a className="nav-link active text-light" aria-current="page" href="#">CORPORATE TRAINING</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">PLACEMENTS PAGE</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">REVIEWS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">BLOG</a>
        </li>
      </ul>
    </div>
        </div>
    )
}

export default Navbar
