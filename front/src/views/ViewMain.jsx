import React, { useEffect, useState } from 'react'
import { NavbarComponent } from '../components/NavbarComponent'
import { TableComponent } from '../components/TableComponent'
import Container from 'react-bootstrap/Container';
import { getAllFilesDetail } from '../actions/files';
import { useDispatch } from 'react-redux';


export const ViewMain = ({ title }) => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  useEffect(() => {
        dispatch(getAllFilesDetail())
  }, [])

  return (
    <>
        <NavbarComponent title={title} show={show} setShow={setShow}/>
        <Container>
          <TableComponent/>
        </Container>
    </>
  )
}
