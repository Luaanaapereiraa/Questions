import React from 'react';
import Header from '../components/Header';
import Container from '../components/Container';
import QuestionIcon from '../../public/question.png';
import PersonalizeIcon from '../../public/personalize.png';
import MetricsIcon from '../../public/metrics.png';
import ChatbotIcon from '../../public/chatbot.png';

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <div className="flex flex-col items-center">
                <Container
                    imageUrl={QuestionIcon}
                    title="QUESTÕES"
                    text="Prepare-se de forma personalizada respondendo ao banco de questões"
                    link="/pageTwo"
                    buttonText="Começar"
                />
                <Container
                    imageUrl={PersonalizeIcon}
                    title="PERSONALIZAR"
                    text=""
                    link="/pageThree"
                    buttonText="Acessar"
                />
                <Container
                    imageUrl={MetricsIcon}
                    title="MÉTRICAS"
                    text=""
                    link="/"
                    buttonText="Acessar"
                />
                <Container
                    imageUrl={ChatbotIcon}
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
