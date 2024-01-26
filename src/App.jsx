
import { Container } from 'react-bootstrap'
import './App.css'
import Formulario from './components/Formulario'
import Footer from './components/Footer'


 const App=()=> {


  return (
    <>
    <main>
    <Container>
      <h1 className=' text-center text-light mt-5 py-5'> Ejercico 6 De React Paleta de colores con localStorge!</h1>
    <Formulario></Formulario>
    </Container>
    </main>
    <Footer></Footer>
    </>
  )
}

export default App
