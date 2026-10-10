
import "./SuzanaCarvUIUX.css";
import suzanaCarvUIUXHero from "../../assets/suzana-carv-uiux-hero.png";
import suzanaCarvUIUXSections1 from "../../assets/suzana-carv-uiux-sections1.png";
import suzanaCarvUIUXSections2 from "../../assets/suzana-carv-uiux-sections2.png";
import suzanaCarvUIUXBlogContact from "../../assets/suzana-carv-uiux-blog-contact.png";
function SuzanaCarvUIUX() {
  return (
    <main className="uiux-case-page">
      <section className="uiux-case-hero">
        <div className="uiux-case-container">
          <span className="uiux-case-eyebrow">
            ESTUDO DE CASO · UI/UX DESIGN
          </span>

          <h1>Suzana Carv — UI/UX Design</h1>

          <p className="uiux-case-intro">
            Projeto de design de interface desenvolvido no Figma para a
            presença digital da Suzana Carv, com foco na identidade visual,
            na organização das informações e na experiência do usuário.
          </p>
        </div>
      </section>

      
<section className="uiux-case-showcase">
  <div className="uiux-case-container">
    <div className="uiux-case-showcase-heading">
      <span className="uiux-case-section-label">
        TELA 01 · BLOG
      </span>

      <h2>Design da página do blog</h2>

      <p>
        Composição da interface com identidade visual da marca,
        navegação principal e destaque para os conteúdos de beleza.
      </p>
    </div>

    <figure className="uiux-case-showcase-figure">
      <div className="uiux-case-showcase-image">
        <img
          src={suzanaCarvUIUXHero}
          alt="Tela do blog da Suzana Carv, com cabeçalho de navegação, fotografia principal e chamada para conteúdos de beleza."
        />
      </div>

      <figcaption>
        Tela do blog — apresentação visual, navegação e hierarquia
        das informações.
      </figcaption>
    </figure>
  </div>
</section>
<section className="uiux-case-showcase uiux-case-section-preview">
  <div className="uiux-case-container">
    <div className="uiux-case-showcase-heading">
      <span className="uiux-case-section-label">
        TELA 02 · QUEM SOU
      </span>

      <h2>Apresentação da profissional</h2>

      <p>
        Uma seção dedicada à trajetória da profissional e ao propósito
        da marca, criando uma conexão mais pessoal com as clientes.
      </p>
    </div>

    <figure className="uiux-case-showcase-figure">
      <div className="uiux-case-showcase-image">
        <img
          src={suzanaCarvUIUXSections1}
          alt="Tela Quem sou do projeto Suzana Carv, com fotografia da profissional e texto sobre sua trajetória e propósito."
        />
      </div>

      <figcaption>
        Tela Quem sou — apresentação da profissional e valorização
        da identidade da marca.
      </figcaption>
    </figure>
  </div>
</section>

<section className="uiux-case-showcase uiux-case-section-preview">
  <div className="uiux-case-container">
    <div className="uiux-case-showcase-heading">
      <span className="uiux-case-section-label">
        TELA 03 · PROCEDIMENTOS
      </span>

      <h2>Apresentação dos procedimentos</h2>

      <p>
        Composição visual dedicada à apresentação dos serviços,
        valorizando a fotografia, a mensagem de acolhimento e a
        experiência oferecida pela marca.
      </p>
    </div>

    <figure className="uiux-case-showcase-figure">
      <div className="uiux-case-showcase-image">
        <img
          src={suzanaCarvUIUXSections2}
          alt="Tela de procedimentos do projeto Suzana Carv, com título em destaque, texto de apresentação e fotografia."
        />
      </div>

      <figcaption>
        Tela de procedimentos — destaque visual dos serviços e
        comunicação da proposta de atendimento.
      </figcaption>
    </figure>
  </div>
</section>

<section className="uiux-case-showcase uiux-case-section-preview">
  <div className="uiux-case-container">
    <div className="uiux-case-showcase-heading">
      <span className="uiux-case-section-label">
        TELA 04 · BLOG E CONTATO
      </span>

      <h2>Conteúdo e canais de comunicação</h2>

      <p>
        Organização dos conteúdos do blog e apresentação dos canais
        de comunicação da marca, facilitando o acesso às informações
        e às formas de contato.
      </p>
    </div>

    <figure className="uiux-case-showcase-figure">
      <div className="uiux-case-showcase-image">
        <img
          src={suzanaCarvUIUXBlogContact}
          alt="Tela do projeto Suzana Carv com cards do blog, redes sociais e área de contato."
        />
      </div>

      <figcaption>
        Tela de blog e contato — organização de conteúdos e canais
        de comunicação com as clientes.
      </figcaption>
    </figure>
  </div>
</section>

      <section className="uiux-case-overview">
        <div className="uiux-case-container uiux-case-overview-grid">
          <div className="uiux-case-overview-item">
            <span>PROJETO</span>
            <p>Suzana Carv</p>
          </div>

          <div className="uiux-case-overview-item">
            <span>ÁREA</span>
            <p>UI/UX Design</p>
          </div>

          <div className="uiux-case-overview-item">
            <span>FERRAMENTA</span>
            <p>Figma</p>
          </div>

          <div className="uiux-case-overview-item">
            <span>ENTREGA</span>
            <p>Design de interface</p>
          </div>
        </div>
      </section>

      <section className="uiux-case-section">
        <div className="uiux-case-container uiux-case-challenge-grid">
          <article>
            <span className="uiux-case-section-label">01 / DESAFIO</span>
            <h2>Como apresentar a marca no ambiente digital?</h2>
            <p>
              O desafio foi estruturar uma experiência visual que transmitisse
              profissionalismo e valorizasse a identidade da Suzana Carv,
              facilitando o acesso aos serviços e às informações importantes
              para as clientes.
            </p>
          </article>

          <article>
            <span className="uiux-case-section-label">02 / OBJETIVO</span>
            <h2>Clareza, identidade e navegação</h2>
            <p>
              Criar uma interface organizada, com hierarquia visual clara,
              apresentação dos serviços e caminhos de navegação que conduzissem
              a usuária até as informações e opções de contato.
            </p>
          </article>
        </div>
      </section>

      <section className="uiux-case-process">
        <div className="uiux-case-container">
          <div className="uiux-case-section-heading">
            <span className="uiux-case-section-label">
              03 / PROCESSO DE DESIGN
            </span>
            <h2>Do planejamento à interface</h2>
            <p>
              Uma estrutura visual pensada para organizar o conteúdo e tornar
              a experiência mais clara e intuitiva.
            </p>
          </div>

          <div className="uiux-case-process-grid">
            <article className="uiux-case-process-card">
              <span>01</span>
              <h3>Estruturação</h3>
              <p>
                Organização das páginas e das informações para estabelecer
                uma navegação coerente com os objetivos do projeto.
              </p>
            </article>

            <article className="uiux-case-process-card">
              <span>02</span>
              <h3>Design da interface</h3>
              <p>
                Definição da hierarquia visual, da composição dos elementos
                e da apresentação dos conteúdos da marca.
              </p>
            </article>

            <article className="uiux-case-process-card">
              <span>03</span>
              <h3>Prototipação no Figma</h3>
              <p>
                Construção das telas no Figma para representar a interface
                e a organização visual da experiência digital.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="uiux-case-decisions">
        <div className="uiux-case-container">
          <div className="uiux-case-section-heading">
            <span className="uiux-case-section-label">
              04 / DECISÕES DE DESIGN
            </span>
            <h2>Uma interface com propósito</h2>
          </div>

          <div className="uiux-case-decisions-grid">
            <article>
              <h3>Hierarquia visual</h3>
              <p>
                Organização dos conteúdos para facilitar a leitura e destacar
                as informações mais relevantes para a visitante.
              </p>
            </article>

            <article>
              <h3>Identidade da marca</h3>
              <p>
                Composição visual alinhada à proposta de beleza e
                profissionalismo da Suzana Carv.
              </p>
            </article>

            <article>
              <h3>Experiência do usuário</h3>
              <p>
                Estruturação dos caminhos de navegação para facilitar o acesso
                aos serviços, ao projeto e às informações de contato.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="uiux-case-technologies">
        <div className="uiux-case-container">
          <span className="uiux-case-section-label">05 / FERRAMENTAS</span>
          <h2>Design e experiência digital</h2>

          <div className="uiux-case-tags">
            <span>Figma</span>
            <span>UI/UX Design</span>
            <span>Web Design</span>
            <span>Design de interface</span>
          </div>
        </div>
      </section>

      <section className="uiux-case-closing">
        <div className="uiux-case-container uiux-case-closing-content">
          <h2>Vamos transformar sua ideia em um projeto digital?</h2>

          <p>
            Vamos conversar sobre como o design e o desenvolvimento podem
            contribuir para o seu próximo projeto.
          </p>

          <a
            className="uiux-case-contact-button"
            href="https://wa.me/5521970217293?text=Ol%C3%A1%21%20Conheci%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto%20de%20design%20ou%20desenvolvimento%20web."
            target="_blank"
            rel="noopener noreferrer"
          >
            Vamos conversar →
          </a>

          <p className="uiux-case-email">
            Prefere e-mail?{" "}
            <a href="mailto:cvdesignerfrontend@gmail.com">
              cvdesignerfrontend@gmail.com
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}

export default SuzanaCarvUIUX;
