import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { FormSearchComponent } from './FormSearchComponent';

export const NavbarComponent = ({title}) => {
  return (
    <>
      <Navbar bg="danger" sticky="top">
      <Container>
        <Navbar.Brand className='text-white'>{title}</Navbar.Brand>
        <FormSearchComponent/> 
      </Container>
      </Navbar>
      <br />
    </>
  )
}
