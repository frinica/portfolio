import { Menu, type MenuProps } from "antd"
import Link from "antd/es/typography/Link"

type NavProps = {
  currentNavItem: string
  setCurrentNavItem: (item: string) => void
}

type MenuItem = Required<MenuProps>["items"][number]

const menuItems: MenuItem[] = [
  {
    label: "About me",
    key: "about",
    style: { color: "#EDEEE8" },
  },
  {
    label: "Fullstack projects",
    key: "fullstack",
    style: { color: "#EDEEE8" },
  },
  {
    label: <Link href="#contact">Contact</Link>,
    key: "contact",
    style: { color: "#EDEEE8" },
  },
]

export const NavBar = (props: NavProps) => {
  const handleClick = (e: any) => {
    props.setCurrentNavItem(e.key)
  }

  return (
    <Menu
      onClick={handleClick}
      selectedKeys={[props.currentNavItem]}
      mode="horizontal"
      items={menuItems}
      className="flex md:justify-end bg-inherit"
    />
  )
}
