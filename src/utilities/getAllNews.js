export const getAllNews = async () => {
  const res = await fetch("http://localhost:5000/all-news", {
    cache: "force-cache",
  });
  const data = await res.json();
  return data;
};
