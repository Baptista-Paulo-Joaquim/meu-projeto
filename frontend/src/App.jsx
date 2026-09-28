import { useEffect, useState } from "react";

function App() {
  const [status, setStatus] = useState("A carregar...");

  useEffect(() => {
    fetch("/api/health")
      .then((res) => res.json())
      .then((data) => setStatus(data.message))
      .catch(() => setStatus("Erro ao ligar ao backend"));
  }, []);

  return (
    <div>
      <h1>Mozout VPS Teste</h1>
      <p>Backend: {status}</p>
    </div>
  );
}

export default App;
