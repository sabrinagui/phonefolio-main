import { getConfigData } from "../data/configReader";
import Projects from "../components/Projects";

export default function Home() {
  const configData = getConfigData();
  return (
    <div className="px-7 py-7">
      <h1 className="flex items-center gap-x-2 text-lg font-medium">
        <div className="w-4 h-2 bg-gray-400 rounded-full"></div>
        Projects
      </h1>
      <div className="mt-5">
      <Projects />
      
      </div>
    </div>
  );
}
