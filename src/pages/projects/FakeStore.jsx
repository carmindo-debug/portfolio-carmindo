
import './FakeStore.css'

import fakeStoreCatalogo from '../../assets/fake-store-catalogo.webp'
import fakeStoreCategorias from '../../assets/fake-store-categorias.webp'
import fakeStoreCatalogoCategoria from '../../assets/fake-store-catalogo-categoria.webp'

function FakeStore() {
  return (
    <main className="project-page fake-store-page">
      {/* Abertura do estudo de caso */}
      <section className="fake-store-hero">
        <div className="fake-store-container">
          <div className="fake-store-heading">
            <span className="fake-store-eyebrow">
              ESTUDO DE CASO · E-COMMERCE
            </span>

            <h1>
  Fake Store – <span className="fake-store-title-nowrap">E-commerce</span>
</h1>

            <p>
              Aplicação de e-commerce desenvolvida em React, com produtos
              carregados dinamicamente por uma API e navegação por categorias.
            </p>
          </div>

          <figure className="fake-store-hero-image">
            <img
              src={fakeStoreCatalogo}
              alt="Visão geral do catálogo de produtos da Fake Store"
            />
          </figure>
        </div>
      </section>

      {/* Informações do projeto */}
      <section className="fake-store-overview">
        <div className="fake-store-container fake-store-overview-grid">
          <div className="fake-store-overview-item">
            <span>PROJETO</span>
            <p>Fake Store</p>
          </div>

          <div className="fake-store-overview-item">
            <span>ÁREA</span>
            <p>Desenvolvimento front-end</p>
          </div>

          <div className="fake-store-overview-item">
            <span>FERRAMENTAS</span>
            <p>React · JavaScript · API</p>
          </div>

          <div className="fake-store-overview-item">
            <span>TIPO</span>
            <p>E-commerce web</p>
          </div>
        </div>
      </section>

      {/* Desafio e objetivo */}
      <section className="fake-store-challenge">
        <div className="fake-store-container fake-store-challenge-grid">
          <article className="fake-store-challenge-item">
            <span className="fake-store-section-label">
              01 / DESAFIO
            </span>

            <h2>Como organizar produtos de diferentes categorias?</h2>

            <p>
              Desenvolver uma interface capaz de apresentar produtos
              carregados por uma API, organizando as informações para facilitar
              a exploração do catálogo.
            </p>
          </article>

          <article className="fake-store-challenge-item">
            <span className="fake-store-section-label">
              02 / OBJETIVO
            </span>

            <h2>Um catálogo dinâmico e fácil de explorar</h2>

            <p>
              Criar uma experiência de navegação clara, com filtros por
              categoria e apresentação organizada de imagens, nomes, preços
              e informações dos produtos.
            </p>
          </article>
        </div>
      </section>

      {/* Processo de desenvolvimento */}
      <section className="fake-store-process">
        <div className="fake-store-container">
          <div className="fake-store-section-heading">
            <span className="fake-store-section-label">
              03 / PROCESSO DE DESENVOLVIMENTO
            </span>

            <h2>Da API ao catálogo de produtos</h2>

            <p>
              Organização dos dados e desenvolvimento da interface para
              apresentar o catálogo de forma clara e funcional.
            </p>
          </div>

          <div className="fake-store-process-grid">
            <article className="fake-store-process-card">
              <span>01</span>

              <h3>Integração com a API</h3>

              <p>
                Carregamento dinâmico dos dados utilizados para apresentar
                os produtos no catálogo.
              </p>
            </article>

            <article className="fake-store-process-card">
              <span>02</span>

              <h3>Navegação por categorias</h3>

              <p>
                Organização da navegação para permitir a exploração dos
                produtos por categorias.
              </p>
            </article>

            <article className="fake-store-process-card">
              <span>03</span>

              <h3>Apresentação do catálogo</h3>

              <p>
                Organização dos cartões com imagens, nomes, preços e
                identificação das categorias dos produtos.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Apresentação das telas */}
      <section className="fake-store-showcase">
        <div className="fake-store-container">
          <div className="fake-store-section-heading">
            <span className="fake-store-section-label">
              04 / INTERFACE DO E-COMMERCE
            </span>

            <h2>Uma experiência de compra organizada</h2>

            <p>
              As telas destacam a navegação por categorias e a apresentação
              dos produtos, mantendo as informações principais visíveis
              durante a exploração do catálogo.
            </p>
          </div>

          <div className="fake-store-screens-grid">
            <figure className="fake-store-screen-card">
              <img
                src={fakeStoreCategorias}
                alt="Interface da Fake Store com filtros e categorias de produtos"
                loading="lazy"
              />

              <figcaption>
                <span>TELA 01</span>
                <h3>Filtros e categorias</h3>
                <p>
                  Navegação por categorias e atualização da lista de produtos
                  apresentados.
                </p>
              </figcaption>
            </figure>

            <figure className="fake-store-screen-card">
              <img
                src={fakeStoreCatalogoCategoria}
                alt="Catálogo da Fake Store com produtos de uma categoria selecionada"
                loading="lazy"
              />

              <figcaption>
                <span>TELA 02</span>
                <h3>Catálogo por categoria</h3>
                <p>
                  Apresentação dos produtos de acordo com a categoria
                  selecionada.
                </p>
              </figcaption>
            </figure>
          </div>
          
<div className="fake-store-chat-feature">
  <div className="fake-store-chat-feature-content">
    <span className="fake-store-section-label">
      FUNCIONALIDADE DA INTERFACE
    </span>

    <h3>Chat integrado</h3>

    <p>
      A interface oferece um botão flutuante de acesso ao chat,
      permitindo que o recurso seja acessado durante a navegação
      pelo catálogo de produtos.
    </p>
  </div>
</div>

        </div>
      </section>

      {/* Tecnologias */}
      <section className="fake-store-technologies">
        <div className="fake-store-container">
          <span className="fake-store-section-label">
            05 / TECNOLOGIAS
          </span>

          <h2>Tecnologias utilizadas</h2>

          <div className="fake-store-technology-list">
            <span>React</span>
            <span>JavaScript</span>
            <span>API</span>
            <span>CSS</span>
          </div>
        </div>
      </section>

      {/* Encerramento comercial */}
      <section className="fake-store-closing">
        <div className="fake-store-closing-content">
          <h2>O próximo projeto pode começar aqui.</h2>

          <p>
            Design, desenvolvimento e experiências digitais pensadas
            para gerar resultados.
          </p>

          <a
            href="https://wa.me/5521970217293?text=Ol%C3%A1%21%20Conheci%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto%20de%20design%20ou%20desenvolvimento%20web."
            className="fake-store-closing-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vamos conversar →
          </a>

          <p className="fake-store-closing-email">
            Prefere e-mail?{' '}
            <a href="mailto:cvdesignerfrontend@gmail.com">
              cvdesignerfrontend@gmail.com
            </a>
          </p>
        </div>
      </section>
    </main>
  )
}

export default FakeStore
