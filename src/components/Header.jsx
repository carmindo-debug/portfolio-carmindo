
import { Link } from 'react-router-dom'
import './Header.css'
import logo from '../assets/logo-carmindo.svg'
import logoMobile from '../assets/logo-carmindovm.png'
function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <Link to="/" className="site-logo">
  <img
    className="site-logo-desktop"
    src={logo}
    alt="Carmindo Vasconcelos"
  />

  <img
    className="site-logo-mobile"
    src={logoMobile}
    alt="Carmindo Vasconcelos — UI/UX Designer e Front-End"
  />
</Link>

        <nav className="site-nav" aria-label="Navegação principal">
          <Link to="/">Início</Link>
          <Link to="/#sobre">Sobre</Link>
          <Link to="/#servicos">Serviços</Link>
          <Link to="/#projetos">Projetos</Link>

          <Link to="/#contato" className="header-cta">
  Vamos conversar →
</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
