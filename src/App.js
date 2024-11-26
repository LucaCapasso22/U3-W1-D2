import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import MyAlert from './components/MyAlert'
import MyCard from './components/MyCard'
function App() {
  return (
    <div className="App">
      <header>
        <MyNav subtitle="Pastasciutte sul web" isFluid={true} />
      </header>
      <main className=" bg-dark">
        <MyAlert />
        <Container>
          <Row className="justify-content-center pt-3 d-flex">
            <MyCard />
          </Row>
          <MyFooter />
        </Container>
      </main>
    </div>
  )
}

export default App
