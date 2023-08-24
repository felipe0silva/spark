import React from "react";

function Resultado({ onBack, rating, somasPorPerfil }) {
  // Encontra o perfil com a maior pontuação
  let perfilVencedor = "";
  let maiorPontuacao = 0;

  for (const perfil in somasPorPerfil) {
    if (somasPorPerfil[perfil] > maiorPontuacao) {
      maiorPontuacao = somasPorPerfil[perfil];
      perfilVencedor = perfil;
    }
  }

  return (
    <div>
      <h2>Página de Resultado</h2>
      <h1>Seu perfil é: {perfilVencedor}</h1>
      <h3>Pontuações por Perfil:</h3>
      <ul>
        {Object.keys(somasPorPerfil).map((perfil) => (
          <li key={perfil}>
            {perfil}: {somasPorPerfil[perfil]}
          </li>
        ))}
      </ul>
      <button onClick={() => onBack("teste")}>Voltar</button>
    </div>
  );
}

export default Resultado;
