import React from 'react';
import Header from '../components/Header';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  text-align: center;
  padding: 3rem;
`;

const ErrorPage = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <h1>404</h1>
        <p>Oops! This page doesn’t exist.</p>
        <Link to="/">← Back to safety</Link>
      </Wrapper>
    </>
  );
};

export default ErrorPage;
