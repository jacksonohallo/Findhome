import React from 'react'
import styled from 'styled-components' 
import { Link } from 'react-router-dom';


const Nav = styled.nav`
height:60px;
background:red;`
    ;

const Logo = styled(Link)`
color:#fff;
`   

const Navbar = () => {
  return (
      <Nav>
          <Logo>Findhome</Logo>
          <MenuBar />
          <NavMenu/>

          <h1>Navbar</h1>
    </Nav>
  )
}

export default Navbar




 



 