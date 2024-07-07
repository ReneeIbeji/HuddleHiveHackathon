import { Link } from "react-router-dom"
import "../CSS/Navbar.css"

function Navbar() {

return(
  <div>
    <p>                           
      <img src="./Assets/Logo.png"></img>
    </p>
  <div className="navbar" id="navbar">
    <button><Link to="/home">Home</Link></button>
    <button ><Link to="/community">Community</Link></button>
  </div>
  </div>
)
}

export default Navbar
