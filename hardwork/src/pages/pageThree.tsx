import Link from 'next/link';
import React, { useState } from 'react';

const PageThree: React.FC = () => {
  const [dailyGoal, setDailyGoal] = useState(100);
  const [areaToggles, setAreaToggles] = useState([false, false, false, false, false]);

  const handleDailyGoalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    setDailyGoal(newValue);
  };

  const handleToggleChange = (index: number) => {
    const newToggles = [...areaToggles];
    newToggles[index] = !newToggles[index];
    setAreaToggles(newToggles);
  };
  return (
    <div className="mt-24 bg-gradient-to-r from-purple-500 to-pink-600 min-h-screen">

      <div className="bg-black p-4 shadow-md w-[650px] rounded-md mx-auto flex justify-between items-center">
        <div className="flex justify-start items-center space-x-1">
          <Link href="/">
            <p className="bg-white border rounded-full text-black bold p-2 px-6">Voltar</p>
          </Link>
        </div>
        <div className="flex justify-start items-center space-x-1" >
          <h2 className="text-white ">PERSONALIZAR</h2>
        </div>
      </div>
      <div className="border p-4 m-4 text-center rounded-lg bg-gray-300  shadow-md w-[650px] mx-auto">
        <h2 className="text-xl font-bold text-black mb-2">Definir Meta diária de questões</h2>
        <input
          type="range"
          min="0"
          max="200"
          value={dailyGoal}
          onChange={handleDailyGoalChange}
          className="w-full bg-gray-700 "
        />
        <div className="flex justify-between text-sm text-gray-500">
          <span>0</span>
          <span>{dailyGoal}</span>
          <span>200</span>
        </div>
      </div>
      <div className="border p-4 m-4 text-center rounded-lg bg-gray-300 shadow-md w-[650px] mx-auto">
        <h2 className="text-xl font-bold text-black mb-2">Questões por Grandes áreas</h2>
        <div className="grid grid-cols-1 gap-4">
          {['Clínica médica', 'Cirurgia geral', 'Pediatria', 'Ginecologia e obstetrícia', 'Medicina preventiva'].map((areaText, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-100 p-4 rounded-md shadow-md"
            >
              <p>{areaText}</p>
              <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="{`areaToggle${index}`}"
                    id="{`areaToggle${index}`}"
                    value=""
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300" />
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
            <button className="border bg-white rounded-full text-black bold p-2 px-6 border-black transition duration-300 hover:bg-gray-300 hover:text-black hover:border-white shadow-lg">
              Confirmar resposta
            </button>
          </div>
    </div>

  );
};

export default PageThree;