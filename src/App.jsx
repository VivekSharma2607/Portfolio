import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
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

  const sendEmail = () => {
    const recipient = "sharmavivek1709@gmail.com";
    const subject = encodeURIComponent("lets connect and create something");
    const body = encodeURIComponent("Hey Vivek, I found your portfolio and wanted to connect!");
  
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  };


  const skills = [
    { icon: <FaGolang />, name: "Golang", hcolor: "blue-400" },
    { icon: <TbBrandCpp />, name: "C++", hcolor: "blue-400" },
    { icon: <FaPython />, name: "Python", hcolor: "green-400" },
    {
      icon: <IoLogoJavascript />,
      name: "JavaScript",
      hcolor: "yellow-400",
    },
    { icon: <IoLogoReact />, name: "React", hcolor: "blue-400" },
    {
      icon: <RiTailwindCssFill />,
      name: "Tailwind",
      hcolor: "blue-400",
    },
    { icon: <FaDocker />, name: "Docker", hcolor: "blue-400" },
    { icon: <FaNodeJs />, name: "Node.js", hcolor: "green-400" },
    { icon: <FaAws />, name: "AWS", hcolor: "yellow-400" },
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
              <span className="cursor-pointer">Home</span>
            </button>
            <button className="flex items-center space-x-2 text-sm font-semibold text-white px-4 py-2 rounded-md hover:bg-gray-700 hover:text-gray-400">
              <RiNewspaperLine className="text-md" />
              <span className="cursor-pointer"
              onClick={() => {
                window.open("https://medium.com/@sharmavivek1709", "_blank");
              }}
              >Blogs</span>
            </button>
          </div>
          <div className="flex space-x-4">
            <FaEnvelope className="text-xl cursor-pointer hover:text-gray-400 rounded-md text-white"  onClick={sendEmail}/>
            <FaGithub
              className="text-xl cursor-pointer hover:text-gray-400 text-white"
              onClick={() => {
                window.open("https://github.com/vviveksharma", "_blank");
              }}
            />
            <FaLinkedin
              className="text-xl cursor-pointer hover:text-gray-400 text-white"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/vivek-sharma-207776187/",
                  "_blank"
                );
              }}
            />
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
          <ul className="mt-4 list-disc ml-6 space-y-1">
            <li className="text-sm font-Atkinson font-light text-gray-400">
              <u className="text-white cursor-pointer" onClick={() => {window.open("https://github.com/Password-Management")}}>Password Management System</u> RSA and
              ASA based encyption system to store password.
            </li>
            <li className="text-sm font-Atkinson font-light text-gray-400">
              <u className="text-white cursor-pointer" onClick={()=>{window.open("https://github.com/vviveksharma/Voting-System")}}>Voting system</u> hasing based voting
              system for vote safety.
            </li>
            <li className="text-sm font-Atkinson font-light text-gray-400">
              <u className="text-white cursor-pointer" onClick={() => {window.open("https://github.com/vviveksharma/BlockChain")}}>BlockChain</u> golang based blockchain.
            </li>
            <li className="text-sm font-Atkinson font-light text-gray-400">
              <u className="text-white cursor-pointer" onClick={()=>{window.open("https://github.com/vviveksharma/Anime-Recommendation-System")}}>Anime Recomendation System</u> on
              content based fitering and hosted using flask.
            </li>
          </ul>
          <div className=" p-4">Add your projects here...</div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold font-Roboto  text-white">
            Skills
          </h2>
          <div className="flex flex-wrap gap-6 text-xl">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center"
              >
                <span
                  className={`text-white text-3xl hover:text-${skill.hcolor})`}
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
