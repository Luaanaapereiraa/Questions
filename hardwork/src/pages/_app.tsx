import '../styles.css';
import Header from '../components/Header';

function Hardwork({ Component, pageProps }) {
    return (
        <div>
            <div className="fixed top-0 w-full z-10">
                <Header />
            </div>

            <Component {...pageProps} />
        </div>
    );
}

export default Hardwork;