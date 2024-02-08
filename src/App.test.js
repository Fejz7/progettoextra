// import { render, screen } from '@testing-library/react'
// import App from './App'

// test('renders learn react link', () => {
//   render(<App />)
//   const linkElement = screen.getByText(/learn react/i)
//   expect(linkElement).toBeInTheDocument()
// })
import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

// qui dentro scriveremo i nostri tests, per App e (per comodità) anche per gli altri componenti

// creiamo il nostro primo gruppo di tests
// i gruppi di test solitamente si dividono in macro-sezioni
// ogni macro sezione viene identificata con la parola "describe"

describe('General mounting', () => {
  // sono dentro la suite di tests chiamata "General mounting"
  // ora cominciamo a scrivere dei tests individuali, per testare
  // diverse aspettative per la pagina

  // creiamo il primo test: voglio verificare che nella pagina sia presente
  // l'<h1> dichiarato in App.js e che contenga il titolo previsto ("A simple react-testing example")
  it('correctly mounts the heading', () => {
    // 1) monto App nel VIRTUAL DOM
    render(<App />) // non comparirà nella pagina, è un montaggio "virtuale"
    // screen è il contenuto del VIRTUAL DOM
    // 2) cerco tramite il suo contenuto testuale l'h1 che dovrebbe essere stato montato
    const h1 = screen.getByText(/Benvenuti in EpiBooks!/i)
   
    expect(h1).toBeInTheDocument()
  })})