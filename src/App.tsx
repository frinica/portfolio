import { useState } from "react"
import "./App.css"
import { NavBar } from "./components/Navbar"
import { About } from "./modules/About/About"
import { Fullstack } from "./modules/Fullstack/Fullstack"
import { Home } from "./modules/Home/Home"

function App() {
  const [currentNavItem, setCurrentNavItem] = useState("")

  const renderComponent = (currentNavItem: string) => {
    switch (currentNavItem) {
      case "about":
        return <About />
      case "fullstack":
        return <Fullstack />
      case "contact":
        return <About />
      default:
        return <Home />
    }
  }

  return (
    <body
      className={`${
        currentNavItem === ""
          ? "bg-heroHome h-screen"
          : "bg-hero md:bg-heroDesktop h-fit"
      } bg-fixed bg-cover bg-bottom text-[#EDEEE8] leading-7`}
    >
      <header>
        <NavBar
          currentNavItem={currentNavItem}
          setCurrentNavItem={setCurrentNavItem}
        />
      </header>

      <main className="w-full p-10 pt-16 md:px-60">
        {renderComponent(currentNavItem)}
      </main>
    </body>
  )
}

export default App
