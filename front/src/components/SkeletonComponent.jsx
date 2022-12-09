import React from 'react'
import Placeholder from 'react-bootstrap/Placeholder';

export const SkeletonComponent = () => {
  return (
    <tbody>
    {
        [1,2,3,4,5,6,7,8,9,10].map(e => (
        <tr key={e}>
            <td>
                <Placeholder animation="glow">
                <Placeholder md={12} size='lg' bg='secondary'/>
                </Placeholder>
            </td>
            <td>
                <Placeholder animation="glow">
                <Placeholder md={12} size='lg' bg='secondary'/>
                </Placeholder>
            </td>
            <td>
                <Placeholder animation="glow">
                <Placeholder md={12} size='lg' bg='secondary'/>
                </Placeholder>
            </td>
            <td>
                <Placeholder animation="glow">
                <Placeholder md={12} size='lg' bg='secondary'/>
                </Placeholder>
            </td>
        </tr>
        ))
    }
  </tbody> 
)}
