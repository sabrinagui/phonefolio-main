import React from 'react';
import { getConfigData } from "../data/configReader";
import MetricsCard from '../components/MetricsCard';
import CaseStudyCard from '../components/CaseStudyCard';

export default function TrafficResults() {
  const configData = getConfigData();

  const metrics = [
    {
      title: "ROAS Médio",
      value: "3.8x",
      description: "Retorno sobre investimento em anúncios"
    },
    {
      title: "Crescimento",
      value: "250%",
      description: "Aumento médio em vendas"
    },
    {
      title: "Contas Gerenciadas",
      value: "50+",
      description: "Clientes atendidos com sucesso"
    }
  ];

  const cases = [
    {
      title: "E-commerce de Moda",
      results: [
        "Aumento de 180% em vendas",
        "Redução de 40% no custo por aquisição",
        "ROAS de 4.2x"
      ],
      period: "3 meses",
      image: "https://veiculos.gridsites.com.br/wp-content/uploads/2025/09/case-1.jpg"
    },
    {
      title: "Serviços de Consultoria",
      results: [
        "300 leads qualificados/mês",
        "Taxa de conversão de 15%",
        "ROI de 320%"
      ],
      period: "6 meses",
      image: "https://veiculos.gridsites.com.br/wp-content/uploads/2025/09/case-2.jpg"
    }
  ];

  return (
    <>
      {/* Header Section */}
      <div className="px-7 py-7">
        <h1 className="flex items-center gap-x-2 text-lg font-medium">
          <div className="w-4 h-2 bg-gray-400 rounded-full"></div>
          Tráfego Pago e Resultados
        </h1>
      </div>

      {/* Introduction Section */}
      <div className="px-7 py-7 flex flex-col gap-y-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold mb-4 tracking-tighter">
            Transformando Investimento em Resultados
          </h1>
          <p className="text-lg text-gray-500 font-normal">
            Especialista em tráfego pago com foco em ROI e crescimento mensurável.
            Estratégias personalizadas para cada negócio, garantindo os melhores resultados.
          </p>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="px-7 py-7">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <MetricsCard key={index} {...metric} />
          ))}
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="px-7 py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Cases de Sucesso
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cases.map((caseStudy, index) => (
              <CaseStudyCard key={index} {...caseStudy} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-7 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Pronto para Impulsionar seus Resultados?
        </h2>
        <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
          Vamos criar uma estratégia personalizada para seu negócio e alcançar resultados extraordinários juntos.
        </p>
        <a
          href={configData.hireMeLink}
          className="gap-x-2 relative overflow-hidden border border-[#000000] bg-[#050708] text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-40 font-medium rounded-lg text-sm px-6 py-3 inline-flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
            />
          </svg>
          Agendar Consulta
        </a>
      </div>
    </>
  );
}