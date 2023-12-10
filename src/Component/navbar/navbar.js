// main.jsx
import React from 'react';
import * as M from "../Mainpage/style";
import { Link } from 'react-router-dom';
// import logo from "../image/Logo.png"; 


const Mainpg = () => {
  return (
    <body>
      {/* navbar */}
      <M.NavbarContainer>
        <M.LogoContainer>
      {/* <M.LogoText>
        <Link to="/"><M.LogoImage src={logo} alt="Logo" /></Link>
        <Link to="/"><M.Button2>DevCoop</M.Button2></Link>
      </M.LogoText> */}
       

        </M.LogoContainer>
        <M.ButtonContainer>
          <Link to="/team"><M.Button>Song</M.Button></Link>
          <Link to="/project"><M.Button>Setting</M.Button></Link>
          <Link to="/member"><M.Button>Credit</M.Button></Link>
          <Link to="/blog"><M.Button>Contact</M.Button></Link>
          <Link to="/login">
            <M.LoginButton>
              <M.LoginText>Sign up</M.LoginText>
            </M.LoginButton>
          </Link>
        </M.ButtonContainer>
      </M.NavbarContainer>
    </body>
  );
};

export default Mainpg;
