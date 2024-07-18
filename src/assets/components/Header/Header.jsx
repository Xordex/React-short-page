import reactImg from "../../react-core-concepts.png"
import "./Header.css"

export function Header() {
    const desc = ["Fundamental", "Crucial", "Core"];

    function los(max) {
        return Math.floor(Math.random() * (max + 1));
    }

    return (
        <header>
            <img src={reactImg} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {desc[los(2)]} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    );
}