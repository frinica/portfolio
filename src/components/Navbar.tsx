import { Menu, type MenuProps } from "antd"
import Link from "antd/es/typography/Link"
import { useNavigate } from "react-router-dom"

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
    label: <Link href="#contact">Contact</Link>,
    key: "contact",
    style: { color: "white" },
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
