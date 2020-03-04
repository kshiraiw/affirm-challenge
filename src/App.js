import React from 'react';
import logo from './logo.png';
import './App.css';
import CCForm from './components/ccForm';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Container>
          <Row className="justify-content-md-center">
            <Col lg={8}>
              <h1>Enter your credit card information</h1>
              <CCForm></CCForm>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
