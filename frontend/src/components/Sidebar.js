import React from 'react'

// imported booststrap components
import Container from 'react-bootstrap/Container'

const style = {
   height: '200vh',
   width: '30vw',
   position: 'left',
   backgrondColor: 'grey' 
}

export default function Sidebar(props) {

   return (
      <div style={style}>
         <Container>
            this is a sidebar
         </Container>
      </div>
   )
}