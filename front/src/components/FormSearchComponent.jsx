import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { getAllFilesByName, getAllFilesDetail } from '../actions/files';

export const FormSearchComponent = () => {

  const dispatch = useDispatch();
  const [nameFile, setNameFile] = useState('')

  const handleSubmitSearch = (event) => {
    event.preventDefault()
    !nameFile ? dispatch(getAllFilesDetail(nameFile)) : dispatch(getAllFilesByName(nameFile))
  }

  const handleChange = (event) => {
    event.preventDefault()
    setNameFile(event.target.value);
  }

  return (
    <Form className="d-flex" onSubmit={handleSubmitSearch}>
        <Form.Control
            type="search"
            placeholder="Search by file name"
            className="me-2"
            aria-label="Search"
            value={nameFile}
            onChange={handleChange}
        />
        <Button variant="primary" type='submit' onClick={handleSubmitSearch}>Search</Button>
    </Form>
  )
}
