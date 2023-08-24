import React from "react";

function Cadastro({ onBack, onNext }) {
  return (
    <div>
      <h2>Página de Cadastro</h2>
      <button onClick={() => onBack("home")}>Voltar</button>
      <button onClick={() => onNext("teste")}>Continuar</button>
    </div>
  );
}

export default Cadastro;
