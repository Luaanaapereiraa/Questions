import Image, { StaticImageData } from "next/image";
interface ContainerProps {
    title: string;
    text: string;
    link: string;
    buttonText: string;
    imageUrl: string;
}

const Container: React.FC<ContainerProps> = ({ title, text, link, buttonText, imageUrl }) => {
    return (
        <div className="border p-4 m-4 text-center rounded-lg bg-gradient-to-r from-purple-500 to-pink-600  w-80">
            <div className="flex justify-start items-center space-x-1 ">
                <Image
                    src={imageUrl}
                    alt="Image"
                    width={64}
                    height={64}
                    className="mx-auto"
                />
                <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
            </div>
            <p className="text-white">{text}</p>
            <div className="flex justify-end mt-2">
                <a href={link}
                    className="bg-white border rounded-full block mt-2 text-gray-800 font-semibold  text-sm py-1 px-6" >
                    {buttonText}
                </a>
            </div>
        </div>
    );
};

export default Container;