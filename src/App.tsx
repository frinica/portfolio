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
    <body className="bg-[#263430] text-[#EDEEE8] leading-7">
      <header>
        <NavBar
          currentNavItem={currentNavItem}
          setCurrentNavItem={setCurrentNavItem}
        />
      </header>

      <main className="inline-block h-full w-full bg-hero bg-fixed bg-cover md:bg-heroDesktop">
        <div className="p-10 bg-black bg-opacity-25 md:px-60 md:py-20">
          {renderComponent(currentNavItem)}
        </div>
      </main>
    </body>
  )
}

export default App
