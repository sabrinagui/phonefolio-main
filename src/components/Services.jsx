import { getConfigData } from "../data/configReader";

export default function Services() {
  const configData = getConfigData();

  const services = [
    {
      title: "Criação de Sites Profissionais",
      description: "Sites modernos, rápidos e responsivos desenvolvidos em várias tecnologias.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
        </svg>
      )
    },
    {
      title: "Tráfego Pago",
      description: "Gestão de campanhas em Google, Facebook e Instagram Ads para gerar leads e vendas.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
        </svg>
      )
    },
    {
      title: "Lojas Virtuais e Sistemas",
      description: "Ecommerces e sistemas personalizados."  ,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
        </svg>
      )
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-900">Meus Serviços</h2>
          <p className="mt-4 text-lg text-gray-500">
            Criação de sites, lojas virtuais e gestão de anúncios online
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 min-h-[240px] flex flex-col"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-black bg-opacity-5 rounded-lg mb-4 group-hover:bg-black group-hover:bg-opacity-10 transition-colors duration-300">
                <div className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                  {service.icon}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900 leading-tight mb-2 break-words">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed break-words">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}