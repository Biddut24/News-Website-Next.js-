import LatestNews from "@/Components/ui/LatestNews/LatestNews";
import Sidebar from "@/Components/ui/Sidebar/Sidebar";


export default function Home() {
  return (
    <div className="mx-6 my-3 flex justify-between gap-5">
      <div className=" md:w-2/3"><LatestNews/></div>
      <div className=" md:w-1/3"><Sidebar/> </div>
    </div>
  )}



