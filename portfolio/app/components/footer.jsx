export default function Footer() {
  return (
    <nav className=" flex justify-between px-16 py-2 flex-wrap bg-gray-800 items-center text-gray-400 border-t border-slate-50 ">
      <div className="flex gap-4 align-center justify-self-end text-lg">
        <a href="#" className="hover:text-primary transition duration-300">
          Work
        </a>
        <a href="#" className="hover:text-primary transition duration-300">
          Photography
        </a>
        <a href="#" className="hover:text-primary transition duration-300">
          About
        </a>
      </div>
      <a href="/" className="grid grid-1 ">
        <h3 className="font-pacifica text-xl font-bold">NOMAD</h3>
        <h3 className="w-20 pl-6 font-pacifica text-xl font-bold italic  text-secondary leading-3">
          VLAD
        </h3>
      </a>
      <div className="flex gap-4">
        <a id="github" href="https://github.com/vkats90" target="_blank">
          <svg
            className="fill-gray-400 hover:fill-primary transition duration-300"
            width="20px"
            height="20px"
            viewBox="0 0 1920 1920"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1821.63 637.76c0-130.027-43.627-236.373-116.054-319.68 11.627-30.187 50.347-151.36-11.2-315.307 0 0-94.72-32-310.4 122.134-90.133-26.454-186.773-39.68-282.773-40.107-96 .427-192.64 13.653-282.667 40.107C602.749-29.227 507.923 2.773 507.923 2.773c-61.547 163.947-22.72 285.12-11.094 315.307-72.32 83.307-116.266 189.653-116.266 319.68 0 456.533 263.68 558.72 514.453 588.8 0 0-180.267 111.68-180.267 299.413-64.32 30.507-336.533 123.947-437.333-58.133 0 0-59.627-114.347-173.013-122.773 0 0-110.294-1.494-7.787 72.426 0 0 74.027 36.694 125.44 174.294 0 0 57.173 289.92 489.067 159.68 4.373 2.24 1.6 140.266 1.6 168.533h777.173s1.28-277.013 1.28-365.12c0-216.64-144.64-292.48-185.28-329.28 251.627-29.44 515.733-130.133 515.733-587.84"
              fillRule="evenodd"
            />
          </svg>
        </a>
        <a
          id="linkedin"
          href="https://www.linkedin.com/in/vladimirkats/"
          target="blank"
        >
          <svg
            className="fill-gray-400 hover:fill-primary transition duration-300"
            width="20px"
            height="20px"
            viewBox="0 0 1920 1920"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M478.234 600.75V1920H.036V600.75h478.198Zm720.853-2.438v77.737c69.807-45.056 150.308-71.249 272.38-71.249 397.577 0 448.521 308.666 448.521 577.562v737.602h-480.6v-700.836c0-117.867-42.173-140.215-120.15-140.215-74.134 0-120.151 23.55-120.151 140.215v700.836h-480.6V598.312h480.6ZM239.099 0c131.925 0 239.099 107.294 239.099 239.099s-107.174 239.099-239.1 239.099C107.295 478.198 0 370.904 0 239.098 0 107.295 107.294 0 239.099 0Z"
              fill-rule="evenodd"
            />
          </svg>
        </a>
        <a
          id="facebook"
          href="https://www.facebook.com/nomadvlad/"
          target="_blank"
        >
          <svg
            className="fill-gray-400 hover:fill-primary transition duration-300"
            width="20px"
            height="20px"
            viewBox="0 0 1920 1920"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1168.737 487.897c44.672-41.401 113.824-36.889 118.9-36.663l289.354-.113 6.317-417.504L1539.65 22.9C1511.675 16.02 1426.053 0 1237.324 0 901.268 0 675.425 235.206 675.425 585.137v93.97H337v451.234h338.425V1920h451.234v-789.66h356.7l62.045-451.233H1126.66v-69.152c0-54.937 14.214-96.112 42.078-122.058"
              fill-rule="evenodd"
            />
          </svg>
        </a>
        <a
          id="instagram"
          href="https://www.instagram.com/nomadvlad/"
          target="_blank"
        >
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            className="fill-gray-400 hover:fill-primary transition duration-300"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM12 15.88C9.86 15.88 8.12 14.14 8.12 12C8.12 9.86 9.86 8.12 12 8.12C14.14 8.12 15.88 9.86 15.88 12C15.88 14.14 14.14 15.88 12 15.88ZM17.92 6.88C17.87 7 17.8 7.11 17.71 7.21C17.61 7.3 17.5 7.37 17.38 7.42C17.26 7.47 17.13 7.5 17 7.5C16.73 7.5 16.48 7.4 16.29 7.21C16.2 7.11 16.13 7 16.08 6.88C16.03 6.76 16 6.63 16 6.5C16 6.37 16.03 6.24 16.08 6.12C16.13 5.99 16.2 5.89 16.29 5.79C16.52 5.56 16.87 5.45 17.19 5.52C17.26 5.53 17.32 5.55 17.38 5.58C17.44 5.6 17.5 5.63 17.56 5.67C17.61 5.7 17.66 5.75 17.71 5.79C17.8 5.89 17.87 5.99 17.92 6.12C17.97 6.24 18 6.37 18 6.5C18 6.63 17.97 6.76 17.92 6.88Z" />
          </svg>
        </a>
      </div>
    </nav>
  );
}
