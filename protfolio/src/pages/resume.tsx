import ExperienceSection from "../components/resume-section";
import MobileEscapeLogo from "../assets/MobileEscape.png";
import EducationSection from "../components/education-section";

const education = [
  {
    facility: "University of Helsinki",
    certificate: "Certificate, Full Stack",
    period: "May 2023 - Nov 2023",
    description: (
      <div>
        Completed the Full Stack Open Online Course from the University of
        Helsinki, focusing on modern web development techniques and tools. Key
        areas of study included:
        <ul className="list-disc ml-5">
          <li className="mb-2">
            Frontend Development: Built responsive user interfaces using
            React.js, mastering components, state management, and hooks.
          </li>
          <li className="mb-2">
            Backend Development: Created server-side applications with Node.js
            and Express, integrating MongoDB for data storage.
          </li>
          <li className="mb-2">
            RESTful APIs: Designed and implemented RESTful APIs for efficient
            frontend-backend communication.
          </li>
          <li className="mb-2">
            Testing: Learned testing methodologies with Jest and Cypress to
            ensure application reliability.
          </li>
          <li className="mb-2">
            Version Control: Used Git and GitHub for version control and
            effective team collaboration.
          </li>
          <li className="mb-2">
            Deployment: Applied best practices for deploying applications to
            cloud platforms.
          </li>
        </ul>
        This course provided a solid foundation in full-stack web development,
        enabling me to build and maintain complex web applications.
      </div>
    ),
    logo: "/path/to/University_of_Helsinki_Logo.png", // Add the correct path to the logo
  },
  {
    facility: "freeCodeCamp",
    certificate: "Certificate, Full Stack Developer",
    period: "2022 - Jan 2023",
    description: (
      <div>
        Self-study certificates in HTML, CSS, JavaScript, Front-end libraries
        such as Bootstrap, SASS, jQuery. Special Emphasis on React and Redux,
        with several projects done using modern techniques such as Hooks and
        ES6.
      </div>
    ),
    logo: "/path/to/freeCodeCamp_Logo.png", // Add the correct path to the logo
  },
  {
    facility: "Technion - Israel Institute of Technology",
    certificate: "Bachelor’s Degree, Civil Engineering - Structures",
    period: "2008 - 2014",
    description: (
      <div>
        International Qualification Assessment Service (IQAS) assessed and
        equivalent to a 4-year degree in Bachelor of Science in Civil
        Engineering and Structural Engineering in Canada.
      </div>
    ),
    logo: "/path/to/Technion_Logo.png", // Add the correct path to the logo
  },
  {
    facility: "Igal Alon High School",
    period: "2005 - 2008",
    description: <div></div>,
    logo: "/path/to/Igal_Alon_High_School_Logo.png", // Add the correct path to the logo
  },
];

