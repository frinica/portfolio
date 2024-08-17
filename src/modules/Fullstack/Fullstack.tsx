import { GithubOutlined } from "@ant-design/icons"
import { Anchor, Carousel, Divider, Image } from "antd"
import Link from "antd/es/typography/Link"
import { CSSProperties } from "react"

const anchorItems = [
  {
    key: 1,
    href: "#clira",
    title: <span style={{ color: "white", fontSize: "1.2rem" }}>Clira</span>,
  },
  {
    key: 2,
    href: "#djurens-ratt",
    title: (
      <span style={{ color: "white", fontSize: "1.2rem" }}>Djurens Rätt</span>
    ),
  },
]

const contentStyle: CSSProperties = {
  height: "30rem",
  width: "40rem",
  backgroundColor: "inherit",
  objectFit: "contain",
  justifySelf: "center",
  alignSelf: "center",
  paddingBottom: "2rem",
}

const cliraImages: string[] = [
  "assets/images/clira/importer1.png",
  "assets/images/clira/importer2.png",
  "assets/images/clira/importer3.png",
  "assets/images/clira/aktivitetslogg.png",
  "assets/images/clira/signeringsprocess.png",
  "assets/images/clira/upprakningstal1.png",
  "assets/images/clira/step1.png",
]

const drImages: string[] = [
  "assets/images/dr/blixtapp1.png",
  "assets/images/dr/blixtapp2.png",
  "assets/images/dr/blixtapp3.png",
  "assets/images/dr/kycklinglaget.png",
  "assets/images/dr/bankid.png",
  "assets/images/dr/raddadjuren.png",
]

const MapCarousel = ({ images }: { images: string[] }) => (
  <Carousel autoplay autoplaySpeed={4000} className="md:max-w-[60%] md:ml-60">
    {images.map((src, index) => (
      <div key={index} className="grid justify-items-center">
        <Image src={src} style={contentStyle} />
      </div>
    ))}
  </Carousel>
)

export const Fullstack = () => {
  return (
    <section>
      <div>
        <h1 className="text-4xl mb-10">Fullstack projects</h1>
        <Anchor items={anchorItems} affix={false} />
      </div>

      <Divider className="border" />
      <section>
        <article className="mb-4">
          <h2 id="clira" className="text-3xl mb-4 font-semibold">
            Clira
          </h2>
          <p>
            Clira is an advanced and innovative procurement platform designed to
            streamline and enhance procurement processes for businesses. As a
            developer on the Clira team, I contributed to both the development
            and maintenance of the platform, focusing on improving the codebase,
            enhancing the user experience, and implementing practical features
            that address the needs of procurement professionals.
          </p>
        </article>
        <article className="mb-4">
          <h3 className="text-2xl mb-2">Stack:</h3>
          <ul className="grid gap-y-2">
            <li>
              <span className="font-semibold">Backend:</span> PHP, Laravel
            </li>
            <li>
              <span className="font-semibold">Frontend:</span> Typescript,
              Next.js
            </li>
            <li>
              <span className="font-semibold">Containerization:</span> Docker
            </li>
            <li>
              <span className="font-semibold">State management:</span> Redux
              Toolkit, Tanstack React query
            </li>
            <li>
              <span className="font-semibold">Styling:</span> TailwindCSS
            </li>
            <li>
              <span className="font-semibold">Database:</span> PostgreSQL
            </li>
            <li>
              <span className="font-semibold">APIs:</span> RESTful APIs
            </li>
            <li>
              <span className="font-semibold">Testing:</span> PEST
            </li>
            <li>
              <span className="font-semibold">Version control:</span> Git
            </li>
          </ul>
        </article>
        <article>
          <MapCarousel images={cliraImages} />
        </article>
      </section>

      <section>
        <article className="mb-4">
          <h2 id="djurens-ratt" className="text-3xl mb-4 font-semibold">
            Djurens Rätt
          </h2>
          <p>
            Djurens Rätt is a prominent non-profit organization focused on
            animal rights, with a several digital applications designed to
            support their mission. As a developer on the team, I helped with
            maintaining and enhancing some of these applications, contributing
            to updates and implementing new features that improved the
            functionality and user experience.
          </p>
        </article>

        <article className="mb-4">
          <h3 className="text-2xl mb-2">Stack:</h3>
          <ul className="grid gap-y-2">
            <li>
              <span className="font-semibold">Fullstack:</span> Typescript,
              Nuxt.js
            </li>
            <li>
              <span className="font-semibold">Containerization:</span> Docker
            </li>
            <li>
              <span className="font-semibold">State management:</span> Piñia
              (replacing Vuex)
            </li>
            <li>
              <span className="font-semibold">Authentication:</span> Auth0
            </li>
            <li>
              <span className="font-semibold">Styling:</span> TailwindCSS
            </li>
            <li>
              <span className="font-semibold">Database:</span> Firebase
            </li>
            <li>
              <span className="font-semibold">APIs:</span> RESTful APIs
            </li>
            <li>
              <span className="font-semibold">Content Management:</span>{" "}
              Contentful, Forestry (now Tina)
            </li>
            <li>
              <span className="font-semibold">Version control:</span> Git
            </li>
          </ul>
        </article>

        <article>
          <MapCarousel images={drImages} />
        </article>
      </section>

      <Divider className="border my-8" />

      <section>
        <h3 className="text-2xl mb-4">Other projects</h3>
        <Link
          href="https://github.com/frinica"
          target="_blank"
          style={{ color: "white", fontSize: "1.2rem" }}
        >
          <GithubOutlined className="mr-2 text-white text-2xl" />
          Github
        </Link>
      </section>
    </section>
  )
}
