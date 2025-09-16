import React from 'react';
import { getConfigData } from "../data/configReader";

export default function Contact() {
  const configData = getConfigData();

  const contactLinks = [
    {
      title: "WhatsApp",
      description: "Respondo rapidamente por aqui",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
        </svg>
      ),
      url: configData.hireMeLink,
    },
    {
      title: "Instagram",
      description: "Acompanhe meu trabalho",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
        </svg>
      ),
      url: "https://instagram.com/sabrinamesquitaweb",
    },
    {
      title: "LinkedIn",
      description: "Conecte-se profissionalmente",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
        </svg>
      ),
      url: "https://linkedin.com/in/sabrina-mesquita-8a39a6205/",
    },
    {
      title: "E-mail",
      description: configData.email,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
      url: `mailto:${configData.email}`,
    }
  ];

  return (
    <>
      {/* Header Section */}
      <div className="px-7 py-7">
        <h1 className="flex items-center gap-x-2 text-lg font-medium">
          <div className="w-4 h-2 bg-gray-400 rounded-full"></div>
          Contato
        </h1>
      </div>

      {/* Contact Section */}
      <div className="px-7 py-7 flex flex-col gap-y-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold mb-4 tracking-tighter">
            Vamos Conversar?
          </h1>
          <p className="text-lg text-gray-500 font-normal">
            Escolha o canal que preferir para iniciarmos uma conversa.
          </p>
        </div>
      </div>

      {/* Contact Links */}
      <div className="px-7 py-7">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-md"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-black bg-opacity-5 rounded-lg group-hover:bg-black group-hover:bg-opacity-10 transition-colors duration-300">
                <div className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                  {link.icon}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">
                  {link.title}
                </h3>
                <p className="text-gray-500 text-sm">
                  {link.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}