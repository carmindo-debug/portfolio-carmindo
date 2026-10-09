import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'

import SuzanaCarv from './pages/projects/SuzanaCarv'
import SuzanaCarvUIUX from './pages/projects/SuzanaCarvUIUX'
import FichaAnamnese from './pages/projects/FichaAnamnese'
import FakeStore from './pages/projects/FakeStore'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1))

      if (target) {
        target.scrollIntoView({ behavior: 'auto' })
        return
      }
    }

    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
  <Header />

  <Routes>
    <Route path="/" element={<Home />} />

    <Route path="/sobre" element={<div>Sobre</div>} />
    <Route path="/servicos" element={<div>Serviços</div>} />
    <Route path="/projetos" element={<div>Projetos</div>} />
    <Route path="/contato" element={<div>Contato</div>} />

    <Route
  path="/projetos/suzana-carv"
  element={<SuzanaCarv />}
/>

<Route
  path="/projetos/suzana-carv-uiux"
  element={<SuzanaCarvUIUX />}
/>

<Route
  path="/projetos/ficha-anamnese"
  element={<FichaAnamnese />}
/>

<Route
  path="/projetos/fake-store"
  element={<FakeStore />}
/>

    <Route path="*" element={<div>Página não encontrada</div>} />
  </Routes>

  <Footer />
</BrowserRouter>
  )
}

export default App
