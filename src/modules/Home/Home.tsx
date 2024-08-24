import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons"
import { Anchor } from "antd"

export const Home = () => {
  const links = [
    {
      key: 1,
      title: (
        <LinkedinOutlined className="text-[#dcd6d0] text-4xl hover:!text-[#b0a999]" />
      ),
      href: "https://www.linkedin.com/in/frida-nicander/",
      target: "_blank",
    },
    {
      key: 2,
      title: (
        <MailOutlined className="text-[#dcd6d0] text-4xl hover:!text-[#b0a999] mx-6" />
      ),
      href: "mailto:ift.nicander@gmail.com",
      target: "_blank",
    },
    {
      key: 3,
      title: (
        <GithubOutlined className="text-[#dcd6d0] text-4xl hover:!text-[#b0a999]" />
      ),
      href: "https://github.com/frinica",
      target: "_blank",
    },
  ]
  return (
    <section className="text-center fadeIn">
      <p>Portfolio</p>
      <h1 className="text-5xl my-6">Frida Nicander</h1>
      <h2 className="text-2xl mt-8">Fullstack developer</h2>

      <Anchor
        items={links}
        direction="horizontal"
        className="flex justify-center mt-28 md:mt-16"
      />
    </section>
  )
}
