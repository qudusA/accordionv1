import { useState } from "react";

export default function App() {
  return (
    <main className="body">
      <Body />
    </main>
  );
}

function Body() {
  return (
    <div className="inner-container">
      <Accordion num="01" question="Where are these chairs assembled?" />
      <Accordion num="02" question="how long do i have to return the chair?" />
      <Accordion num="03" question="Do you ship to countries outside EU?" />
    </div>
  );
}

function Accordion({ num, question }) {
  const [isOpen, setIsOpen] = useState(true);
  function handleOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <div className={isOpen ? "accord" : "closeAccord"}>
      <div className="question">
        <span>{num}</span> <p>{question}</p>
        <span onClick={handleOpen} className="min">
          {isOpen ? "-" : "+"}
        </span>
      </div>
      <div className={isOpen ? "answer" : "closeAnswer"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At ex aliquam,
        tempora quod voluptas voluptate blanditiis consectetur vitae, error
        nisi, eaque ipsum ratione qui quasi voluptatibus veniam? Eum, cupiditate
        sed!
      </div>
    </div>
  );
}
