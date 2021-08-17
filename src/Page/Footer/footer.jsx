import React from "react";
import '../../settings/pt-br';
import ptBr from "../../settings/pt-br";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <div className="footer">
      <p>Desenvolvido por {ptBr.developerNameLabel}.</p>
      <p>{date}</p>
    </div>
  );
}

export default Footer;