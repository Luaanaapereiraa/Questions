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

  useEffect(() => {
   
    async function fetchData() {
      try {
        const response = await fetch('https://hardworkmedicina.com.br/exemploQuestoes.json');
        const jsonData: ApiResponse = await response.json();
        setData(jsonData.obj);
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    }

    fetchData();
  }, []); 
  return (
    <div>
      <h1>Page Two</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <h2>{item.prova}</h2>
            <p>{item.questao}</p>
            <ul>
              {item.alternativas.map((alt, altIndex) => (
                <li key={altIndex}>{alt.alternativa}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PageTwo;
