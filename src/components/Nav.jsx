import '../components/nav-style.css'
import logo from '../assets/logo.png'

const items = [
    { name: 'What to cook', link: '#' },
    { name: 'Recipes', link: '#' },
    { name: 'Ingredients', link: '#' },
    { name: 'Occasions', link: '#' },
    { name: 'About us', link: '#' }
]

var li_style = "list-none m-2"
var a_style = "decor-none"
var logo_style = "w-15 m-3"
var input_style = "ml-2.5 h-9 w-64 rounded-lg border-0 bg-[#e2eae9] px-2"
var button_style = "bg-pink-400 text-white h-10 rounded-lg px-5 border-0 rounded-2xl"

export default function Nav() {

    return (
        <nav className='flex justify-center items-center border-b border-gray-300 shadow'>  
            <div id="logo-part">
                <img className={logo_style} src={logo} alt="Logo" id="logo" />
                <h2 id="logo-text" className="font-sans font-bold text-2xl text-pink-500 mx-1">Chefify</h2>
                <input className={input_style} type="text" id="search" placeholder="Search..." />
            </div>

            <div className='flex'>
                {
                    items.map((item) => (
                        <li className={li_style}><a className={a_style} href={
                            item.link
                        }>{item.name}</a></li>
                    ))
                }
            </div>

            <div id="box-part">
                <button className={button_style}>Your Recipe Box</button>
            </div>
        </nav>
    )
}