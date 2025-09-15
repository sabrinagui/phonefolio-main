import { useEffect } from "react";

export default function InstagramFeed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.lightwidget.com/widgets/lightwidget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center", padding: "2rem" }}>
      <h2 className="text-2xl font-semibold mb-4">Me siga no Instagram</h2>

      {/* Botão estilo Contrate-me */}
      <a href="https://www.instagram.com/sabrinamesquitaweb/" target="_blank" rel="noopener noreferrer">
        <button
          type="button"
          className="relative overflow-hidden border border-[#000000] bg-[#7d30e1ff] text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-40 font-medium rounded-lg text-sm px-4 py-2 inline-flex items-center mb-6"
        >
          Seguir
        </button>
      </a>

      {/* Widget */}
      <iframe
        src="//lightwidget.com/widgets/21bab83c09e85d0a8ba9b60d9f5ea612.html"
        scrolling="no"
        allowtransparency="true"
        className="lightwidget-widget"
        style={{ width: "100%", border: 0, overflow: "hidden" }}
        title="Instagram Feed"
      ></iframe>
    </div>
  );
}
