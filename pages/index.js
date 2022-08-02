import { BsInstagram, BsPhone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";


export default function Home() {
  const [open, setOpen] = useState(false)
  return (
    <div className="w-screen h-screen overflow-auto bg-white scroll-smooth">
      <header className="w-full flex px-10 md:px-24 lg:px-32 xl:px-48 justify-between h-1/6 relative">
        <div className="pt-3 flex items-center">
          <img src="./logo.png" alt="" width={100} height={100} />
        </div>
        <div className="flex gap-x-20 font-sans text-lg" id="navbar">
          <div className={`${(open) ? "flex" : "hidden"} gap-x-20 lg:flex flex-col w-screen lg:w-auto right-0 top-36 lg:top-auto bg-white/70 absolute lg:relative lg:flex-row`}>
            <a href="#servicos">Serviços</a>
            <a href="#obras">Obras</a>
            <a href="#sobre">Sobre</a>
            <a href="#contato">Contato</a>
          </div>
          <a className="hidden" onClick={e=>setOpen(!open)}>
            <GiHamburgerMenu size={30} className="flex lg:hidden" />
          </a>
        </div>
      </header>
      <main className="w-full h-auto py-3 px-10 md:px-24 lg:px-32 xl:px-48 ">
        <div className="h-full w-full flex items-center flex-col-reverse lg:flex-row justify-center pb-32 border-b border-gray-400">
          <div className="lg:w-1/2 w-full lg:pr-10">
            <h1 className="font-bold font-sans text-yellow-500 text-2xl lg:text-4xl lg:text-justify">
              Acompanhamento e execução de obras residenciais e comerciais
            </h1>
            <p className="my-5 font-sans lg:pr-10 text-justify">
              Dispomos de Corpo Técnico capacitado e experiente para acompanhar
              e executar sua Obra com qualidade e pontualidade. Realizamos
              reformas para seu ambiente e acompanhamos a execução de sua obra.
            </p>
            <div className="flex flex-col md:flex-row mt-12 gap-5 lg:gap-12">
              <a
                href="#contato"
                className="py-2 px-8 text-white rounded-sm font-sans bg-orange-500 border-2 flex justify-center
              border-orange-500 hover:bg-transparent hover:text-orange-500 font-bold transition ease-in-out"
              >
                Peça um Orçamento
              </a>
              <a
                href="#obras"
                className="bg-transparent border-orange-500 rounded-sm py-2  px-16 border-2 flex justify-center
              hover:bg-orange-500 hover:text-white transition ease-in-out font-sans font-bold text-orange-500"
              >
                Ver Portifolio
              </a>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img
              src="./teste.gif"
              alt=""
              className="h-full w-full hover:scale-110 rounded-md transition ease-in-out"
            />
          </div>
        </div>
        <div className="w-full h-auto flex flex-col" id="servicos">
          <div className="w-full flex justify-center h-52 mt-20">
            <img src="./pilares.png" alt="" className="h-28 w-28 " />
          </div>
          <div className="h-full w-full flex items-center gap-y-10 flex-col pb-16 border-b border-gray-400">
            <h1 className="text-3xl text-yellow-500 font-mono font-bold text-center">
              Serviços de Engenharia
            </h1>
            <div className="flex w-full justify-center gap-x-20 flex-col md:flex-row gap-y-16 md:gap-y-0  items-center md:items-start">
              <div className="card px-9 md:px-12 py-10 w-full 2xl:w-2/6 lg:h-64">
                <img src="./rolo-de-pintura.png" alt="" className="w-12 h-12" />
                <h1 className="font-bold font-mono text-xl mt-3 text-amber-500">
                  Reformas
                </h1>
                <p className="mt-3 text-md text-gray-700 text-justify">
                  Reformas com Profissionais treinados e empresas Parceiras,
                  tentando sempre superar as expectativas dos nossos clientes.
                </p>
              </div>
              <div className="card px-9 md:px-12 py-10 w-full 2xl:w-2/6 lg:h-64 ">
                <img
                  src="./gerenciamento-obras.svg"
                  alt=""
                  className="w-12 h-12"
                />
                <h1 className="font-bold font-mono text-xl mt-3  text-amber-500">
                  Administração de Obra
                </h1>
                <p className="mt-3 text-md text-justify text-gray-700">
                  Administração e gestão de todas etapas de obra, conforme sua
                  necessidade.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex flex-col" id="obras">
          <div className="w-full flex justify-center h-52 mt-10">
            <img
              src="./construcao.png"
              alt=""
              className="h-28 w-28"
            />
          </div>
          <div className="h-full w-full flex items-center gap-y-10 flex-col border-b pb-32 border-gray-400">
            <h1 className="text-3xl text-yellow-500 font-mono font-bold">
              Obras Recentes
            </h1>
            <div className="flex 2xl:h-80 w-full 2xl:w-4/6 flex-col 2xl:flex-row overflow-x-auto overflow-y-auto border shadow-md font-sans  rounded-md">
              <img src="./foto1.jpg" className="w-full 2xl:w-3/4" alt="" />
              <div className="w-full 2xl:w-1/4 px-3 2xl:px-6 py-7 text-md text-justify bg-slate-50 flex flex-col justify-between">
                <div>
                  <p className="text-slate-800 font-thin">
                    <p className="text-yellow-600 font-bold">
                      Serviço prestado:{" "}
                    </p>
                    Acompanhamento de todas as etapas construtivas do Rio
                    Vermelho Exclusive;
                  </p>
                </div>
                <div className="gap-y-3 flex flex-col">
                  <div className="flex ">
                    <p className="text-slate-800">
                      {" "}
                      <b className="text-yellow-600">Localização: </b> R. Barão
                      do Triunfo, 79 - Federação, Salvador - BA, 40231-375
                    </p>
                  </div>
                  <div className="flex">
                    <p className="text-slate-800">
                      {" "}
                      <b className="text-yellow-600">Data: </b>2019
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex 2xl:h-80 w-full 2xl:w-4/6 flex-col 2xl:flex-row-reverse overflow-x-auto overflow-y-auto border shadow-md font-sans  rounded-md">
              <img src="./foto2.jpg" className="w-full 2xl:w-3/4" alt="" />
              <div className="w-full 2xl:w-1/4 px-3 2xl:px-6 py-7 text-md text-justify bg-slate-50 flex flex-col justify-between">
                <div>
                  <p className="text-slate-800 font-thin">
                    <p className="text-yellow-600 font-bold">
                      Serviço prestado:{" "}
                    </p>
                    Acompanhamento de todas etapas construtivas do Terraces
                    Porto das Baleias em Praia do Forte
                  </p>
                </div>
                <div className="gap-y-3 flex flex-col">
                  <div className="flex ">
                    <p className="text-slate-800">
                      {" "}
                      <b className="text-yellow-600">Localização: </b>{" "}
                      Condomínio Porto das BaleiasMata de São João - BA,
                      48280-000
                    </p>
                  </div>
                  <div className="flex">
                    <p className="text-slate-800">
                      {" "}
                      <b className="text-yellow-600">Data: </b>2020
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex 2xl:h-80 w-full 2xl:w-4/6 flex-col 2xl:flex-row overflow-x-auto overflow-y-auto border shadow-md font-sans  rounded-md">
              <img src="./foto3.jpg" className="w-full 2xl:w-3/4" alt="" />
              <div className="w-full 2xl:w-1/4 px-3 2xl:px-6 py-7 text-md text-justify bg-slate-50 flex flex-col justify-between">
                <div>
                  <p className="text-slate-800 font-thin">
                    <p className="text-yellow-600 font-bold">
                      Serviço prestado:
                    </p>
                    Acompanhamento de todas etapas finais construtivas do Barra
                    Porto Clube;
                  </p>
                </div>
                <div className="gap-y-3 flex flex-col">
                  <div className="flex ">
                    <p className="text-slate-800">
                      {" "}
                      <b className="text-yellow-600">Localização: </b> Rua Barão
                      de Itapoan, 142 - Barra, Salvador - BA, 40140-060
                    </p>
                  </div>
                  <div className="flex">
                    <p className="text-slate-800">
                      {" "}
                      <b className="text-yellow-600">Data: </b>2020
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex flex-col border-b border-gray-400" id="sobre">
          <div className="flex flex-col lg:flex-row w-full h-full py-14 lg:px-10">
            <div className="w-full lg:w-1/2 px-10">
              <img src="./image-banner.jpg" alt="" />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-center md:px-12">
              <div className="flex justify-start">
                <h1 className="text-3xl md:text-4xl font-bold text-yellow-500">
                  Sobre nós
                </h1>
              </div>
              <p className="text-justify mt-6 md:mt-10 md:text-lg">
                Sakelliou Engenharia é uma Empresa de Engenharia, fundada em
                2012 pelo Engenheiro Georges Sakelliou, com o propósito de
                realizar Construções, Reformas, Acompanhamento e Gerenciamento
                de Obras. Nosso grande diferencial está na qualidade dos
                serviços e na pontualidade das entregas.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex flex-col justify-center py-10" id="contato">
          <div className="w-full flex justify-center">
            <img src="./ideia.png" className="h-20 w-20" alt="" />
          </div>
          <h1 className="text-center text-3xl font-bold my-14 text-yellow-500">
            Tem um Projeto em mente?
          </h1>
          <div className="flex flex-col gap-y-11 xl:flex-row w-full h-full xl:px-4">
            <div className="w-full xl:w-1/2 xl:pr-52 flex flex-col gap-y-8">
              <p className="text-justify ">
                Entre em contato com a gente, estamos sempre disponiveis para
                falar sobre um novo projeto!
              </p>
              <div className="font-bold  sm:text-lg text-amber-500 gap-y-3 flex flex-col">
                <a
                  href="https://www.instagram.com/sakelliouengenharia/"
                  className=" items-center gap-x-2 flex"
                >
                  <BsInstagram size={22} /> @sakelliouengenharia
                </a>
                <a
                  href="mailto:georges@sakelliouengenharia.com.br"
                  className=" items-center gap-x-2 flex"
                >
                  <FiMail size={22} />
                  georges@sakelliouengenharia.com.br
                </a>
                <a
                  href="tel:+5571987674558"
                  className="items-center gap-x-2 flex"
                >
                  <BsPhone size={22} />
                  +55 (71) 98767-4558
                </a>
              </div>
            </div>
            <div className="w-full xl:w-1/2 flex flex-col xl:px-4 gap-y-5">
              <input className="input_contact" placeholder="Nome" type="text" />
              <input
                className="input_contact"
                placeholder="E-mail"
                type="text"
              />
              <input
                className="input_contact "
                placeholder="Telefone"
                type="text"
              />
              <textarea
                className="input_contact"
                placeholder="Mensagem"
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
              <button
                className="py-1 px-8 w-full text-white rounded-sm font-sans bg-orange-500 border-2 
              border-orange-500 hover:bg-transparent hover:text-orange-500 font-bold transition ease-in-out md:w-36"
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full h-24 bg-zinc-800 text-sm flex md:flex-row flex-col md:justify-between justify-center gap-y-4 items-center px-8 2xl:px-60 text-gray-300">
        <div>
          <b>Desenvolvido por: João Costa</b>
        </div>
        <div>
          <b>2022 © Todos os direitos reservados</b>
        </div>
      </footer>
    </div>
  );
}
