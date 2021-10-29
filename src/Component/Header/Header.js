import Navbar from "./Navbar"

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src="https://www.achieversit.com/assets/images/logo-white.png" alt="AchieversIT_logo" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
     <Navbar/>
  </div>
</nav>
        </div>
    )
}

export default Header
