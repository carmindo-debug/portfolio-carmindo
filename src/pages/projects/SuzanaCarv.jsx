import './SuzanaCarv.css'
import suzanaCarvCaseHero from '../../assets/suzana-carv-case-hero.png'
import suzanaCarvDesignShowcase from '../../assets/suzana-carv-design-showcase.png'
import suzanaCarvHighlight01 from '../../assets/suzana-carv-highlight-01.png'
import suzanaCarvHighlight02 from '../../assets/suzana-carv-highlight-02.png'
import suzanaCarvHighlight03 from '../../assets/suzana-carv-highlight-03.png'
import suzanaCarvProject from '../../assets/suzana-carv-project.png'
function SuzanaCarv() {
  return (
    <main className="project-page">
      
<section className="project-case-hero suzana-case-hero">
  <div className="project-case-heading suzana-case-heading">
    <span className="suzana-case-eyebrow">
      ESTUDO DE CASO · SITE INSTITUCIONAL
    </span>

    <h1>Suzana Carv — Site Institucional</h1>

    <p>
      Projeto que reúne design de interface no Figma e desenvolvimento
      front-end em React para apresentar a marca e seus serviços.
    </p>

    <span className="suzana-case-process">
      Design → Desenvolvimento → Produto publicado
    </span>
  </div>

  <div className="project-case-image">
    <img
      src={suzanaCarvCaseHero}
      alt="Apresentação visual do site institucional da Suzana Carv"
    />
  </div>
</section>


      
<section className="project-overview suzana-case-overview">
  <div className="suzana-case-overview-grid">
    <div className="project-overview-item">
      <span>PROJETO</span>
      <p>Suzana Carv</p>
    </div>

    <div className="project-overview-item">
      <span>ÁREA</span>
      <p>UI/UX + Front-end</p>
    </div>

    <div className="project-overview-item">
      <span>FERRAMENTAS</span>
      <p>Figma · React · Vite</p>
    </div>

    <div className="project-overview-item">
      <span>TIPO</span>
      <p>Site institucional</p>
    </div>
  </div>
</section>


      
<section className="project-challenge suzana-case-challenge">
  <div className="suzana-case-challenge-grid">
    <article className="suzana-case-challenge-item">
      <span className="suzana-case-section-label">
        01 / DESAFIO
      </span>

      <h2>Como apresentar a marca e seus serviços no ambiente digital?</h2>

      <p>
        Criar uma presença digital profissional para a marca Suzana Carv,
        apresentando seus serviços de forma clara e valorizando sua
        identidade visual.
      </p>
    </article>

    <article className="suzana-case-challenge-item">
      <span className="suzana-case-section-label">
        02 / OBJETIVO
      </span>

      <h2>Uma experiência digital clara e funcional</h2>

      <p>
        Desenvolver uma experiência digital clara, elegante e funcional,
        valorizando a apresentação da marca e facilitando o contato e o
        agendamento.
      </p>
    </article>
  </div>
</section>


      
<section className="project-process suzana-case-process">
  <div className="suzana-case-process-container">
    <div className="project-process-heading suzana-case-process-heading">
      <span className="suzana-case-section-label">
        03 / PROCESSO DE DESENVOLVIMENTO
      </span>

      <h2>Do design à publicação</h2>

      <p>
        Da definição visual ao desenvolvimento e publicação do produto.
      </p>
    </div>

    <div className="project-process-steps suzana-case-process-grid">
      <article className="project-process-step">
        <span>01</span>

        <h3>Design</h3>

        <p>
          Estrutura visual, identidade e experiência definidos no Figma.
        </p>
      </article>

      <article className="project-process-step">
        <span>02</span>

        <h3>Desenvolvimento</h3>

        <p>
          Interface transformada em produto funcional com React e
          tecnologias front-end.
        </p>
      </article>

      <article className="project-process-step">
        <span>03</span>

        <h3>Publicação</h3>

        <p>
          Projeto finalizado, publicado e disponibilizado para uso.
        </p>
      </article>
    </div>
  </div>
</section>

            <section className="project-design">
        <div className="project-design-heading">
          <h2>Design</h2>

          <p>
            A interface foi projetada no Figma com foco em clareza, consistência visual e uma experiência simples para o usuário.
          </p>
        </div>

        <div className="project-design-showcase">
          <img
            src={suzanaCarvDesignShowcase}
            alt="Showcase do projeto Suzana Carv"
          />
        </div>

        <div className="project-ui-highlights">
          <div className="project-ui-highlights-heading">
            <h3>Destaques da Interface</h3>

            <p>
              Alguns detalhes da interface que demonstram as principais decisões de design do projeto.
            </p>
          </div>

          <article className="project-ui-highlight">
            <div className="project-ui-highlight-content">
              <h4>Quem sou?</h4>

              <p>
                Seção criada para apresentar a profissional, sua experiência e informações de contato de forma clara e visualmente organizada.
              </p>
            </div>

            <img
              src={suzanaCarvHighlight01}
              alt="Tela Quem sou? do projeto Suzana Carv"
            />
          </article>

          <article className="project-ui-highlight">
            <div className="project-ui-highlight-content">
              <h4>Sala de Atendimento</h4>

              <p>
                Estrutura visual criada para apresentar o espaço de atendimento, transmitir confiança e organizar as principais informações para o usuário.
              </p>
            </div>

            <img
              src={suzanaCarvHighlight02}
              alt="Tela Sala de Atendimento do projeto Suzana Carv"
            />
          </article>

          <article className="project-ui-highlight">
            <div className="project-ui-highlight-content">
              <h4>Procedimentos</h4>

              <p>
                Apresentação dos procedimentos de forma clara e organizada, facilitando a navegação e a compreensão dos serviços oferecidos.
              </p>
            </div>

            <img
              src={suzanaCarvHighlight03}
              alt="Tela de Procedimentos do projeto Suzana Carv"
            />
                   </article>
        </div>
      </section>

      
<section className="project-development">
  
<div className="project-development-heading">
  <span className="suzana-case-section-label">
    04 / DESENVOLVIMENTO
  </span>

  <h2>Desenvolvimento</h2>

  <p>
    Após a definição visual, o projeto foi desenvolvido em React,
    transformando a interface em uma experiência digital funcional e responsiva.
  </p>
</div>


  <div className="project-development-showcase">
    <img
      src={suzanaCarvProject}
      alt="Showcase do desenvolvimento do projeto Suzana Carv"
    />
  </div>
</section>

<section className="project-technologies suzana-case-technologies">
  <div className="suzana-case-technologies-container">
    <span className="suzana-case-section-label">
      05 / TECNOLOGIAS
    </span>

    <h2>Tecnologias utilizadas</h2>

    <div className="project-technologies-list suzana-case-technology-list">
      <span>React</span>
      <span>Vite</span>
      <span>Bootstrap</span>
      <span>JavaScript</span>
    </div>
  </div>
</section>

        
        <div className="project-closing">
  <div className="project-closing-content">
    <h2>O próximo projeto pode começar aqui.</h2>

    <p>
      Design, desenvolvimento e experiências digitais pensadas para gerar
      resultados.
    </p>

    
<a
  href="https://wa.me/5521970217293?text=Ol%C3%A1%21%20Conheci%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto%20de%20design%20ou%20desenvolvimento%20web."
  className="project-closing-button"
  target="_blank"
  rel="noopener noreferrer"
>
  Vamos conversar →
</a>

  </div>
</div>
      
            
    </main>
  )
}

export default SuzanaCarv