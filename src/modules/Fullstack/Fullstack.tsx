import { GithubOutlined } from "@ant-design/icons"
import { Anchor, Carousel, Divider, Image } from "antd"
import Link from "antd/es/typography/Link"
import { CSSProperties } from "react"

const anchorItems = [
  {
    key: 1,
    href: "#clira",
    title: (
      <span className="text-[#EDEEE8] text-xl hover:text-[#b0a999]">Clira</span>
    ),
  },
  {
    key: 2,
    href: "#djurens-ratt",
    title: (
      <span className="text-[#EDEEE8] text-xl hover:text-[#b0a999]">
        Djurens Rätt
      </span>
    ),
  },
  {
    key: 3,
    href: "#other",
    title: (
      <span className="text-[#EDEEE8] text-xl hover:text-[#b0a999]">
        Other projects
      </span>
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
  "assets/images/clira/upprakningstal2.png",
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
  <Carousel
    autoplay
    autoplaySpeed={4000}
    className="md:max-w-[60%] md:ml-60 mb-4"
  >
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

      <Divider className="border mb-8" />
      <section>
        <article className="mb-8">
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
          <h3 className="text-2xl mb-8">Stack:</h3>
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
        <article className="mb-12 md:mb-16">
          <h3 className="text-2xl mt-12 mb-2">Highlights:</h3>

          <MapCarousel images={cliraImages} />

          <h4 className="text-xl mb-2 md:mb-4">
            <span className="font-semibold">Image 1-3:</span> Importing fields
            from forms in the procurement to the final agreement
          </h4>
          <p className="mb-8 md:mb-12">
            These images showcase the functionality I developed for importing
            fields from the bid form directly into the agreement once a bid has
            been selected. This feature ensures that only the fields marked to
            be included in the agreement are transferred, streamlining the
            contract creation process. The implementation was achieved using
            Laravel's events and listeners, along with recursion to handle
            complex form structures efficiently.
          </p>

          <h4 className="text-xl mb-2 md:mb-4">
            <span className="font-semibold">Image 4:</span> Activity log
          </h4>
          <p className="mb-8 md:mb-12">
            This image shows the activity log, which tracks and logs activities
            related to specific procurements or agreements. While the activity
            log was already in place, I rewrote it to make the underlying code
            more streamlined and maintainable. This refactor made it easier for
            developers to work with the log system and ensured that it
            efficiently displays only the relevant actions for each procurement
            or agreement. The update also improved the overall performance and
            reliability of the log, making it a more robust tool for tracking
            user activities.
          </p>

          <h4 className="text-xl mb-2 md:mb-4">
            <span className="font-semibold">Image 5:</span> Signing process via
            third-party API
          </h4>
          <p className="mb-8 md:mb-12">
            This image illustrates the signing process I continued to implement,
            which integrates with a third-party API to facilitate secure and
            efficient digital signatures. This feature enhances the overall
            workflow by enabling users to finalize agreements directly within
            the system, without needing external tools.
          </p>

          <h4 className="text-xl mb-2 md:mb-4">
            <span className="font-semibold">Image 6-7:</span> Evaluation model
            ("Uppräkningstal")
          </h4>
          <p className="mb-8 md:mb-12">
            These images demonstrate the evaluation model called
            "uppräkningstal" that I implemented. This model takes the responses
            from the bid form and calculates the final bid value based on the
            percentage parameters defined in the evaluation model. This
            automated calculation helps in making the evaluation process more
            objective and data-driven.
          </p>

          <h4 className="text-xl mb-2 md:mb-4">
            <span className="font-semibold">Image 8:</span> UI revamp
          </h4>
          <p>
            This image highlights the revamped user interface that I helped
            develop. The old UI was redesigned to be more user-friendly and
            visually appealing. I rewrote the underlying code to improve
            maintainability and collaborated closely with our designer to ensure
            the new design met both aesthetic and functional goals. This update
            not only improved the user experience but also made future updates
            and maintenance easier to manage.
          </p>
        </article>
      </section>

      <section>
        <article className="mb-8">
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

        <article className="mb-8">
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
          <h3 className="text-2xl mt-12 mb-2">Highlights:</h3>

          <MapCarousel images={drImages} />

          <h4 className="text-xl mb-2 md:mb-4">
            <span className="font-semibold">Image 1-3:</span> Blixtappen rebuild
          </h4>
          <p className="mb-8 md:mb-12">
            These images showcase the Blixtappen app, which I rewrote from
            scratch as part of an upgrade from Nuxt 2 to Nuxt 3. The update
            included migrating the state management from Vuex to Pinia,
            integrating Supabase for backend services, and setting up
            authentication with Auth0. I also connected the app to Firebase for
            database management. This overhaul ensured that the app was
            up-to-date with modern technologies, improving both performance and
            maintainability.
          </p>

          <h4 className="text-xl mb-2 md:mb-4">
            <span className="font-semibold">Image 4:</span> Djurens Rätt main
            page
          </h4>
          <p className="mb-8 md:mb-12">
            This image shows a section of Djurens Rätt's main website where I
            contributed to the design process. I provided feedback and
            suggestions to help refine the new design and then implemented these
            designs using a custom component library (which I did not code but
            utilized effectively). Additionally, I supported the development
            team during the process of rewriting the entire website, helping
            wherever possible to ensure a smooth transition to the new design.
          </p>

          <h4 className="text-xl mb-2 md:mb-4">
            <span className="font-semibold">Image 5:</span> BankID integration
            for signatures
          </h4>
          <p className="mb-8 md:mb-12">
            This image highlights the implementation of BankID for digital
            signatures via a third-party API. I developed this feature as a
            microservice within a monorepo, allowing it to be used across
            multiple apps within the repository. This modular approach ensured
            that the BankID signing functionality was consistent and easily
            accessible to all relevant applications, enhancing security and
            usability across the platform.
          </p>

          <h4 className="text-xl mb-2 md:mb-4">
            <span className="font-semibold">Image 6:</span> Rädda Djuren Klubben
            website enhancements
          </h4>
          <p className="mb-8 md:mb-12">
            This image features Rädda Djuren Klubben, one of the websites I
            worked on. My contributions included fixing bugs, rewriting portions
            of the code, and assisting with the design of new components. These
            efforts helped improve the functionality and user experience of the
            site, ensuring it met the high standards of Djurens Rätt's digital
            presence.
          </p>
        </article>
      </section>

      <Divider className="border my-8" />

      <section>
        <h3 id="other" className="text-2xl mb-8">
          Other projects
        </h3>
        <Link
          href="https://github.com/frinica"
          target="_blank"
          className="!text-[#EDEEE8] text-xl hover:!text-[#b0a999]"
        >
          <GithubOutlined className="mr-2 text-2xl hover:text-[#b0a999]" />
          Github
        </Link>
      </section>
    </section>
  )
}
