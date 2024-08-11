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
    <body>
      <header>
        <NavBar
          currentNavItem={currentNavItem}
          setCurrentNavItem={setCurrentNavItem}
        />
      </header>

      <main>{renderComponent(currentNavItem)}</main>
    </body>
  )
}

export default App
