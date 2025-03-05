import '../components/nav-style.css'
import logo from '../assets/logo.png'

export default function Nav() {

    return (
        <nav>
            <div id="logo-part">
                <img src={logo}  alt="" id="logo" />
                <h2 id="logo-text">Chefify</h2>
                <input type="text" name="" id="search" />
            </div>

            <div id="item">
                <li><a href="">What to cook</a></li>
                <li><a href="">Recipes</a></li>
                <li><a href="">Ingredients</a></li>
                <li><a href="">Occassions</a></li>
                <li><a href="">About us</a></li>
            </div>

            <div id="box-part">
                <button>Your Recipe Box</button>

            </div>
        </nav>
    )
}