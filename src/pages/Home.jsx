import { Link } from 'react-router-dom'
import suzanaCarvFeatured from '../assets/suzana-carv-featured.png'
import suzanaCarvProject from '../assets/suzana-carv-project.png'
import fichaAnamneseProject from '../assets/ficha-anamnese-project.png'
import fakeStoreProject from '../assets/fake-store-project.png'
import suzanaCarvUIUXProject from '../assets/suzana-carv-uiux-project.png'
import './Home.css'
function Home() {
  return (
    <main className="home-page">
      <section className="hero-section">
  <div className="container hero-container">
    <div className="hero-content">
      <span className="hero-label">
        UI/UX DESIGN · FRONT-END
      </span>

      <h1>
        Transformo ideias em experiências digitais claras, funcionais e bem construídas.
      </h1>

      <p>
        Design de interfaces e desenvolvimento front-end para criar produtos
        digitais com propósito.
      </p>

      <div className="hero-actions">
        <a href="#projetos">Ver projetos</a>
        <a href="#contato">Vamos conversar</a>
      </div>
    </div>

    <div className="hero-visual">
  <img
    src={suzanaCarvFeatured}
    alt="Preview do projeto Suzana Carv"
  />
</div>
  </div>
</section>

      <section id="projetos" className="section featured-project-section">
  <div className="container">
    <div className="section-heading">
      <h2>Projeto em destaque</h2>
      <p>
        Um projeto que conecta estratégia, design e desenvolvimento em uma
        experiência digital completa.
      </p>
    </div>

    <article className="featured-project">
      <div className="featured-project-image">
        <img
          src={suzanaCarvProject}
          alt="Preview do projeto Suzana Carv"
        />
      </div>

      <div className="featured-project-content">
        <span className="featured-project-label">
          PROJETO EM DESTAQUE
        </span>

        <h3>Suzana Carv</h3>

        <p>
          UI/UX no Figma, desenvolvimento front-end em React e publicação
          de uma experiência digital completa.
        </p>

        <div className="featured-project-meta">
          Web Design · React · Figma
        </div>

        <Link to="/projetos/suzana-carv" className="featured-project-button">
          Ver projeto →
        </Link>
      </div>
    </article>
  </div>
</section>
<section id="projetos" className="section selected-projects-section">
  <div className="container">
    <div className="section-heading">
      <h2>Projetos selecionados</h2>
    </div>

    <div className="selected-projects-grid">
      <article className="selected-project-card">
        <div className="selected-project-image">
          <img
            src={fichaAnamneseProject}
            alt="Preview do projeto Ficha de Anamnese"
          />
        </div>

        <div className="selected-project-content">
          <h3>Ficha de Anamnese</h3>

          <p>
            Aplicação web para preenchimento e gerenciamento de fichas de
            anamnese.
          </p>

          <Link
            to="/projetos/ficha-anamnese"
            className="selected-project-button"
          >
            Ver projeto →
          </Link>
        </div>
      </article>

      <article className="selected-project-card">
        <div className="selected-project-image">
          <img
            src={fakeStoreProject}
            alt="Preview do projeto Fake Store"
          />
        </div>

        <div className="selected-project-content">
          <h3>Fake Store</h3>

          <p>
            E-commerce internacional desenvolvido em React, com catálogo de
            produtos e fluxo de compra.
          </p>

          <Link
            to="/projetos/fake-store"
            className="selected-project-button"
          >
            Ver projeto →
          </Link>
        </div>
      </article>

      <article className="selected-project-card">
        <div className="selected-project-image">
          <img
            src={suzanaCarvUIUXProject}
            alt="Preview do projeto Suzana Carv UI/UX Figma"
          />
        </div>

        <div className="selected-project-content">
          <h3>Suzana Carv — UI/UX Figma</h3>

          <p>
            Projeto de UI/UX desenvolvido no Figma, com foco em estrutura,
            navegação e experiência do usuário.
          </p>

          <Link
            to="/projetos/suzana-carv-uiux"
            className="selected-project-button"
          >
            Ver projeto →
          </Link>
        </div>
      </article>
    </div>
  </div>
</section>
      <section id="servicos" className="section services-section">
  <div className="container">
    <div className="section-heading">
      <h2>Serviços</h2>
      <p>
        Soluções digitais pensadas para transformar ideias em experiências
        funcionais, claras e profissionais.
      </p>
    </div>

    <div className="services-grid">
      <article className="service-card">
        <span className="service-number">01</span>
        <h3>UI/UX Design</h3>
        <p>
          Criação de interfaces intuitivas, wireframes e protótipos focados na
          experiência do usuário.
        </p>
      </article>

      <article className="service-card">
        <span className="service-number">02</span>
        <h3>
  Desenvolvimento <span>Front-end</span>
</h3>
        <p>
          Desenvolvimento de interfaces responsivas e funcionais com React e
          tecnologias modernas.
        </p>
      </article>

      <article className="service-card">
        <span className="service-number">03</span>
        <h3>Web Design</h3>
        <p>
          Criação de experiências digitais com foco em estrutura, navegação,
          estética e usabilidade.
        </p>
      </article>

      <article className="service-card">
        <span className="service-number">04</span>
        <h3>E-commerce</h3>
        <p>
          Criação de lojas virtuais com catálogo, navegação intuitiva e fluxo
          de compra.
        </p>
      </article>
    </div>
  </div>
</section>

      <section id="sobre" className="section about-section">
  <div className="container about-container">
    <div className="about-content">
      <h2>Sobre mim</h2>

      <p>
        Sou designer e desenvolvedor front-end, com foco em criar interfaces
        digitais claras, funcionais e centradas no usuário. Trabalho da
        concepção visual no Figma ao desenvolvimento em React, transformando
        ideias em experiências digitais completas.
      </p>
    </div>

    <div className="about-highlights">
      <div className="about-highlight">
        <h3>Design + Código</h3>
      </div>

      <div className="about-highlight">
        <h3>UI/UX no Figma</h3>
      </div>

      <div className="about-highlight">
        <h3>Desenvolvimento front-end em React</h3>
      </div>
    </div>
  </div>
</section>

      
<section id="contato" className="section contact-section">
  <div className="container contact-container">
    <h2>Entre em contato</h2>

    <p>
      Tem um projeto em mente? Vamos conversar sobre como transformar sua ideia
      em uma experiência digital clara, funcional e bem construída.
    </p>

    <a
      href="https://wa.me/5521970217293?text=Ol%C3%A1%21%20Conheci%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto%20de%20design%20ou%20desenvolvimento%20web."
      className="contact-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      Vamos conversar pelo WhatsApp →
    </a>

    <p className="contact-email">
      Prefere e-mail?{" "}
      <a href="mailto:cvdesignerfrontend@gmail.com">
        cvdesignerfrontend@gmail.com
      </a>
    </p>
  </div>
</section>

    </main>
  )
}

export default Home