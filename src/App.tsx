import { useState } from "react"
import "./App.css"
import { NavBar } from "./components/Navbar"
import { About } from "./modules/About/About"
import { Fullstack } from "./modules/Fullstack/Fullstack"

function App() {
  const [currentNavItem, setCurrentNavItem] = useState("about")

  const renderComponent = (currentNavItem: string) => {
    switch (currentNavItem) {
      case "about":
        return <About />
      case "fullstack":
        return <Fullstack />
      default:
        return <About />
    }
  }

  return (
    <body className="bg-slate-950 text-white">
      <header>
        <NavBar
          currentNavItem={currentNavItem}
          setCurrentNavItem={setCurrentNavItem}
        />
      </header>

      <main className="p-10 md:px-20 md:pb-20 inline-block">
        {renderComponent(currentNavItem)}
      </main>
    </body>
  )
}

export default App
