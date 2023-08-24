import React, { useState, useEffect } from "react";
import axios from "axios";

function Teste({ onBack, onNext, onShowResult }) {
  const [afirmacoes, setAfirmacoes] = useState([]);
  const [classificacoes, setClassificacoes] = useState({});
  const [isReadyToShowResult, setIsReadyToShowResult] = useState(false);

  useEffect(() => {
    axios
      .get("/Frases.json")
      .then((response) => {
        const shuffledAfirmacoes = response.data.sort(
          () => 0.5 - Math.random()
        );
        setAfirmacoes(shuffledAfirmacoes.slice(0, 40));
      })
      .catch((error) => console.error("Erro ao buscar afirmações:", error));
  }, []);

  useEffect(() => {
    const todasAsClassificacoesPreenchidas = afirmacoes.every(
      (afirmacao) => classificacoes[afirmacao.id]?.rating
    );

    setIsReadyToShowResult(todasAsClassificacoesPreenchidas);
  }, [afirmacoes, classificacoes]);

  const calcularSomasPorPerfil = () => {
    const somas = {
      Executor: 0,
      Comunicador: 0,
      Analista: 0,
      Planejador: 0,
    };

    afirmacoes.forEach((afirmacao) => {
      const rating = classificacoes[afirmacao.id]?.rating;
      const perfil = afirmacao.profile;
      if (rating) {
        somas[perfil] += rating;
      }
    });

    return somas;
  };

  const handleRatingChange = (afirmacaoId, rating) => {
    setClassificacoes((prevState) => ({
      ...prevState,
      [afirmacaoId]: { rating },
    }));
  };

  const handleShowResult = () => {
    const somasPorPerfil = calcularSomasPorPerfil();

    if (isReadyToShowResult) {
      onShowResult(somasPorPerfil); // Passa o resultado para a função onShowResult
      setClassificacoes({}); // Limpa as classificações após mostrar o resultado
    }
  };

  return (
    <div>
      <h2>Página de Teste</h2>
      <form>
        <h3>Afirmações:</h3>
        {afirmacoes.map((afirmacao) => (
          <div key={afirmacao.id}>
            <p
              style={{
                color: classificacoes[afirmacao.id]?.rating ? "black" : "red",
              }}
            >
              {afirmacao.text}
            </p>
            <div>
              {[1, 2, 3, 4, 5].map((rating) => (
                <label key={rating}>
                  <input
                    type="radio"
                    name={`rating-${afirmacao.id}`}
                    value={rating}
                    checked={classificacoes[afirmacao.id]?.rating === rating}
                    onChange={() => handleRatingChange(afirmacao.id, rating)}
                  />
                  {rating}
                </label>
              ))}
            </div>
          </div>
        ))}
      </form>
      {isReadyToShowResult && (
        <button onClick={handleShowResult}>Resultado</button>
      )}
      <button onClick={() => onBack("cadastro")}>Voltar</button>
    </div>
  );
}

export default Teste;
