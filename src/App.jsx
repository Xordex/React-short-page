import { CORE_CONCEPTS } from "./data";
import { Header } from "./assets/components/Header/Header.jsx";
import CoreConcept from "./assets/components/CoreConcept/CoreConcept.jsx";
import TabButton from "./assets/components/TabButton/TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "./data";

function App() {
  let [nameBtn, setNameBtn] = useState("");

  let tabContent = <p>Please select a topic.</p>;
  if (nameBtn) {
    tabContent = <>
      <h3>{EXAMPLES[nameBtn].title}</h3>
      <p>{EXAMPLES[nameBtn].description}</p>
      <pre>
        <code>
          {EXAMPLES[nameBtn].code}
        </code>
      </pre></>
  }

  function changeContent(selectedbtn) {
    setNameBtn(selectedbtn);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((x) => <CoreConcept ex={x} key={x.title} />)}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={(x) => changeContent(x.target.innerHTML)} isSelected={nameBtn === "Components"}>Components</TabButton>
            <TabButton onSelect={(x) => changeContent(x.target.innerHTML)} isSelected={nameBtn === "JSX"}>JSX</TabButton>
            <TabButton onSelect={(x) => changeContent(x.target.innerHTML)} isSelected={nameBtn === "Props"}>Props</TabButton>
            <TabButton onSelect={(x) => changeContent(x.target.innerHTML)} isSelected={nameBtn === "State"}>State</TabButton>
          </menu>
          <div id="tab-content">
            {tabContent}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;