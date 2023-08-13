import Image from 'next/image';
import HomeIcon from "../../public/homeIcon.png"

const Header: React.FC = () => {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-black p-6">
            <a href="/"
                className="bg-white border rounded-md block mt-2 text-gray-800 font-bold  text-sm py-1 px-6" >
                LOGOTIPO
            </a>
            <div className="flex justify-end items-center space-x-1 ">
            <a href="/">
            <div className="flex items-center border rounded-md bg-white">
                <Image src={HomeIcon} alt="Home Icon" width={40} height={40} className="mr-2" />
            </div>
            </a>
            <a href="/">
            <p className="text-white bold">HOME</p>
            </a>
            </div>


        </nav>
    );
};

export default Header;