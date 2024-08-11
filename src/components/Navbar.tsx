import { Menu, type MenuProps } from "antd"

type NavProps = {
  currentNavItem: string
  setCurrentNavItem: (item: string) => void
}

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

export const NavBar = (props: NavProps) => {
  return (
    <Menu
      onClick={(e) => props.setCurrentNavItem(e.key)}
      selectedKeys={[props.currentNavItem]}
      mode="horizontal"
      items={menuItems}
      className="flex justify-end"
    />
  )
}
