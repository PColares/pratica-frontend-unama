import React from "react";

const name = "Pedro Colares";
const date = new Date().getFullYear();

function Footer() {
  return (
    <div className="footer">
      <p>Desenvolvido por {name}.</p>
      <p>{date}</p>
    </div>
  );
}

export default Footer;