import { Menu, type MenuProps } from "antd"
import { useState } from "react"

type MenuItem = Required<MenuProps>["items"][number]

const menuItems: MenuItem[] = [
  {
    label: "Om Frida",
    key: "about",
  },
  {
    label: "Fullstack-projekt",
    key: "fullstack",
  },
  {
    label: "Kontakt",
    key: "contact",
  },
]

export const NavBar = () => {
  const [currentItem, setCurrentItem] = useState("about")

  return (
    <Menu
      onClick={(e) => setCurrentItem(e.key)}
      selectedKeys={[currentItem]}
      mode="horizontal"
      items={menuItems}
      className="flex justify-end"
    />
  )
}