const experience = [
  {
    position: "Operations Manager",
    company: "Mobile Escape",
    period: "Jul 2022 - Present (1 year 11 months)",
    description: (
      <div>
        Promoted to Operations Manager to spearhead the development and growth
        of the e-commerce segment of the business.
        <ul className="list-disc ml-5">
          <li className="mb-2">
            Web App Development: Built and maintained a web app game portal
            using TypeScript and React.js, incorporating the latest features of
            React 18.
          </li>
          <li className="mb-2">
            UI/UX Enhancement: Implemented Tailwind CSS to enhance the portal's
            user interface, ensuring a modern, responsive, and visually
            appealing design.
          </li>
          <li className="mb-2">
            Website Optimization: Collaborated with the marketing team to
            improve the company website, focusing on maximizing conversion rates
            and enhancing user experience.
          </li>
          <li className="mb-2">
            E-commerce Automation: Automated logistics and fulfillment
            processes, integrating advanced e-commerce solutions to streamline
            operations and reduce costs.
          </li>
          <li className="mb-2">
            Third-Party Integrations: Improved supply chain efficiency by
            integrating a Third-Party Logistics (3PL) provider for product
            fulfillment, enhancing delivery speed and customer satisfaction.
          </li>
          <li className="mb-2">
            Content Management: Produced high-quality product photography and
            videography, contributing to an engaging and professional online
            presence.
          </li>
        </ul>
      </div>
    ),
    logo: MobileEscapeLogo,
  },
  {
    position: "E-commerce Operations Coordinator",
    company: "Mobile Escape",
    period: "Nov 2020 - Jul 2022 (1 year 8 months)",
    description: (
      <div>
        Managed day-to-day operations of an e-commerce business specializing in
        Escape Room-style tabletop games. Key responsibilities and achievements
        include:
        <ul className="list-disc ml-5">
          <li className="mb-2">
            Process Automation: Developed and implemented Excel macros using VBA
            to automate daily order fulfillment operations, increasing speed and
            accuracy by over 50%.
          </li>
          <li className="mb-2">
            Global Shipping Implementation: Designed and executed a
            comprehensive worldwide shipping plan, integrating a tool for
            instant price fetching and label printing from all major carriers.
          </li>
          <li className="mb-2">
            Cost Reduction: Reduced operational costs by outsourcing
            manufacturing and fulfillment processes, streamlining operations and
            improving profit margins.
          </li>
          <li className="mb-2">
            Social Media Management: Took charge of the company’s social media
            accounts, posting regularly and implementing growth techniques to
            boost engagement and expand our online presence.
          </li>
        </ul>
        The success and efficiency achieved through process automation in this
        role inspired me to start learning web development, leading to my
        transition into building and maintaining web applications.
      </div>
    ),
    logo: MobileEscapeLogo,
  },
  {
    position: "Career Break: World Travel and Volunteer Work",
    company: "Self Employed",
    period: "Apr 2019 - Mar 2020 (1 year)",
    description: (
      <div>
        Took a deliberate career break to pursue personal growth and cultural
        enrichment through extensive travel and volunteer work. This experience
        provided invaluable opportunities for personal development, cultural
        immersion, and global perspective, enriching both professional and
        personal life.
      </div>
    ),
    logo: "",
  },
  {
    position: "Buyer",
    company: "Graham",
    period: "Jan 2018 - Mar 2019 (1 year 3 months)",
    description: (
      <div>
        Managed procurement and supply chain operations for the Bonnybrook
        Wastewater Treatment Plant and regional projects. Secured optimal prices
        and quality for daily purchase orders through vendor negotiations and
        relationship building. Implemented efficient purchasing procedures,
        including bulk POs and a Toolcrib system, reducing unresolved invoices
        to below 15%. Collaborated with project teams to develop RFP packages
        valued at $100k-$1M, leading vendor meetings to ensure alignment with
        project specifications. This role honed my skills in procurement, cost
        management, and vendor relations.
      </div>
    ),
    logo: "",
  },
  {
    position: "Construction Technician",
    company: "Tecnicas Reunidas",
    period: "Jan 2017 - Dec 2017 (1 year)",
    description: (
      <div>
        Coordinated construction activities for the Canadian branch of an
        international corporation, managing current and future projects. Built
        and maintained relationships with subcontractors, produced purchase
        orders, and communicated with site personnel to efficiently resolve
        issues, ensuring smooth project execution and strong operational
        performance.
      </div>
    ),
    logo: "",
  },
];

const Resume = () => {
  return (
    <div className="z-0 h-full py-8 bg-[#EAEFF5]">
      <div id="experience" className="flex flex-col  items-center">
        <h1 id="outer">
          <h1
            id="inner"
            className="effect-shine md:text-6xl text-4xl md:my-6 my-2 text-black font-Bebas "
          >
            EXPERIENCE
          </h1>
        </h1>
        {experience.map((position, i) => {
          return (
            i < 2 && (
              <ExperienceSection
                position={position.position}
                company={position.company}
                period={position.period}
                logo={position.logo}
                description={position.description}
              />
            )
          );
        })}
      </div>
      <div id="education" className="flex flex-col  items-center">
        <h1 id="outer">
          <h1
            id="inner"
            className="effect-shine md:text-6xl text-4xl md:my-6 my-2 text-black font-Bebas "
          >
            Education
          </h1>
        </h1>
        {education.map((course, i) => {
          return (
            <EducationSection
              facility={course.facility}
              certificate={course.certificate}
              period={course.period}
              logo={course.logo}
              description={course.description}
            />
          );
        })}
      </div>
      <div id="further-experience" className="flex flex-col  items-center">
        <h1 id="outer">
          <h1
            id="inner"
            className="effect-shine md:text-6xl text-4xl md:my-6 my-2 text-black font-Bebas "
          >
            FURTHER EXPERIENCE
          </h1>
        </h1>
        {experience.map((position, i) => {
          return (
            i >= 2 && (
              <ExperienceSection
                position={position.position}
                company={position.company}
                period={position.period}
                logo={position.logo}
                description={position.description}
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default Resume;
