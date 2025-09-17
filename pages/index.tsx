import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';

const Home = () => {
  const [userInput, setUserInput] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    axios
      .post('/api/llama-ai', { input: userInput })
      .then((response) => {
        setAiResponse(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  return (
    <Container>
      <Head>
        <title>Llama AI Chat</title>
      </Head>
      <Row className="justify-content-center">
        <Col md={6}>
          <h1>Llama AI Chat</h1>
          <InputGroup>
            <FormControl
              type="text"
              value={userInput}
              onChange={handleUserInput}
              placeholder="Ask me a question"
            />
            <Button variant="primary" onClick={handleSubmit}>
              Ask
            </Button>
          </InputGroup>
          {loading ? <p>Loading...</p> : <p>{aiResponse}</p>}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
