// import React from "react";
// import "../footer.css";

// function Footer(){
//     return (
//         <div className="footer">
//             <p>© Copyright 2022 Husky Mavericks</p>
//         </div>
//     )
// }

// export default Footer;

// from Yidan
import React from "react";
import styled from "styled-components";

function Copyright() {
  return <Cr>© Copyright 2022 Husky Mavericks</Cr>;
}

const Cr = styled.div`
  background-color: #84bdbd #8cc;
  font-family: "Montserrat", sans-serif;
  color: whitesmoke;
  padding-top: 3%;
  padding-bottom: 3%;
  text-align: center;
`;

export default Copyright;