import AirbnbLogo from "../images/airbnb-logo.png"
function Navbar() {
    return (
        <nav>
            <img src = {AirbnbLogo} alt="airbnb_logo" className="nav--logo"/>
            <div className="nav--right">
                <a href="#" className="nav--right--text">Airbnb your place</a>
                <a href="#" className="nav--right--text">Sign up</a>
            </div>
        </nav>
        
    )
}
export default Navbar;