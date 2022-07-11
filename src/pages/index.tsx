import * as React from "react"

const HomePage = () => (
  <main className="flex flex-col items-center gap-4 mb-36">
    <h1>Jon Preece</h1>
    <img src="/jonpreece-square.jpg" alt="Jon Preece" className="rounded-full" />
    <p>
      Connect with me on{" "}
      <a href="https://www.linkedin.com/in/jonpreecedev/" className="underline underline-offset-2">
        LinkedIn
      </a>
    </p>
  </main>
)

export default HomePage
