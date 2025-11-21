import { getAllNews } from "@/utilities/getAllNews";
import Image from "next/image";
import React from "react";

const Sidebar = async () => {
  const data = await getAllNews();
  return (
    <div>
      <div className="card bg-base-100  shadow-sm">
        <figure>
          <Image src={data[0].image_url} width={600} height={600} alt="image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{data[0]?.title}Card Title</h2>
          <p>{data[0]?.details}</p>

          <div className="card-actions ">
            <button className="btn bg-green-500 rounded-full">
              {data[0]?.category}
            </button>
          </div>
        </div>
       
       
      </div>

      <div className="grid grid-cols-1 gap-4 my-5">
        {data.slice(6, 11).map((news) => (
          <div key={news._id} className=" flex items-center my-4 shadow-lg p-4">
            <figure>
              <Image className="shadow-lg w-30 h-30 rounded-lg"
                src={data[0].image_url}
                width={600}
                height={600}
                alt="image"
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title">{news.title}</h2>
              <p className="text-purple-400">{news.author.published_date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
