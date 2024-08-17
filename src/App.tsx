import { useState } from "react"
import "./App.css"
import { NavBar } from "./components/Navbar"
import { About } from "./modules/About/About"
import { Fullstack } from "./modules/Fullstack/Fullstack"
import { useRoutes } from "react-router-dom"

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
    <body className="bg-slate-950 text-white pb-10 md:pb-20">
      <header>
        <NavBar
          currentNavItem={currentNavItem}
          setCurrentNavItem={setCurrentNavItem}
        />
      </header>

      <main className="p-10 md:px-20 inline-block h-screen w-full">
        {renderComponent(currentNavItem)}
      </main>
    </body>
  )
}

export default App
