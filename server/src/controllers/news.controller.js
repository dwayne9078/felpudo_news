import News from "../models/news.model.js";

export const getAllNews = async (req, res) => {
  const news = await News.find();
  return res.status(200).json({ news });
};

export const getNewsById = async (req, res) => {
  try {
    const newsId = req.params.id;

    const news = await News.findById(newsId);

    if (!news) {
      return res.status(404).json({ message: "News not found" });
    }

    res.status(200).json(news);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export const createNews = () => {};
export const modifyNews = () => {};
export const deleteNews = () => {};
