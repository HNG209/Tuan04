import logo from '../assets/image.png'

const Footer = () => {
    return (
      <footer style={{ color: 'white', textAlign: 'center', display: 'flex', justifyContent: 'space-between', padding: '20px', backgroundColor: '#1D2228' }}>
        <div className='left' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '45%' }}>
          <h3>About us</h3>
          <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro</p>
          <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            <input type="text" placeholder='enter your email' style={{ height: '30px', width: '100%', marginRight: '10px', borderRadius: '5px' }} />
            <button style={{ height: '30px', backgroundColor: 'deeppink', color: 'white', border: 'none', padding: '0 20px' }}>Send</button>
          </div>
        </div>
        <div className='right' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '45%' }}>
          <img src={logo} alt="Logo" style={{ width: '100px', marginBottom: '10px' }} />
          <p>Contact us: info@website.com</p>
          <p>Follow us on social media</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  