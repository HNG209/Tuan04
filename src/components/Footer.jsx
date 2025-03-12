import logo from '../assets/image.png'

var footer_style = "text-white text-center flex justify-between p-20 bg-[#1D2228]"

const Footer = () => {
    return (
      <footer className={footer_style}>
      <div className="left flex flex-col items-center w-2/5">
        <h3>About us</h3>
        <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro</p>
        <div className="flex items-center w-full">
        <input type="text" placeholder="enter your email" className="h-8 w-full mr-2 rounded" />
        <button className="h-8 bg-pink-500 text-white border-none px-5">Send</button>
        </div>
      </div>
      <div className="right flex flex-col items-center w-2/5">
        <img src={logo} alt="Logo" className="w-24 mb-2" />
        <p>Contact us: info@website.com</p>
        <p>Follow us on social media</p>
        <div className="flex justify-center gap-2">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
      </footer>
    );
  };
  
  export default Footer;
  