import { Link } from "react-router-dom"

function Navbar() {

return(
  <div className="navbar">
    <p>
      <img src="./Assets/Logo.png"></img>
    </p>
    <button><Link to="/home">Home</Link></button>
    <button ><Link to="/community">Community</Link></button>
  </div>
)
}

export default Navbar
