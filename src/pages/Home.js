import React from "react";

function Home({ onNext }) {
  return (
    <div>
      <h2>Página Inicial</h2>
      <button onClick={() => onNext("cadastro")}>Continuar</button>
    </div>
  );
}

export default Home;
