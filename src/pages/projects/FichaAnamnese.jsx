import "./FichaAnamnese.css";
import fichaAnamneseProject from "../../assets/ficha-anamnese-project.png";
import dadosPessoaisImage from "../../assets/Dados Pessoais Image.png";
import historicoEsteticoImage from "../../assets/Histórico Estético Image.png";
import assinaturaImage from "../../assets/Assinatura Image.png";
import anamneseAvaliacaoImage from "../../assets/Anamnese e Avaliacao.png";
function FichaAnamnese() {
  return (
    <main className="project-page">

      {/* Hero */}
<section className="project-case-hero ficha-case-hero">
  <div className="project-case-heading ficha-case-heading">
    <span className="ficha-case-eyebrow">
      ESTUDO DE CASO · APLICAÇÃO WEB
    </span>

    <h1>Ficha de Anamnese</h1>

    <p>
      Aplicação web para preenchimento e gerenciamento de fichas de anamnese.
    </p>
  </div>
</section>
{/* Design Showcase */}
<section className="project-showcase">
<div className="project-showcase-image">
    <img
      src={fichaAnamneseProject}
      alt="Interface da aplicação Ficha de Anamnese"
    />
  </div>

</section>

      {/* Visão geral */}
      
<section className="project-overview ficha-case-overview">
  <div className="ficha-case-overview-grid">
    <div className="project-overview-item">
      <span>PROJETO</span>
      <p>Ficha de Anamnese</p>
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
      <p>Aplicação web</p>
    </div>
  </div>
</section>


      {/* Desafio e objetivo */}
<section className="project-challenge-objective ficha-case-challenge">
  <div className="ficha-case-challenge-grid">
    <article className="ficha-case-challenge-item">
      <span className="ficha-case-section-label">
        01 / DESAFIO
      </span>

      <h2>Como simplificar o preenchimento das fichas de anamnese?</h2>

      <p>
        Desenvolver uma aplicação web para facilitar o preenchimento,
        organização e gerenciamento de fichas de anamnese de forma
        clara, prática e profissional.
      </p>
    </article>

    <article className="ficha-case-challenge-item">
      <span className="ficha-case-section-label">
        02 / OBJETIVO
      </span>

      <h2>Uma experiência clara, prática e organizada</h2>

      <p>
        Criar uma experiência digital simples e funcional, permitindo
        o preenchimento dos dados da cliente e o gerenciamento das
        informações de forma organizada.
      </p>
    </article>
  </div>
</section>

      {/* Processo */}

<section className="ficha-process ficha-case-process">
  <div className="ficha-process-heading ficha-case-process-heading">
    <span className="ficha-case-section-label">
      03 / PROCESSO DE DESENVOLVIMENTO
    </span>

    <h2>Da estrutura à publicação</h2>

    <p>
      Da organização das informações à implementação e publicação
      da aplicação web.
    </p>
  </div>

  <div className="ficha-process-steps ficha-case-process-grid">
    <article className="ficha-case-process-card">
      <span>01</span>
      <h3>Estrutura</h3>
      <p>
        Organização das informações e definição da estrutura da aplicação.
      </p>
    </article>

    <article className="ficha-case-process-card">
      <span>02</span>
      <h3>Desenvolvimento</h3>
      <p>
        Implementação da aplicação utilizando React e Vite.
      </p>
    </article>

    <article className="ficha-case-process-card">
      <span>03</span>
      <h3>Publicação</h3>
      <p>
        Aplicação publicada e disponível para utilização.
      </p>
    </article>
  </div>
</section>

{/* Destaques da interface */}
<section className="ficha-highlights">

  <div className="ficha-highlights-heading">
    <h2>Destaques da interface</h2>

    <p>
      Uma experiência digital pensada para tornar o preenchimento
      e a organização das informações mais simples e profissionais.
    </p>
  </div>

  <div className="ficha-highlights-grid">

    
<article className="ficha-highlight">
  <span>01</span>

  <img
    className="ficha-highlight-image"
    src={dadosPessoaisImage}
    alt="Tela de preenchimento dos dados pessoais da cliente"
  />

  <h3>Preenchimento estruturado</h3>

  <p>
    Organização dos dados da cliente em uma interface clara,
    objetiva e fácil de utilizar.
  </p>
</article>

<article className="ficha-highlight">
  <span>02</span>

  <img
    className="ficha-highlight-image"
    src={assinaturaImage}
    alt="Tela de registro da assinatura digital da cliente"
  />

  <h3>Assinatura digital</h3>

  <p>
    Permite registrar a assinatura diretamente no fluxo
    de preenchimento da ficha.
  </p>
</article>

<article className="ficha-highlight">
  <span>03</span>

  <img
    className="ficha-highlight-image"
    src={historicoEsteticoImage}
    alt="Tela de histórico estético da cliente"
  />

  <h3>Gestão das informações</h3>

  <p>
    Estrutura que facilita o registro e o gerenciamento
    dos dados da cliente.
  </p>
</article>


  </div>

</section>
     {/* Desenvolvimento */}
<section className="ficha-development">

  <div className="ficha-development-heading">
    <h2>Desenvolvimento</h2>

    <p>
      Da estrutura definida à implementação de uma aplicação web funcional,
      com foco em organização, clareza e facilidade de uso.
    </p>
  </div>

<div className="ficha-development-image">
  <img
    src={anamneseAvaliacaoImage}
    alt="Tela de avaliação da aplicação Ficha de Anamnese"
  />
</div>

  <div className="ficha-development-content">

    <div className="ficha-development-item">
      <span>01</span>

      <h3>Interface e experiência</h3>

      <p>
        Estruturação das telas e dos fluxos de preenchimento,
        buscando uma experiência simples e objetiva para a utilização da aplicação.
      </p>
    </div>

    <div className="ficha-development-item">
      <span>02</span>

      <h3>Implementação</h3>

      <p>
        Desenvolvimento da aplicação utilizando React e Vite,
        transformando a estrutura definida em uma solução web funcional.
      </p>
    </div>

    <div className="ficha-development-item">
      <span>03</span>

      <h3>Funcionalidades</h3>

      <p>
        Implementação dos recursos necessários para preenchimento,
        assinatura e gerenciamento das informações da cliente.
      </p>
    </div>

  </div>

</section>
      {/* Tecnologias */}
      <section className="project-technologies">

        <h3>Tecnologias</h3>

        <div className="project-technologies-list">
          <span>React</span>
          <span>Vite</span>
          <span>JavaScript</span>
        </div>

      </section>

      {/* Encerramento */}
      <section className="project-closing">

        <div className="project-closing-content">

          <h2>O próximo projeto pode começar aqui.</h2>

          <p>
            Design, desenvolvimento e experiências digitais pensadas para gerar resultados.
          </p>

          
<a
  href="https://wa.me/5521970217293?text=Ol%C3%A1%21%20Conheci%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto%20de%20design%20ou%20desenvolvimento%20web."
  className="project-closing-button"
  target="_blank"
  rel="noopener noreferrer"
>
  Vamos conversar pelo WhatsApp →
</a>


<p className="project-closing-email">
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

export default FichaAnamnese;