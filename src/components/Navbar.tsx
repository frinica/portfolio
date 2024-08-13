import { Menu, type MenuProps } from "antd"

type NavProps = {
  currentNavItem: string
  setCurrentNavItem: (item: string) => void
}

type MenuItem = Required<MenuProps>["items"][number]

const menuItems: MenuItem[] = [
  {
    label: "About me",
    key: "about",
    style: { color: "white" },
  },
  {
    label: "Fullstack projects",
    key: "fullstack",
    style: { color: "white" },
  },
  {
    label: "Contact",
    key: "contact",
    style: { color: "white" },
  },
]

export const NavBar = (props: NavProps) => {
  return (
    <Menu
      onClick={(e) => props.setCurrentNavItem(e.key)}
      selectedKeys={[props.currentNavItem]}
      mode="horizontal"
      items={menuItems}
      className="flex md:justify-end bg-inherit"
    />
  )
}
