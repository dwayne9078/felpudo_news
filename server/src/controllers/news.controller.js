import News from "../models/news.model.js";

export const getAllNews = async (req, res) => {
  const news = await News.find();
  return res.status(200).json({ news });
};

export const getNewsById = () => {};
export const createNews = () => {};
export const modifyNews = () => {};
export const deleteNews = () => {};
