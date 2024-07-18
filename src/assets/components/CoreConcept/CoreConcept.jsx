import "./CoreConcept.css"

export default function CoreConcept({ ex }) {
    return (
        <li>
            <img src={ex.image} alt={ex.title} />
            <h3>{ex.title}</h3>
            <p>{ex.description}</p>
        </li>
    );
}