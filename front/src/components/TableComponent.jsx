import React from 'react'
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import { SkeletonComponent } from './SkeletonComponent';

export const TableComponent = () => {
  const filesCollection = useSelector((state) => state.files.filesCollection || [])
  const showError = useSelector((state) => state.files.isError)
  const isLoading = useSelector((state) => state.files.isLoading)

  return (
     <>
     <Table striped bordered hover size="sm">
      <thead style={{ borderBottomColor: 'black', borderBottomWidth: '0.15rem'}}>
        <tr>
          <th>File Name</th>
          <th>Text</th>
          <th>Number</th>
          <th>Hex</th>
        </tr>
      </thead>

    {
      (isLoading) ? <SkeletonComponent /> :
      showError && !isLoading ? <container><h2>Ups no se encontraron resultados....</h2></container> :
      <tbody>
          {
            filesCollection.map( file => (
                file.lines.map( (line, index) => (
                    <tr key={index}>
                        <td>{file.file}</td>
                        <td>{line.text}</td>
                        <td>{line.number}</td>
                        <td>{line.hex}</td>
                    </tr>
                ))
            ))
          }
      </tbody>
    }

    </Table>
    </> 
  )
}
