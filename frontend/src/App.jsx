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
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
        background: "#f5f5f5",
      }}
    >
      <div
        style={{
          textAlign: "center",
          background: "#ffffff",
          padding: "60px 80px",
          borderRadius: "16px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            margin: 0,
            color: "#111827",
          }}
        >
          Major Group S.A.
        </h1>

        <p
          style={{
            marginTop: "12px",
            fontSize: "18px",
            color: "#6b7280",
          }}
        >
          Soluções Logísticas, tecnologia e inovação.
        </p>

        <div
          style={{
            marginTop: "30px",
            padding: "12px 20px",
            background: "#f3f4f6",
            borderRadius: "8px",
            color: "#374151",
          }}
        >
          Backend: {status}
        </div>
      </div>
    </main>
  );
}

export default App;
