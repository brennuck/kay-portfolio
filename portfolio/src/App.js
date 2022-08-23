import "./styles.css";
import namelogo from "./images/namelogo.png";

function App() {
    return (
        <div className="App">
            <header>
                <img src={namelogo} alt="kayla nuckols" className="nameLogo" />
            </header>
            <div className="body">
                <h1 className="bigheader">
                    Sed ut perspiciatis unde omnis iste natus
                </h1>
                <a href="mailto:kaylanucks@gmail.com" className="emailButton">
                    Email Me
                </a>
            </div>
        </div>
    );
}

export default App;
