import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Teste from "./pages/Teste";
import Resultado from "./pages/Resultado";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [rating, setRating] = useState(0); // Adicione um estado para a nota
  const [somasPorPerfil, setSomasPorPerfil] = useState({}); // Adicione um estado para o resultado

  const handleNext = (page, userRating) => {
    setCurrentPage(page);
    setRating(userRating); // Atualize a nota quando você avança para a página de resultado
  };

  const handleBack = (page) => {
    setCurrentPage(page);
  };

  const handleShowResult = (result) => {
    setSomasPorPerfil(result); // Atualiza o resultado quando é exibido na página de Resultado
    setCurrentPage("resultado"); // Avança para a página de resultado
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home onNext={handleNext} />;
      case "cadastro":
        return <Cadastro onBack={handleBack} onNext={handleNext} />;
      case "teste":
        return (
          <Teste
            onBack={handleBack}
            onNext={handleNext}
            onShowResult={handleShowResult}
          />
        );
      case "resultado":
        return (
          <Resultado
            rating={rating}
            somasPorPerfil={somasPorPerfil}
            onBack={handleBack}
          />
        ); // Passe a nota e o resultado para a página de resultado
      default:
        return <Home onNext={handleNext} />;
    }
  };

  return (
    <div className="App">
      <Header />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
