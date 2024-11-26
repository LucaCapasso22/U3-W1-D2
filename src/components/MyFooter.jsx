import { Container } from 'react-bootstrap'

const MyFooter = (props) => {
  return (
    <footer className="d-flex fixed-bottom   bg-dark justify-content-center">
      <hr />
      <Container className=" row" fluid={props.isFluid}>
        <div className=" col-6 text-white ">
          <h3> Epilibrary</h3>
        </div>
        <div className=" col-6 text-decoration-none">
          <a
            href="https://epicode.com"
            className="text-decoration-none text-white"
          >
            La miglior libreria online di sempre | Epicode® 2024
          </a>
        </div>
      </Container>
    </footer>
  )
}

export default MyFooter
