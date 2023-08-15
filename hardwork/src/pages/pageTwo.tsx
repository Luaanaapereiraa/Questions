import Link from 'next/link';
import React, { useState, useEffect } from 'react';

interface Alternative {
  id: number;
  alternativa: string;
}

interface Question {
  prova: string;
  id_questao: number;
  questao: string;
  alternativas: Alternative[];
}

interface ApiResponse {
  ok: boolean;
  msg: string;
  obj: Question[];
}

const PageTwo: React.FC = () => {
  const [data, setData] = useState<Question[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/exemploQuestoes');
        const jsonData: ApiResponse = await response.json();

        if (jsonData.obj && Array.isArray(jsonData.obj)) {
          setData(jsonData.obj);
          console.log('Dados carregados:', jsonData.obj);
        } else {
          console.error('Dados da API não estão no formato esperado:', jsonData);
        }
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    }

    fetchData();
  }, []);

  const totalPages = data.length;

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const currentQuestion = data[currentPage - 1];

  return (
    <div className="mt-28 bg-gray-100 min-h-screen">
      <div className="bg-black p-4 shadow-md w-[650px] rounded-md mx-auto">
        <div className="flex justify-start items-center space-x-1">
          <Link href="/">
            <p className="bg-white border rounded-full text-black bold p-2 px-6">Voltar</p>
          </Link>
          <div >
            <h2 className="text-white">QUESTÕES</h2>
            </div>
        </div>
      </div>
      {currentQuestion && (
        <div>
          <div className="mt-12 bg-black text-white p-5 rounded-md mb-2 w-[650px] mx-auto shadow-md">
            <h2 className="text-lg font-bold mb-2">{currentQuestion.questao}</h2>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {currentQuestion.alternativas.map((alt, altIndex) => (
              <div
                key={altIndex}
                className="bg-gray-300 p-4 rounded-md text-black text-center w-[650px] mx-auto shadow-md transition duration-300 hover:bg-gray-300 hover:text-gray-500 hover:border-white"
              >
                {String.fromCharCode(65 + altIndex)}. {alt.alternativa}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <button className="border rounded-full text-black bold p-2 px-6 border-black transition duration-300 hover:bg-black hover:text-white hover:border-white">
              Confirmar resposta
            </button>
          </div>
        </div>
      )}
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-md flex justify-center">
        <button
          className="bg-gray-300 text-black px-4 py-2 rounded-md"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Página Anterior
        </button>
        <div className="ml-4 flex space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`${currentPage === index + 1 ? 'bg-green-500 text-white' : 'bg-gray-300 text-black'
                } px-4 py-2 rounded-md`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          className="bg-gray-300 text-black px-4 py-2 rounded-md ml-4"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Próxima Página
        </button>
      </div>
    </div>
  );
};
export default PageTwo;
