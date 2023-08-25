import React, { useState } from "react";
import "./Cadastro.css"; // Importe o arquivo CSS

function Cadastro({ onBack, onNext }) {
  const [entrevistadorEmail, setEntrevistadorEmail] = useState("");
  const [candidatoNome, setCandidatoNome] = useState("");
  const [candidatoCPF, setCandidatoCPF] = useState("");
  const [candidatoEmail, setCandidatoEmail] = useState("");
  const [candidatoWhatsapp, setCandidatoWhatsapp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext("teste");
  };

  return (
    <div>
      <h2>Página de Cadastro</h2>

      <form onSubmit={handleSubmit} className="neumorphism-form">
        <div className="input-group">
          <label htmlFor="entrevistadorEmail">E-mail do Entrevistador:</label>
          <input
            type="email"
            id="entrevistadorEmail"
            value={entrevistadorEmail}
            onChange={(e) => setEntrevistadorEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="candidatoNome">Nome do Candidato:</label>
          <input
            type="text"
            id="candidatoNome"
            value={candidatoNome}
            onChange={(e) => setCandidatoNome(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="candidatoCPF">CPF do Candidato:</label>
          <input
            type="text"
            id="candidatoCPF"
            value={candidatoCPF}
            onChange={(e) => setCandidatoCPF(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="candidatoEmail">E-mail do Candidato:</label>
          <input
            type="email"
            id="candidatoEmail"
            value={candidatoEmail}
            onChange={(e) => setCandidatoEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="candidatoWhatsapp">Whatsapp do Candidato:</label>
          <input
            type="text"
            id="candidatoWhatsapp"
            value={candidatoWhatsapp}
            onChange={(e) => setCandidatoWhatsapp(e.target.value)}
            required
          />
        </div>

        <div className="button-container">
          <button onClick={() => onBack("home")} className="neumorphism-button">
            Voltar
          </button>
          <button type="submit" className="neumorphism-button">
            Continuar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Cadastro;
