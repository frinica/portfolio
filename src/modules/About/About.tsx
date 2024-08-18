import { Anchor, Avatar, Button, Divider } from "antd"
import {
  DownloadOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons"

export const About = () => {
  const downloadPdf = () => {
    const link = document.createElement("a")
    link.href = "/assets/files/cv.pdf"
    link.download = "cv_frida_nicander.pdf"
    link.click()
  }

  const contactItems = [
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
        <MailOutlined className="text-[#dcd6d0] text-4xl hover:!text-[#b0a999]" />
      ),
      href: "mailto:ift.nicander@gmail.com",
      target: "_blank",
    },
  ]
  return (
    <section>
      <article>
        <h1 className="text-4xl mb-4 md:mb-6">Frida Nicander</h1>
        <h2 className="text-3xl mb-8 md:mb-12">Fullstack developer</h2>
        <p className="mb-4">
          Hi, I'm Frida, a Fullstack Developer with a deep passion for coding
          and a relentless drive to solve problems. I love diving into code,
          solving problems, and continuously learning new things. I approach
          every challenge with a positive attitude and a determination to see it
          through.
        </p>
        <p>
          In addition to my technical skills, I value strong communication and a
          deep understanding of user needs, which helps me collaborate
          effectively and deliver solutions that truly meet the mark. I also
          have a growing interest in design, which guides my work in creating
          not just functional, but also visually appealing and user-friendly
          applications. I'm excited to keep learning, growing, and contributing
          to projects that make a difference.
        </p>
      </article>

      <Divider className="border my-10" />

      <article>
        <h3 className="text-2xl font-semibold mb-8 md:mb-12">Experience</h3>
        <div className="flex">
          <Avatar
            size="large"
            src="assets\logos\clira_io_logo.jpg"
            className="mr-2"
          />
          <div>
            <h4 className="text-xl font-semibold">Clira</h4>
            <h5 className="font-semibold mb-2">Fullstack developer</h5>
          </div>
        </div>

        <p className="mb-10 md:mb-16">
          At Clira, I had the opportunity to help develop and maintain an
          innovative procurement system. Using Laravel and Next.js, I was part
          of building a platform that was both efficient and user-friendly. My
          role involved optimizing backend processes to keep things running
          smoothly and ensuring the system was reliable and scalable. I also
          took part in code reviews and troubleshooting, collaborating with my
          team to maintain high standards and keep the system stable. This
          experience not only improved my technical skills but also gave me a
          deeper understanding of good software development practices.
        </p>

        <div className="flex">
          <Avatar
            size="large"
            src="assets\logos\dr_logo.png"
            className="mr-2"
          />
          <div>
            <h4 className="text-xl font-semibold">Djurens Rätt</h4>
            <h5 className="font-semibold mb-2">Fullstack developer</h5>
          </div>
        </div>

        <p className="mb-8">
          At Djurens Rätt, I developed web applications using Nuxt.js to support
          the nonprofit's mission. I worked on implementing authentication with
          Auth0 and integrated various third-party APIs to enhance
          functionality. Collaborating closely with the design team, I helped
          ensure that the user experience was smooth and cohesive. I also
          assisted in deploying code and maintaining the applications, helping
          to keep everything running smoothly.
        </p>
      </article>

      <Divider className="border md:my-10" />

      <article>
        <h3 className="text-2xl font-semibold mb-8 md:mb-12">Education</h3>
        <div className="flex">
          <Avatar
            size="large"
            src="assets\logos\chas_academy_logo.jpg"
            className="mr-2"
          />
          <div>
            <h4 className="text-xl font-semibold">Chas Academy</h4>
            <h5 className="font-semibold mb-2">Fullstack web developer</h5>
          </div>
        </div>

        <p className="mb-8">
          I completed the Fullstack Web Developer program at Chas Academy, where
          I gained a solid foundation in both front-end and back-end
          development. During the program, I worked on practical projects that
          helped me get comfortable with technologies like JavaScript, PHP,
          HTML/CSS, and various back-end tools. The focus wasn't just on coding
          but also on teamwork, problem-solving, and creating user-friendly
          applications. This experience gave me the skills and confidence to
          kickstart my career as a fullstack developer.
        </p>
      </article>

      <Divider className="border md:my-10" />

      <article className="grid">
        <h3 className="text-2xl font-semibold mb-8">Download my CV</h3>
        <Button
          size="large"
          icon={
            <DownloadOutlined className="text-[#263430] hover:!text-[#dcd6d0]" />
          }
          type="primary"
          onClick={downloadPdf}
          className="bg-[#dcd6d0] hover:!bg-[#263430] hover:!border-[#dcd6d0]"
        />
      </article>

      <Divider className="border md:my-10" />

      <article id="contact">
        <h3 className="text-2xl font-semibold mb-8">Contact</h3>
        <Anchor items={contactItems} direction="horizontal" />
      </article>
    </section>
  )
}
