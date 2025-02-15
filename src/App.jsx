import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { RiBloggerLine } from "react-icons/ri";
export default function App() {
  return (
    <div className="w-full min-h-screen bg-black  flex justify-center p-4">
      <div className="w-full max-w-2xl bg-black p-6 rounded-lg shadow-lg flex flex-col mt-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-4">
            <button className="flex items-center space-x-2 text-lg font-semibold text-white px-4 py-2 rounded-md hover:bg-gray-700 hover:text-gray-400">
              <IoHomeOutline className="text-md" />
              <span>Home</span>
            </button>
            <button className="flex items-center space-x-2 text-lg font-semibold text-white px-4 py-2 rounded-md hover:bg-gray-700 hover:text-gray-400">
              <RiBloggerLine className="text-md" />
              <span>Blogs</span>
            </button>
          </div>
          <div className="flex space-x-4">
            <FaEnvelope className="text-2xl cursor-pointer hover:text-gray-400 rounded-md text-white" />
            <FaGithub className="text-2xl cursor-pointer hover:text-gray-400 text-white" />
            <FaLinkedin className="text-2xl cursor-pointer hover:text-gray-400 text-white" />
          </div>
        </div>

        {/* Introduction */}
        <div className="mb-6">
          <h1 className="text-2xl font-normal text-white">Hi, Vivek Sharma</h1>
          <ul className="mt-4 list-disc ml-6 space-y-2">
            <li className="text-sm font-medium text-gray-400">
              Passionate full stack developer and learning about system designs.
            </li>
            <li className="text-sm font-medium text-gray-400">
              Worked at python based startup as django dev.
            </li>
            <li className="text-sm font-medium text-gray-400">
              Working at Progress as SDE - 2.
            </li>
            <li className="text-sm font-medium text-gray-400">
              Reach out to me if you want to find a way to work together!
            </li>
          </ul>
        </div>

        {/* Projects Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-white">Projects</h2>
          <div className=" p-4">Add your projects here...</div>
        </div>

        {/* Skills Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-white">Skills</h2>
          <div className="flex flex-wrap gap-4 text-3xl"></div>
        </div>
      </div>
    </div>
  );
}
