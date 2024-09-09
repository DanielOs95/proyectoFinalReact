import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    color: white;
    width: 100%;
`;


const Ul = styled.ul`
display: flex;
list-style-type: none;
justify-content:space-between;
gap: 30px;
`;

const Li = styled.li`
list-styled: none;
`;

const StyledLink = styled(Link)`
text-decoration: none;
`;



const Navbar = () => {
    return (
      <Nav>
        <Ul>
         <Li><StyledLink to="/">Clima</StyledLink></Li>
         <Li><StyledLink to="/Radar">Radar</StyledLink></Li>
        </Ul>
      </Nav>
    );
    
  }


export default Navbar;