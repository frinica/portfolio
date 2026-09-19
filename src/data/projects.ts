export interface ProjectHighlight {
  title: string
  description: string
  images: string[]
}

export interface ProjectStackEntry {
  label: string
  value: string
}

export interface ProjectDetail {
  slug: string
  title: string
  cardImage: string
  cardTags: string[]
  cardDescription: string
  overview: string
  stack: ProjectStackEntry[]
  highlights: ProjectHighlight[]
}

export const projects: ProjectDetail[] = [
  {
    slug: "djurens-ratt",
    title: "Djurens Rätt",
    cardImage: "/assets/images/dr/blixtapp1.png",
    cardTags: ["#Nuxt", "#TypeScript", "#Auth0"],
    cardDescription:
      "Web applications for Sweden's animal rights organization, built with Nuxt. Implemented Auth0 authentication, integrated third-party APIs, and helped rebuild a legacy app from Nuxt 2 to Nuxt 3 with Pinia.",
    overview:
      "Djurens Rätt is a prominent non-profit organization focused on animal rights, with several digital applications designed to support their mission. As a developer on the team, I helped maintain and enhance some of these applications, contributing to updates and implementing new features that improved functionality and user experience.",
    stack: [
      { label: "Fullstack", value: "TypeScript, Nuxt.js" },
      { label: "Containerization", value: "Docker" },
      { label: "State management", value: "Pinia (replacing Vuex)" },
      { label: "Authentication", value: "Auth0" },
      { label: "Styling", value: "TailwindCSS" },
      { label: "Database", value: "Firebase" },
      { label: "APIs", value: "RESTful APIs" },
      { label: "Content management", value: "Contentful, Forestry (now Tina)" },
      { label: "Version control", value: "Git" },
    ],
    highlights: [
      {
        title: "Blixtappen rebuild",
        description:
          "Rewrote the Blixtappen app from scratch as part of an upgrade from Nuxt 2 to Nuxt 3 — migrating state management from Vuex to Pinia, integrating Supabase for backend services, setting up Auth0 authentication, and connecting to Firebase for database management.",
        images: [
          "/assets/images/dr/blixtapp1.png",
          "/assets/images/dr/blixtapp2.png",
          "/assets/images/dr/blixtapp3.png",
        ],
      },
      {
        title: "Djurens Rätt main page",
        description:
          "Contributed to the design process for a section of Djurens Rätt's main website — provided feedback to help refine the new design, implemented it using a custom component library, and supported the wider team through the site's full rewrite.",
        images: ["/assets/images/dr/kycklinglaget.png"],
      },
      {
        title: "BankID integration for signatures",
        description:
          "Implemented BankID for digital signatures via a third-party API, developed as a microservice within a monorepo so it could be reused across multiple apps — enhancing security and usability across the platform.",
        images: ["/assets/images/dr/bankid.png"],
      },
      {
        title: "Rädda Djuren Klubben enhancements",
        description:
          "Contributed to Rädda Djuren Klubben — fixing bugs, rewriting portions of the code, and assisting with the design of new components to improve functionality and user experience.",
        images: ["/assets/images/dr/raddadjuren.png"],
      },
    ],
  },
  {
    slug: "clira",
    title: "Clira",
    cardImage: "/assets/images/clira/importer1.png",
    cardTags: ["#Laravel", "#NextJS", "#TypeScript"],
    cardDescription:
      "A procurement platform built in a fast-paced startup environment. Contributed across the stack, improving the codebase and shipping features like a bid-evaluation calculator and third-party e-signature integration.",
    overview:
      "Clira is an advanced and innovative procurement platform designed to streamline and enhance procurement processes. As a developer on the Clira team, I've had the exciting challenge of working in a fast-paced startup environment, where things move quickly and adaptability is key. I've contributed to both the development and maintenance of the platform, worked on improving the codebase, enhancing the user experience, and implementing practical features that address the needs of Clira's customers.",
    stack: [
      { label: "Backend", value: "PHP, Laravel" },
      { label: "Frontend", value: "TypeScript, Next.js" },
      { label: "Containerization", value: "Docker" },
      { label: "State management", value: "Redux Toolkit, TanStack Query" },
      { label: "Styling", value: "TailwindCSS" },
      { label: "Database", value: "PostgreSQL" },
      { label: "APIs", value: "RESTful APIs" },
      { label: "Testing", value: "PEST" },
      { label: "Version control", value: "Git" },
    ],
    highlights: [
      {
        title: "Importing fields from bid to agreement",
        description:
          "Built functionality for importing fields from the bid form directly into the agreement once a bid has been selected. Only the fields marked to be included are transferred, streamlining contract creation — implemented using Laravel's events and listeners, plus recursion to handle complex form structures.",
        images: [
          "/assets/images/clira/importer1.png",
          "/assets/images/clira/importer2.png",
          "/assets/images/clira/importer3.png",
        ],
      },
      {
        title: "Activity log",
        description:
          "Tracks and logs activity related to specific procurements or agreements. Rewrote the underlying code to be more streamlined and maintainable, improving performance and reliability.",
        images: ["/assets/images/clira/aktivitetslogg.png"],
      },
      {
        title: "Signing process via third-party API",
        description:
          "Integrated a third-party e-signature API so agreements can be finalized directly within the system, without needing external tools.",
        images: ["/assets/images/clira/signeringsprocess.png"],
      },
      {
        title: 'Evaluation model ("uppräkningstal")',
        description:
          "Built a model that takes responses from the bid form and calculates the final bid value based on percentage parameters — making the evaluation process more objective and data-driven.",
        images: [
          "/assets/images/clira/upprakningstal1.png",
          "/assets/images/clira/upprakningstal2.png",
        ],
      },
      {
        title: "UI revamp",
        description:
          "Rewrote the underlying code of a redesigned UI for maintainability, collaborating closely with the designer to meet both aesthetic and functional goals.",
        images: ["/assets/images/clira/step1.png"],
      },
    ],
  },
]
