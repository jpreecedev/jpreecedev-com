import * as React from "react"

import jonpreece from "../images/jonpreece-square.jpg"

import "../styles.css"

const IndexPage = () => (
  <main className="container">
    <header>
      <img className="avatar" src={jonpreece} alt="Jon Preece" />
      <h1>Jon Preece</h1>
      <h2>Specialist Front-end Web Developer</h2>
    </header>
    <section id="contact" className="contact">
      <p>
        Connect with me on <a href="https://www.linkedin.com/in/jonpreecedev/">LinkedIn</a>
      </p>
    </section>
  </main>
)

export default IndexPage
