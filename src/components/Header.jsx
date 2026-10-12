
import { Link } from 'react-router-dom'
import './Header.css'
import logo from '../assets/logo-carmindo.svg'

function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <Link to="/" className="site-logo">
          <img src={logo} alt="Carmindo Vasconcelos" />
        </Link>

        <nav className="site-nav" aria-label="Navegação principal">
          <Link to="/">Início</Link>
          <Link to="/#sobre">Sobre</Link>
          <Link to="/#servicos">Serviços</Link>
          <Link to="/#projetos">Projetos</Link>

          <a
            href="https://wa.me/5521970217293?text=Ol%C3%A1%21%20Conheci%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto%20de%20design%20ou%20desenvolvimento%20web."
            className="header-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vamos conversar →
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
