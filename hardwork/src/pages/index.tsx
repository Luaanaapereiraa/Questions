import React from 'react';
import Header from '../components/Header';
import Container from '../components/Container';

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <div className="flex flex-col items-center">
                <Container
                    title="QUESTÕES"
                    text="Prepare-se de forma personalizada respondendo ao banco de questões"
                    link="/pageTwo"
                    buttonText="Começar"
                />
                <Container
                    title="PERSONALIZAR"
                    text=""
                    link="/pageThree"
                    buttonText="Acessar"
                />
                <Container
                    title="MÉTRICAS"
                    text=""
                    link="/"
                    buttonText="Acessar"
                />
                <Container
                    title="CHATBOT"
                    text="Treine através de trívias geradas pelo novo chatbot do Telegram"
                    link="/"
                    buttonText="Começar"
                />
            </div>
        </div>
    );
};

export default Home;
