import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa"
import logo from "../assets/fritzlogo.png"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="/" arial-label="Home">
                <img src={logo} className="mx-2" width={50} height={33} 
                alt="Logo" />
            </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/fritz-cuasay-77420731b/"
                target="_blank"
                rel="noopener noreffer"
                aria-label="LinkedIn"> 
                    <FaLinkedin/>
            </a>
            <a href="https://github.com/"
                target="_blank"
                rel="noopener noreffer"
                aria-label="GitHub"> 
                    <FaGithub/>
            </a>
            <a href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreffer"
                aria-label="Instagram"> 
                    <FaInstagram/>
            </a>
            <a href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreffer"
                aria-label="Facebook"> 
                    <FaFacebook/>
            </a>    
        </div>
    </nav>
  )
}

export default Navbar