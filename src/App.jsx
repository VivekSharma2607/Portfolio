import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import clsx from "clsx";
import { IoHomeOutline } from "react-icons/io5";
import { RiNewspaperLine } from "react-icons/ri";
import { FaGolang } from "react-icons/fa6";
import { FaAws } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { FaPython } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoReact } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaDocker } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiKubernetes } from "react-icons/si";

export default function App() {
  const skills = [
    { icon: <FaGolang />, name: "Golang", hcolor: "blue-400" },
    { icon: <TbBrandCpp />, name: "C++", hcolor: "blue-400" },
    { icon: <FaPython />, name: "Python", hcolor: "IconYellow" },
    {
      icon: <IoLogoJavascript />,
      name: "JavaScript",
      hcolor: "IconYellow",
    },
    { icon: <IoLogoReact />, name: "React", hcolor: "blue-400" },
    {
      icon: <RiTailwindCssFill />,
      name: "Tailwind",
      hcolor: "blue-400",
    },
    { icon: <FaDocker />, name: "Docker", hcolor: "blue-400" },
    { icon: <FaNodeJs />, name: "Node.js", hcolor: "Icongreen" },
    { icon: <FaAws />, name: "AWS", hcolor: "IconYellow" },
    {
      icon: <BiLogoPostgresql />,
      name: "Postgres",
      hcolor: "blue-400",
    },
    { icon: <SiKubernetes />, name: "Kubernetes", hcolor: "blue-400" },
  ];
  return (
    <div className="w-full min-h-screen bg-black flex justify-center p-4">
      <div className="w-full max-w-4xl bg-black p-6 rounded-lg shadow-lg flex flex-col ">
        <div className="flex justify-between items-center mb-2">
          <div className="flex ">
            <button className="flex items-center space-x-1 text-sm font-semibold text-white px-4 py-2 rounded-md hover:bg-gray-700 hover:text-gray-400">
              <IoHomeOutline className="text-md" />
              <span>Home</span>
            </button>
            <button className="flex items-center space-x-2 text-sm font-semibold text-white px-4 py-2 rounded-md hover:bg-gray-700 hover:text-gray-400">
              <RiNewspaperLine className="text-md" />
              <span>Blogs</span>
            </button>
          </div>
          <div className="flex space-x-4">
            <FaEnvelope className="text-xl cursor-pointer hover:text-gray-400 rounded-md text-white" />
            <FaGithub className="text-xl cursor-pointer hover:text-gray-400 text-white" />
            <FaLinkedin className="text-xl cursor-pointer hover:text-gray-400 text-white" />
          </div>
        </div>

        {/* Introduction */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold font-Roboto text-white ">
            Hi, I'm Vivek Sharma
          </h1>
          <ul className="mt-4 list-disc ml-6 space-y-1">
            <li className="text-sm font-Atkinson font-light text-gray-400">
              Passionate full stack developer and learning about system designs.
            </li>
            <li className="text-sm font-Atkinson font-light text-gray-400">
              Worked at python based startup as django dev.
            </li>
            <li className="text-sm font-Atkinson font-light text-gray-400">
              Working at <span className="text-white">Progress</span> as SDE-II
            </li>
            <li className="text-sm font-Atkinson font-light text-gray-400">
              Reach out to me if you want to find a way to work together!
            </li>
          </ul>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold font-mb-4 font-Roboto text-white">
            Projects
          </h2>
          <div className=" p-4">Add your projects here...</div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold font-Roboto mb-4 text-white">
            Skills
          </h2>
          <div className="flex flex-wrap gap-6 text-xl">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center"
              >
                <span
                  className={`text-white text-3xl hover:text-${skill.hcolor}`}
                >
                  {skill.icon}
                </span>
                <span className="absolute bottom-[-30px] opacity-0 text-sm text-white  px-2 py-1 rounded transition-opacity group-hover:opacity-100">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
