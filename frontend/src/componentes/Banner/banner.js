import './banner.css';

function Banner() {
    return (
        <header className="banner">
            <img src={`${process.env.PUBLIC_URL}/imagens/banner.png`} alt="Logo" className="banner-image" />

            <div className="banner-text">
                <h1>O R G A N O </h1>
            </div>
        </header>
    );
}

export default Banner;
