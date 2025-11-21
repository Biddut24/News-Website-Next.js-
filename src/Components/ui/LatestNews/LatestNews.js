import { getAllNews } from "@/utilities/getAllNews";
import Image from "next/image";
import React from "react";

const latestNews = async () => {
  const data = await getAllNews();
  console.log(data.length);

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

      <div className="grid grid-cols-2 gap-4 my-5">
        {data.slice(1, 5).map((news) => (
          <div key={news._id} className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <Image src={data[0].image_url} width={600} height={600} alt="image"/>
            </figure>

            <div className="card-body">
              <h2 className="card-title">{news.title}</h2>
              <p>{news.details}</p>

              <div className="card-actions">
                <button className="btn bg-green-500 rounded-full">
                  {data[0]?.category}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default latestNews;
