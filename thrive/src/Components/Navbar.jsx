import { Link } from "react-router-dom"

function Navbar() {

return(
  <div className="navbar">
    <h1>Tribe </h1>
    <button><Link to="/home">Home</Link></button>
    <button ><Link to="/goals" >Goals</Link></button>
    <button ><Link to="/community">Community</Link></button>
  </div>
)
}

export default Navbar
