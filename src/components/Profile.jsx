import profile from "../assets/profilesbrina.png";
import CopyEmailButton from "./CopyEmailButton";
import { getConfigData } from "../data/configReader";

export default function Profile() {
  const configData = getConfigData();

  const workStatusTextClass =
    configData.status == "on"
      ? "bg-[#d0fadf] text-[#109d5c] rounded-full uppercase px-[0.60rem] py-[0.60rem] md:px-2 md:py-1 font-medium"
      : "bg-[#ff9d9d] text-[#f74d4d] rounded-full uppercase px-[0.60rem] py-[0.60rem] md:px-2 md:py-1 font-medium";

  const workStatusClass =
    configData.status == "on"
      ? "w-1.5 h-1.5 bg-[#109d5c] rounded-full"
      : "w-1.5 h-1.5 bg-[#f74d4d] rounded-full";

  const workStatusText =
    configData.status == "on" ? "disponível para trabalho" : "busy";

  return (
    <>
      {/* Header com status */}
      <div className="flex items-center justify-between px-7 py-7">
        <div className="font-medium text-lg flex items-center gap-x-3">
          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
          {configData.job}
        </div>
        <div className={workStatusTextClass}>
          <div className="text-sm font-medium flex items-center gap-x-1">
            <div className={workStatusClass}></div>
            <span className="hidden md:block">{workStatusText}</span>
          </div>
        </div>
      </div>

      {/* Conteúdo principal: texto + avatar */}
      <div className="px-7 py-7 flex flex-col-reverse md:flex-row md:items-center md:gap-16 pt-3">
  {/* Texto */}
  <div className="flex flex-col gap-y-4 flex-1">
    <h1 className="text-4xl font-semibold text-center md:text-left tracking-tighter">
      Sou {configData.name}
    </h1>
    <p className="text-lg text-gray-500 text-center md:text-left font-normal tracking-tighter">
      {configData.desc}
    </p>

    {/* Botões */}
    <div className="flex items-center justify-center md:justify-start pt-6">
      <a href={configData.hireMeLink}>
        <button
          type="button"
          className="gap-x-1 relative overflow-hidden border border-[#000000] bg-[#050708] text-white shadow-2xl transition-all font-medium rounded-lg text-sm px-3 py-2 inline-flex items-center mr-2 mb-2"
        >
          Contrate-me
        </button>
      </a>
      <CopyEmailButton />
    </div>
  </div>

  {/* Avatar */}
  <div className="flex justify-center md:justify-end flex-1 mb-7 md:mb-0">
    <div className="relative group cursor-pointer">
      {/* Anel de gradiente sutil */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full blur-sm opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
      
      {/* Container principal do avatar */}
      <div className="relative w-44 h-44 rounded-full bg-gradient-to-b from-gray-100 to-gray-300 border-2 border-white flex items-center justify-center shadow-lg transform transition-all duration-700 group-hover:scale-110 animate-float">
        {/* Imagem do avatar */}
        <img
          src={profile}
          alt="Sabrina Mesquita - Desenvolvedora Front-end"
          className="w-40 h-40 rounded-full object-contain bg-white p-1 transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Overlay de brilho sutil no hover */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
      </div>
    </div>
  </div>
</div>

    </>
  );
}
